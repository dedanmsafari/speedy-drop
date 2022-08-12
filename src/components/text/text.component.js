import styled from "styled-components/native";

const defaultStyles = (theme) => `
font-family: ${theme.fonts.body}
font-weight:${theme.fontWeights.regular}
color: ${theme.colors.text.primary}
flex-wrap:wrap
margin-top:0px;
margin-bottom:0px;
`;

const body = (theme) => `
 font-size: ${theme.fontSizes.body}
 `;

const hint = (theme) => `
 font-size: ${theme.fontSizes.caption}
 font-family:${theme.fonts.light}
 font-weight:${theme.fontWeights.light}

 `;

const success = (theme) => `
 font-family:${theme.fonts.specialBold}
 font-size: ${theme.fontSizes.title}
 font-weight:${theme.fontWeights.bold}
 color: ${theme.colors.ui.success}
 `;

const title = (theme) => `
font-family:${theme.fonts.heading}
 font-size: ${theme.fontSizes.button}
   font-weight:${theme.fontWeights.semiBold}
  
 `;

const caption = (theme) => `
font-family:${theme.fonts.heading}
 font-size: ${theme.fontSizes.caption}
   font-weight:${theme.fontWeights.semiBold}
   color: ${theme.colors.text.secondary}
 `;

const label = (theme) => `
font-family:${theme.fonts.heading}
 font-size: ${theme.fontSizes.h5}
 font-weight:${theme.fontWeights.semiBold}
 `;

const variants = {
  body,
  hint,
  title,
  caption,
  success,
  label,
};

export const Text = styled.Text`
  ${({ theme }) => defaultStyles(theme)}
  ${({ theme, variant }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
