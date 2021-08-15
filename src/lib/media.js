export const mediaQuery = (maxWidth) => `@media(max-width: ${maxWidth}px)`;

const media = {
  xxlarge: mediaQuery(1440),
  xlarge: mediaQuery(1024),
  large: mediaQuery(1200),
  medium: mediaQuery(768),
  small: mediaQuery(375),
  xsmall: mediaQuery(320),
  custom: mediaQuery,
};

export default media;
