import { FC, useState, useRef, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import {
  StyledTerminal,
  StyledOutput,
  StyledInputLine,
  StyledPrompt,
  StyledInput,
  StyledWelcome,
  StyledCommandOutput,
} from "./Terminal.styled";

interface CommandOutput {
  id: number;
  command: string;
  output: string | string[];
  isError?: boolean;
}

const ASCII_ART = `
 __  __ _                  _
|  \\/  (_) __ _ _   _  ___| |
| |\\/| | |/ _\` | | | |/ _ \\ |
| |  | | | (_| | |_| |  __/ |
|_|  |_|_|\\__, |\\__,_|\\___|_|
          |___/
`;

export const Terminal: FC = () => {
  const { t } = useTranslation();
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const idCounter = useRef(0);

  const commands: Record<string, () => string | string[]> = {
    help: () => [
      "Available commands:",
      "  help      - Show this help message",
      "  about     - Learn about me",
      "  skills    - List my technical skills",
      "  projects  - View my projects",
      "  contact   - Get my contact information",
      "  experience - View my work experience",
      "  education - View my education",
      "  clear     - Clear the terminal",
      "  ls        - List directory contents",
      "  pwd       - Print working directory",
      "  whoami    - Display current user",
      "  date      - Display current date and time",
      "  echo      - Echo a message",
      "  neofetch  - Display system information",
      "  matrix    - Enter the Matrix (Easter egg)",
    ],
    about: () => [
      "╔══════════════════════════════════════════════════════════╗",
      "║                    ABOUT ME                              ║",
      "╠══════════════════════════════════════════════════════════╣",
      "║  Name: Miguel Hernández                                  ║",
      "║  Role: Senior Software Engineer                          ║",
      "║  Location: LATAM                                         ║",
      "║                                                          ║",
      "║  I'm a passionate developer with 7+ years of experience  ║",
      "║  specializing in frontend development with React,        ║",
      "║  Angular, and modern web technologies.                   ║",
      "╚══════════════════════════════════════════════════════════╝",
    ],
    skills: () => [
      "Technical Skills:",
      "",
      "  Frontend:",
      "    • React, Angular, TypeScript, JavaScript",
      "    • HTML5, CSS3, Sass, Emotion, styled-components",
      "    • Redux, MobX, Context API",
      "",
      "  Backend:",
      "    • Node.js, Express, NestJS",
      "    • Python, Java",
      "",
      "  DevOps:",
      "    • Docker, Kubernetes, AWS, GCP",
      "    • CI/CD, Jenkins, GitHub Actions",
      "",
      "  Testing:",
      "    • Jest, React Testing Library, Cypress",
      "    • Unit, Integration, E2E testing",
    ],
    projects: () => [
      "Featured Projects:",
      "",
      "  1. Angular to React Migration",
      "     Enterprise-level migration for a major retail client",
      "     Tech: React, TypeScript, Redux",
      "",
      "  2. Hospitality Management Apps",
      "     Suite of applications for hotel management",
      "     Tech: Angular, Node.js, MongoDB",
      "",
      "  3. Performance Optimization",
      "     50% improvement in load times for e-commerce platform",
      "     Tech: React, Webpack, Lighthouse",
      "",
      "  Type 'open projects' to view more details",
    ],
    contact: () => [
      "Contact Information:",
      "",
      "  📧 Email: miguelhem.dev@gmail.com",
      "  💼 LinkedIn: linkedin.com/in/miguelhem",
      "  🐙 GitHub: github.com/miguelhem",
      "  📱 WhatsApp: Available on request",
      "",
      "  Feel free to reach out for collaborations!",
    ],
    experience: () => [
      "Work Experience:",
      "",
      "  🏢 Globant (2020 - Present)",
      "     Senior Software Engineer",
      "     Leading frontend teams, architecture decisions",
      "",
      "  🏢 EPAM Systems (2018 - 2020)",
      "     Software Engineer",
      "     Full-stack development, client projects",
      "",
      "  🏢 Tata Consultancy Services (2016 - 2018)",
      "     Junior Developer",
      "     Started professional career",
    ],
    education: () => [
      "Education:",
      "",
      "  🎓 Universidad Nacional",
      "     Systems Engineering",
      "     2012 - 2016",
      "",
      "  📚 Various Certifications:",
      "     • AWS Certified Developer",
      "     • Google Cloud Professional",
      "     • React Advanced Patterns",
    ],
    clear: () => {
      setHistory([]);
      return "";
    },
    ls: () => [
      "about.md    contact.txt    education/",
      "projects/   skills.json    experience/",
    ],
    pwd: () => "/home/miguelhem/portfolio",
    whoami: () => "miguelhem",
    date: () => new Date().toString(),
    neofetch: () => [
      "                    miguelhem@portfolio",
      "   ██████████       ─────────────────────",
      "  ██        ██      OS: macOS Portfolio",
      "  ██  ████  ██      Host: Personal Website",
      "  ██  ████  ██      Kernel: React 18.2.0",
      "  ██        ██      Shell: Terminal.tsx",
      "   ██████████       Theme: Dark/Light Mode",
      "                    Icons: Material UI",
      "  ██████████████    Terminal: Custom",
      "  ██            ██  CPU: TypeScript @ 5.2.2",
      "  ██            ██  Memory: Emotion + styled",
      "  ██████████████",
    ],
    matrix: () => [
      "Wake up, Neo...",
      "The Matrix has you...",
      "Follow the white rabbit.",
      "",
      "🐇 Knock, knock, Neo.",
    ],
  };

  const processCommand = useCallback((cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const args = trimmedCmd.split(" ");
    const mainCommand = args[0];

    if (mainCommand === "echo") {
      return cmd.slice(5) || "";
    }

    if (mainCommand in commands) {
      return commands[mainCommand]();
    }

    return `Command not found: ${mainCommand}. Type 'help' for available commands.`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (!currentCommand.trim()) return;

      const output = processCommand(currentCommand);

      if (currentCommand.trim().toLowerCase() !== "clear") {
        idCounter.current += 1;
        setHistory((prev) => [
          ...prev,
          {
            id: idCounter.current,
            command: currentCommand,
            output,
            isError:
              typeof output === "string" &&
              output.startsWith("Command not found"),
          },
        ]);
      }

      setCommandHistory((prev) => [...prev, currentCommand]);
      setHistoryIndex(-1);
      setCurrentCommand("");
    },
    [currentCommand, processCommand]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (commandHistory.length > 0) {
          const newIndex =
            historyIndex < commandHistory.length - 1
              ? historyIndex + 1
              : historyIndex;
          setHistoryIndex(newIndex);
          setCurrentCommand(
            commandHistory[commandHistory.length - 1 - newIndex] || ""
          );
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndex > 0) {
          const newIndex = historyIndex - 1;
          setHistoryIndex(newIndex);
          setCurrentCommand(
            commandHistory[commandHistory.length - 1 - newIndex] || ""
          );
        } else if (historyIndex === 0) {
          setHistoryIndex(-1);
          setCurrentCommand("");
        }
      }
    },
    [commandHistory, historyIndex]
  );

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <StyledTerminal onClick={handleTerminalClick}>
      <StyledOutput ref={outputRef}>
        <StyledWelcome>
          <pre>{ASCII_ART}</pre>
          <p>{t("Terminal.welcome", "Welcome to Miguel's Terminal!")}</p>
          <p>{t("Terminal.typeHelp", "Type 'help' for available commands.")}</p>
        </StyledWelcome>

        {history.map((item) => (
          <StyledCommandOutput key={item.id} $isError={item.isError}>
            <StyledInputLine>
              <StyledPrompt>miguelhem@portfolio:~$</StyledPrompt>
              <span>{item.command}</span>
            </StyledInputLine>
            <div className="output">
              {Array.isArray(item.output)
                ? item.output.map((line, i) => <div key={i}>{line}</div>)
                : item.output}
            </div>
          </StyledCommandOutput>
        ))}

        <form onSubmit={handleSubmit}>
          <StyledInputLine>
            <StyledPrompt>miguelhem@portfolio:~$</StyledPrompt>
            <StyledInput
              ref={inputRef}
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </StyledInputLine>
        </form>
      </StyledOutput>
    </StyledTerminal>
  );
};
