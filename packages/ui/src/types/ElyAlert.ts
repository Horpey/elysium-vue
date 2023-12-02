export const ELY_ALERT_THEME = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  DESTRUCTIVE: 'destructive',
} as const

export type ElyAlertThemeKey = keyof typeof ELY_ALERT_THEME
