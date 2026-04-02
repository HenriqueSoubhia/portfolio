export function getThemeByTime(hour: number): string {
  if (hour >= 0 && hour <= 5) {
    return "#0f172a";
  }
  if (hour >= 6 && hour <= 7) {
    return "#312e81";
  }
  if (hour >= 8 && hour <= 11) {
    return "#9a3412";
  }
  if (hour >= 12 && hour <= 16) {
    return "#7f1d1d";
  }
  if (hour >= 17 && hour <= 18) {
    return "#581c87";
  }

  return "#1e1b4b";
}
