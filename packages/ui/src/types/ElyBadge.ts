export const ELY_BADGE_THEME = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  DESTRUCTIVE: 'destructive',
} as const

export const ELY_BADGE_SIZE = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const

export type ElyBadgeSizeKey = keyof typeof ELY_BADGE_SIZE
export type ElyBadgeThemeKey = keyof typeof ELY_BADGE_THEME
