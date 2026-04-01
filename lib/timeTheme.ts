// Cores vibrantes mas com bom contraste para se adequar ao texto 100% branco

export function getThemeByTime(hour: number): string {
  if (hour >= 0 && hour <= 5) {
    // Madrugada
    return '#0f172a'; // Slate 900
  }
  if (hour >= 6 && hour <= 7) {
    // Amanhecer
    return '#4338ca'; // Indigo 700
  }
  if (hour >= 8 && hour <= 11) {
    // Manhã
    return '#ea580c'; // Orange 600 (Laranja escuro/quente no lugar do amarelo)
  }
  if (hour >= 12 && hour <= 16) {
    // Tarde
    return '#be123c'; // Rose 700
  }
  if (hour >= 17 && hour <= 18) {
    // Pôr do sol
    return '#6b21a8'; // Purple 800
  }
  
  // Noite (19h - 23h)
  return '#1e1b4b'; // Indigo 950
}
