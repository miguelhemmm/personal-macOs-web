import { FC, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import {
  StyledMail,
  StyledHeader,
  StyledForm,
  StyledField,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  StyledButton,
  StyledStatus,
} from "./Mail.styled";

type FormStatus = "idle" | "sending" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const Mail: FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = t("Mail.required", "This field is required");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("Mail.required", "This field is required");
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t("Mail.invalidEmail", "Please enter a valid email");
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t("Mail.required", "This field is required");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("Mail.required", "This field is required");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormData]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateForm()) return;

      setStatus("sending");

      try {
        // Create mailto link with form data
        const mailtoLink = `mailto:miguelhem.dev@gmail.com?subject=${encodeURIComponent(
          `[Portfolio Contact] ${formData.subject}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        // Open mail client
        window.location.href = mailtoLink;

        // Simulate success after opening mail client
        setTimeout(() => {
          setStatus("success");
          setFormData(initialFormData);
        }, 500);
      } catch {
        setStatus("error");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formData]
  );

  const resetForm = () => {
    setStatus("idle");
    setFormData(initialFormData);
    setErrors({});
  };

  if (status === "success") {
    return (
      <StyledMail>
        <StyledStatus $type="success">
          <CheckCircleIcon />
          <h3>{t("Mail.successTitle", "Message Sent!")}</h3>
          <p>
            {t(
              "Mail.successMessage",
              "Your default mail client has been opened with the message. Please send the email to complete the process."
            )}
          </p>
          <button onClick={resetForm}>
            {t("Mail.sendAnother", "Send Another Message")}
          </button>
        </StyledStatus>
      </StyledMail>
    );
  }

  if (status === "error") {
    return (
      <StyledMail>
        <StyledStatus $type="error">
          <ErrorIcon />
          <h3>{t("Mail.errorTitle", "Something went wrong")}</h3>
          <p>
            {t(
              "Mail.errorMessage",
              "Unable to open your mail client. Please try again or contact me directly at miguelhem.dev@gmail.com"
            )}
          </p>
          <button onClick={resetForm}>{t("Mail.tryAgain", "Try Again")}</button>
        </StyledStatus>
      </StyledMail>
    );
  }

  return (
    <StyledMail>
      <StyledHeader>
        <h2>{t("Mail.title", "Get in Touch")}</h2>
        <p>
          {t(
            "Mail.subtitle",
            "Have a question or want to work together? Send me a message!"
          )}
        </p>
      </StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <StyledField>
          <StyledLabel htmlFor="name">{t("Mail.name", "Name")}</StyledLabel>
          <StyledInput
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("Mail.namePlaceholder", "Your name")}
            $hasError={!!errors.name}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </StyledField>

        <StyledField>
          <StyledLabel htmlFor="email">{t("Mail.email", "Email")}</StyledLabel>
          <StyledInput
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("Mail.emailPlaceholder", "your.email@example.com")}
            $hasError={!!errors.email}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </StyledField>

        <StyledField>
          <StyledLabel htmlFor="subject">
            {t("Mail.subject", "Subject")}
          </StyledLabel>
          <StyledInput
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t("Mail.subjectPlaceholder", "What is this about?")}
            $hasError={!!errors.subject}
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
        </StyledField>

        <StyledField>
          <StyledLabel htmlFor="message">
            {t("Mail.message", "Message")}
          </StyledLabel>
          <StyledTextarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("Mail.messagePlaceholder", "Your message...")}
            rows={6}
            $hasError={!!errors.message}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </StyledField>

        <StyledButton type="submit" disabled={status === "sending"}>
          <SendIcon />
          {status === "sending"
            ? t("Mail.sending", "Opening Mail Client...")
            : t("Mail.send", "Send Message")}
        </StyledButton>
      </StyledForm>
    </StyledMail>
  );
};
