export const ELY_INPUT_SIZE = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const

export type ElyInputSizeKey = keyof typeof ELY_INPUT_SIZE
