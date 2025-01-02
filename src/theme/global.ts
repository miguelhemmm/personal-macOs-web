import { ThemeProps } from "models";
import { createGlobalStyle, withTheme } from "styled-components";

type GlobalThemeProps = {
  theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
  :root {
	--primary-color: #007AFF;
	--white: #e5ded4;
	--transparent-background: rgba(83, 83, 83, 0.4);

    //dark-mode
	--red-dark: rgb(255, 69, 58);
	--yellow-dark: rgb(255, 214, 10);
	--green-dark: rgb(48, 209, 88);
    --dark-background: rgba(84, 67, 63, 1);
    --dark-text: #fff;
	--dark-card: #121212;
	--dark-nav: #15202B;

    //light-mode
	--red-light: rgb(255, 59, 48)
	--yellow-light: rgb(255, 204, 0);
	--green-dark: rgb(52, 199, 89);
    --light-background: rgba(84, 67, 63, 0.1);
    --light-text: rgb(24, 23, 23);
	--light-card: rgba(255, 255, 255, 0.7);
	--light-nav: #fff;


  }

	*, *::before, *::after {
	  box-sizing: border-box;
	}

  body  {
    -webkit-font-smoothing: antialiased;
     height: calc(100vh - 30px);
	 text-rendering: optimizeSpeed;
     background-color: ${({ theme }: GlobalThemeProps) => theme.background};
  }

  nav {
	background-color: ${({ theme }: GlobalThemeProps) => theme.background};
  }

  ul, ol {
  margin: 0;
  list-style: none;
	}

  body, h1, h2, h3, h4, h5, h6, p, figure, picture, span, button {
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  body, h1, h2, h3, h4, h5, h6, p, figure, picture {
	margin: 0;
    padding: 0;
  }

  @media (max-width: 600px) {
  body {
    font-size: 16px;
  }
}

  /* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input, button, textarea, select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

`;

export default withTheme(globalStyle);
