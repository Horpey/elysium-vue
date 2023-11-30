export const ELY_LOADER_THEME = {
  LIGHT: 'light',
  DARK: 'dark',
} as const

export type ElyLoaderThemeKey = keyof typeof ELY_LOADER_THEME

export const ELY_LOADER_SIZE = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const

export type ElyLoaderSizeKey = keyof typeof ELY_LOADER_SIZE
