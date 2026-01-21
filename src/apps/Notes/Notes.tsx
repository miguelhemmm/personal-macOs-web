import { FC, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import {
  StyledNotes,
  StyledSidebar,
  StyledNotesList,
  StyledNoteItem,
  StyledSearchBar,
  StyledContent,
  StyledEditor,
  StyledEmptyState,
  StyledToolbar,
  StyledIconButton,
} from "./Notes.styled";

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const generateId = () => `note-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

const DEFAULT_NOTES: Note[] = [
  {
    id: "note-1",
    title: "Welcome to Notes",
    content: "This is a simple notes app built with React.\n\nFeatures:\n- Create new notes\n- Edit existing notes\n- Delete notes\n- Search notes\n\nStart typing to create your first note!",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "note-2",
    title: "About This Portfolio",
    content: "This portfolio is built with:\n\n• React 18\n• TypeScript\n• Emotion & styled-components\n• Material-UI Icons\n• Vite\n\nIt features a macOS-inspired design with functional apps like this Notes app, Terminal, Calculator, and more.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const Notes: FC = () => {
  const { t } = useTranslation();
  const [notes, setNotes] = useState<Note[]>(DEFAULT_NOTES);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(DEFAULT_NOTES[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedNote = notes.find((n) => n.id === selectedNoteId) || null;

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const createNote = useCallback(() => {
    const newNote: Note = {
      id: generateId(),
      title: t("Notes.newNote", "New Note"),
      content: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setNotes((prev) => [newNote, ...prev]);
    setSelectedNoteId(newNote.id);
  }, [t]);

  const deleteNote = useCallback((id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
    if (selectedNoteId === id) {
      setSelectedNoteId(notes.find((n) => n.id !== id)?.id || null);
    }
  }, [notes, selectedNoteId]);

  const updateNote = useCallback((id: string, updates: Partial<Note>) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, ...updates, updatedAt: new Date() }
          : note
      )
    );
  }, []);

  const handleContentChange = (content: string) => {
    if (!selectedNoteId) return;

    const lines = content.split("\n");
    const title = lines[0] || t("Notes.newNote", "New Note");

    updateNote(selectedNoteId, { title, content });
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <StyledNotes>
      <StyledSidebar>
        <StyledToolbar>
          <StyledIconButton onClick={createNote} title={t("Notes.newNote", "New Note")}>
            <AddIcon />
          </StyledIconButton>
        </StyledToolbar>
        <StyledSearchBar>
          <SearchIcon />
          <input
            type="text"
            placeholder={t("Notes.search", "Search")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </StyledSearchBar>
        <StyledNotesList>
          {filteredNotes.map((note) => (
            <StyledNoteItem
              key={note.id}
              $isSelected={note.id === selectedNoteId}
              onClick={() => setSelectedNoteId(note.id)}
            >
              <div className="note-title">{note.title}</div>
              <div className="note-preview">
                <span className="note-date">{formatDate(note.updatedAt)}</span>
                <span className="note-excerpt">
                  {note.content.split("\n").slice(1).join(" ").slice(0, 50) || t("Notes.noContent", "No additional text")}
                </span>
              </div>
              <button
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteNote(note.id);
                }}
                title={t("Notes.delete", "Delete")}
              >
                <DeleteIcon />
              </button>
            </StyledNoteItem>
          ))}
        </StyledNotesList>
      </StyledSidebar>
      <StyledContent>
        {selectedNote ? (
          <StyledEditor
            value={selectedNote.content}
            onChange={(e) => handleContentChange(e.target.value)}
            placeholder={t("Notes.startTyping", "Start typing...")}
            spellCheck={false}
          />
        ) : (
          <StyledEmptyState>
            <p>{t("Notes.noNoteSelected", "Select a note or create a new one")}</p>
            <button onClick={createNote}>
              <AddIcon />
              {t("Notes.createNote", "Create Note")}
            </button>
          </StyledEmptyState>
        )}
      </StyledContent>
    </StyledNotes>
  );
};
