export const ELY_PROGRESS_THEME = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  DESTRUCTIVE: 'destructive',
} as const

export type ElyProgressThemeKey = keyof typeof ELY_PROGRESS_THEME
