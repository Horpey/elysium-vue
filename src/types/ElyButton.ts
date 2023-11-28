export const ELY_BUTTON_THEME = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  DESTRUCTIVE: 'destructive',
} as const

export type ElyButtonThemeKey = keyof typeof ELY_BUTTON_THEME

export const ELY_BUTTON_CONTEXT = {
  LIGHT: 'light',
  DARK: 'dark',
} as const

export type ElyButtonContextKey = keyof typeof ELY_BUTTON_CONTEXT

export const ELY_BUTTON_SIZE = {
  LARGE: 'ely-control-size-large',
  MEDIUM: 'ely-control-size-default',
  SMALL: 'ely-control-size-small',
} as const

export type ElyButtonSizeKey = keyof typeof ELY_BUTTON_SIZE

export const ELY_BUTTON_TYPE = {
  BUTTON: 'button',
  SUBMIT: 'submit',
} as const

export type ElyButtonTypeKey = keyof typeof ELY_BUTTON_TYPE

export const ELY_BUTTON_TARGET = {
  BLANK: '_blank',
  PARENT: '_parent',
  SELF: '_self',
  TOP: '_top',
} as const

export type ElyButtonTargetKey = keyof typeof ELY_BUTTON_TARGET
