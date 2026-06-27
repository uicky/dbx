import type { Theme } from "@tauri-apps/api/window";

export const APP_THEME_STORAGE_KEY = "dbx-theme";

export type AppThemeMode = "light" | "dark" | "amber-paper" | "system";
export type AppThemeAppearance = "light" | "dark" | "amber-paper";
export type AppThemeColorScheme = "light" | "dark";

export function normalizeAppThemeMode(value: string | null): AppThemeMode {
  if (value === "dark" || value === "light" || value === "amber-paper" || value === "system") return value;
  return "light";
}

export function resolveAppThemeAppearance(mode: AppThemeMode, systemPrefersDark: boolean): AppThemeAppearance {
  if (mode === "system") return systemPrefersDark ? "dark" : "light";
  if (mode === "amber-paper") return "light";
  return mode;
}

export function getTauriThemeForMode(mode: AppThemeMode): Theme | null {
  if (mode === "amber-paper") return "light";
  return mode === "system" ? null : mode;
}

export function resolveAppThemeColorScheme(appearance: AppThemeAppearance): AppThemeColorScheme {
  return appearance === "dark" ? "dark" : "light";
}
