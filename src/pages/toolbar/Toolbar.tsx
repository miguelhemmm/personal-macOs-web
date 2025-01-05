// Toolbar.tsx
import { FC, Fragment } from "react";
import "./toolbar.scss";
import { StyledDivider, StyledTooltip } from "./Toolbar.styled";
import { IosCard } from "shared";
import { useMediaQuery } from "@mui/material";
import finderIcon from "../../assets/finder-icon.png";
import siriIcon from "../../assets/siri-icon.png";
import contactsIcon from "../../assets/contacts-icon.png";
import messagesIcon from "../../assets/messages-icon.png";
import notesIcon from "../../assets/notes-icon.png";
import musicIcon from "../../assets/music-icon.png";
import trashIcon from "../../assets/trash-icon.png";

const icons = [
  {
    name: "Finder",
    src: finderIcon,
  },
  {
    name: "Siri",
    src: siriIcon,
  },
  {
    name: "Contacts",
    src: contactsIcon,
  },
  {
    name: "Messages",
    src: messagesIcon,
  },
  {
    name: "Notes",
    src: notesIcon,
  },
  {
    name: "Music",
    src: musicIcon,
  },
  {
    name: "Trash",
    src: trashIcon,
  },
];

interface Props {
  minimize?: boolean;
  setMinimize?: (minimize: boolean) => void;
}

export const Toolbar: FC<Props> = ({ minimize, setMinimize }) => {
  const matches = useMediaQuery("(max-width:740px)");

  const renderIosCard = () => {
    return (
      <div onClick={() => setMinimize?.(false)}>
        <IosCard
          title="miguelhem@Macbook-Pro"
          body="Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure"
          footer=""
          isIcon
        />
      </div>
    );
  };
  return (
    <>
      {!matches && (
        <div className="container">
          {icons.map((icon) => (
            <Fragment key={icon.name}>
              {icon.name === "Trash" && <StyledDivider />}
              <StyledTooltip
                arrow
                title={icon.name}
                placement="top"
                key={icon.name}
              >
                <div className="box">
                  <span
                    className={icon.name === "Trash" ? "item item-bin" : "item"}
                    key={icon.name}
                  >
                    <img src={icon.src} />
                  </span>
                </div>
              </StyledTooltip>
              {minimize && icon.name === "Trash" && renderIosCard()}
            </Fragment>
          ))}
        </div>
      )}
    </>
  );
};
