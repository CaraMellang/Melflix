export const mediaQuery = (maxWidth) => `@media(max-width: ${maxWidth}px)`;

const media = {
  xlarge: mediaQuery(1440),// Laptop L
  large: mediaQuery(1024),// laptop
  medium: mediaQuery(768),// Tablet
  small: mediaQuery(425),// Mobile L
  xsmall: mediaQuery(375),// Mobile M
  xxsmall: mediaQuery(320),// Mobile S
  custom: mediaQuery,
};

export default media;
