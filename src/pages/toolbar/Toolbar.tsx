// Toolbar.tsx
import { FC } from "react";
import "./toolbar.scss";
import { StyledDivider, StyledTooltip } from "./Toolbar.styled";
import { IosCard } from "shared";
import { useMediaQuery } from "@mui/material";

const icons = [
  { name: "Finder", src: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png" },
  { name: "Siri", src: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ff3bafbac60495771_siri.png" },
  { name: "Contacts", src: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853743597518c528b9b3_contacts.png" },
  { name: "Messages", src: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853a55558a68e192ee08_messages.png" },
  { name: "Notes", src: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c849ec3735b52cef9_notes.png" },
  { name: "Music", src: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ba0782d6ff2aca6b3_music.png" },
  { name: "Trash", src: "https://findicons.com/files/icons/569/longhorn_objects/128/trash.png" },
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
          title='miguelhem@Macbook-Pro'
          body='Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure'
          footer=''
          isIcon
        />
      </div>
    );
  };
  return (
    <>
      {!matches && (
        <div className='container'>
          {icons.map((icon) => (
            <>
              {icon.name === "Trash" && <StyledDivider />}
              <StyledTooltip arrow title={icon.name} placement='top'>
                <div className='box'>
                  <span className={icon.name === "Trash" ? "item item-bin" : "item"} key={icon.name}>
                    <img src={icon.src} />
                  </span>
                </div>
              </StyledTooltip>
              {minimize && icon.name === "Trash" && renderIosCard()}
            </>
          ))}
        </div>
      )}
    </>
  );
};
