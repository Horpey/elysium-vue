export const ELY_BUTTON_THEME = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  DESTRUCTIVE: 'destructive',
} as const

export type ElyButtonThemeKey = keyof typeof ELY_BUTTON_THEME

export const ELY_BUTTON_SIZE = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
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
