import { ButtonSize, BorderRadius, ButtonTheme } from "@CustomButton/types";

  export const sizeClass: Record<ButtonSize, string> = {
    small: "btn-sm",
    medium: "btn-xs",
    large: "btn-lg",
  };

  export const themeClass: Record<ButtonTheme, string> = {
    default: "btn-secondary",
    primary: "btn-primary",
    secondary: "btn-secondary",
    success: "btn-success",
    danger: "btn-danger",
    warning: "btn-warning",
    info: "btn-info",
    light: "btn-light",
    dark: "btn-dark",
  };

  export const borderRadiusClass: Record<BorderRadius, string> = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
  };
