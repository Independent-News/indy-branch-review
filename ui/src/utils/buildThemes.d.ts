import { ThemeType, Color } from '../types/styled.d';
/**
 * Generic type for handling nested partials. Theme overrides can occur at any
 * level and `Partial` alone is not capable of handling this.
 */
type NestedPartial<K> = {
    [attr in keyof K]?: K[attr] extends object ? NestedPartial<K[attr]> : K[attr];
};
/**
 * Light theme color overrides for a theme
 */
type LightThemeColorType = NestedPartial<Color>;
/**
 * Dark theme color overrides for a theme
 */
type DarkThemeColorType = NestedPartial<Color>;
/**
 * A base theme configuration that will become the basis for all other themes
 */
export type ArchetypeThemeConfigType = Omit<ThemeType, 'name' | 'color'> & {
    color: [Color, DarkThemeColorType];
};
/**
 * A theme configuration override
 */
type ThemeConfigType = NestedPartial<ThemeType> & {
    color: [LightThemeColorType, DarkThemeColorType];
};
/**
 * A map of theme configuration overrides from which to build complete themes
 */
export type ThemesConfigType = {
    [key: string]: ThemeConfigType;
};
/**
 * Takes a map of theme names and their overrides and outputs a similar map with
 * complete themes.
 * @param archetype The theme from which all other themes are generated
 * @param themes A map of theme names and their overrides
 * @param baseThemeName
 * @returns A map of theme names and their complete configurations
 */
declare function buildThemes(archetype: ArchetypeThemeConfigType, themes: ThemesConfigType): Record<string, ThemeType>;
export default buildThemes;
//# sourceMappingURL=buildThemes.d.ts.map