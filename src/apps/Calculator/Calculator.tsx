import { FC, useState, useCallback } from "react";
import {
  StyledCalculator,
  StyledDisplay,
  StyledButtonGrid,
  StyledButton,
} from "./Calculator.styled";

type Operator = "+" | "-" | "×" | "÷" | null;

export const Calculator: FC = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<Operator>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = useCallback(
    (digit: string) => {
      if (waitingForOperand) {
        setDisplay(digit);
        setWaitingForOperand(false);
      } else {
        setDisplay(display === "0" ? digit : display + digit);
      }
    },
    [display, waitingForOperand]
  );

  const inputDecimal = useCallback(() => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  }, [display, waitingForOperand]);

  const clear = useCallback(() => {
    setDisplay("0");
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  }, []);

  const toggleSign = useCallback(() => {
    const value = parseFloat(display);
    setDisplay(String(-value));
  }, [display]);

  const inputPercent = useCallback(() => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  }, [display]);

  const performOperation = useCallback(
    (nextOperator: Operator) => {
      const inputValue = parseFloat(display);

      if (previousValue === null) {
        setPreviousValue(inputValue);
      } else if (operator) {
        const currentValue = previousValue || 0;
        let result: number;

        switch (operator) {
          case "+":
            result = currentValue + inputValue;
            break;
          case "-":
            result = currentValue - inputValue;
            break;
          case "×":
            result = currentValue * inputValue;
            break;
          case "÷":
            result = inputValue !== 0 ? currentValue / inputValue : 0;
            break;
          default:
            result = inputValue;
        }

        setDisplay(String(result));
        setPreviousValue(result);
      }

      setWaitingForOperand(true);
      setOperator(nextOperator);
    },
    [display, operator, previousValue]
  );

  const calculate = useCallback(() => {
    if (operator === null || previousValue === null) return;

    const inputValue = parseFloat(display);
    let result: number;

    switch (operator) {
      case "+":
        result = previousValue + inputValue;
        break;
      case "-":
        result = previousValue - inputValue;
        break;
      case "×":
        result = previousValue * inputValue;
        break;
      case "÷":
        result = inputValue !== 0 ? previousValue / inputValue : 0;
        break;
      default:
        return;
    }

    setDisplay(String(result));
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(true);
  }, [display, operator, previousValue]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key >= "0" && e.key <= "9") {
        inputDigit(e.key);
      } else if (e.key === ".") {
        inputDecimal();
      } else if (e.key === "+" || e.key === "-") {
        performOperation(e.key as Operator);
      } else if (e.key === "*") {
        performOperation("×");
      } else if (e.key === "/") {
        e.preventDefault();
        performOperation("÷");
      } else if (e.key === "Enter" || e.key === "=") {
        calculate();
      } else if (e.key === "Escape" || e.key === "c" || e.key === "C") {
        clear();
      } else if (e.key === "Backspace") {
        setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
      }
    },
    [inputDigit, inputDecimal, performOperation, calculate, clear, display]
  );

  const buttons = [
    { label: "AC", onClick: clear, type: "function" as const },
    { label: "±", onClick: toggleSign, type: "function" as const },
    { label: "%", onClick: inputPercent, type: "function" as const },
    { label: "÷", onClick: () => performOperation("÷"), type: "operator" as const },
    { label: "7", onClick: () => inputDigit("7"), type: "number" as const },
    { label: "8", onClick: () => inputDigit("8"), type: "number" as const },
    { label: "9", onClick: () => inputDigit("9"), type: "number" as const },
    { label: "×", onClick: () => performOperation("×"), type: "operator" as const },
    { label: "4", onClick: () => inputDigit("4"), type: "number" as const },
    { label: "5", onClick: () => inputDigit("5"), type: "number" as const },
    { label: "6", onClick: () => inputDigit("6"), type: "number" as const },
    { label: "-", onClick: () => performOperation("-"), type: "operator" as const },
    { label: "1", onClick: () => inputDigit("1"), type: "number" as const },
    { label: "2", onClick: () => inputDigit("2"), type: "number" as const },
    { label: "3", onClick: () => inputDigit("3"), type: "number" as const },
    { label: "+", onClick: () => performOperation("+"), type: "operator" as const },
    { label: "0", onClick: () => inputDigit("0"), type: "number" as const, wide: true },
    { label: ".", onClick: inputDecimal, type: "number" as const },
    { label: "=", onClick: calculate, type: "operator" as const },
  ];

  return (
    <StyledCalculator tabIndex={0} onKeyDown={handleKeyDown}>
      <StyledDisplay>{display}</StyledDisplay>
      <StyledButtonGrid>
        {buttons.map((btn) => (
          <StyledButton
            key={btn.label}
            onClick={btn.onClick}
            $type={btn.type}
            $wide={btn.wide}
            $isActive={operator === btn.label}
          >
            {btn.label}
          </StyledButton>
        ))}
      </StyledButtonGrid>
    </StyledCalculator>
  );
};
