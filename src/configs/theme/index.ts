import darkTheme from './dark-theme'
import lightTheme from './light-theme'

const appTheme = (darkMode: boolean) => (darkMode ? darkTheme : lightTheme)

export default appTheme

export const appColors = {
    neural_light: 'neural_light',
    neural_dark: 'neural_dark',
    primary: 'primary',
    secondary: 'secondary',
    sunset: 'sunset',
    danger: 'danger',
    warning: 'warning',
    info: 'info',
    success: 'success',
    velvet: 'velvet',
    accent: 'accent',
    green: 'green',
}

export type AppColors = keyof typeof appColors

export const ordinal = {
    0: 0,
    50: 50,
    100: 100,
    200: 200,
    300: 300,
    400: 400,
    500: 500,
    600: 600,
    700: 700,
    800: 800,
    900: 900,
    1000: 1000,
}

export type OrdinalKeys = keyof typeof ordinal

export const appButtons = {
    general: 'general',
    xSmall: 'xSmall',
    xSmallWithIcon: 'xSmallWithIcon',
    small: 'small',
    smallWithIcon: 'smallWithIcon',
    medium: 'medium',
    mediumWithIcon: 'mediumWithIcon',
    large: 'large',
    largeWithIcon: 'largeWithIcon',
    xLarge: 'xLarge',
    xLargeWithIcon: 'xLargeWithIcon',
}

export type AppButtons = keyof typeof appButtons

export const appInputs = {
    general: 'general',
    medium: 'medium',
    large: 'large',
}

export type AppInputs = keyof typeof appInputs

export const appSpacing = {
    spacingNone: 'spacingNone',
    spacingXxs: 'spacingXxs',
    spacingXs: 'spacingXs',
    spacingS: 'spacingS',
    spacingM: 'spacingM',
    spacingL: 'spacingL',
    spacingXl: 'spacingXl',
    spacingXxl: 'spacingXxl',
    spacingXxxl: 'spacingXxxl',
}

export type AppSpacing = keyof typeof appSpacing

export const appRadius = {
    radiusNone: 'radiusNone',
    radiusXxs: 'radiusXxs',
    radiusXs: 'radiusXs',
    radiusS: 'radiusS',
    radiusM: 'radiusM',
    radiusL: 'radiusL',
    radiusXl: 'radiusXl',
}

export type AppRadius = keyof typeof appRadius