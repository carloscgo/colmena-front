import { createGlobalStyle, css } from 'styled-components'

const styles = css`
body {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  margin: 0 auto;
}

body {
  /*max-width: 680px;*/
  margin: auto;
}

li,
p {
  line-height: 1.5rem;
}

a {
  font-weight: 500;
}

hr {
  border: 1px solid #ddd;
}

iframe {
  background: #ccc;
  border: 1px solid #ccc;
  height: 10rem;
  width: 100%;
  border-radius: 0.5rem;
  filter: invert(1);
}

.cursor-pointer {
  cursor: pointer;
}
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;

