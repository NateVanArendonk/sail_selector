// data.js
type HeatmapData = { windSpeed: string; wingSize: string; value: number }[];

export const generateData = (userWeight: number): HeatmapData => {
  const windSpeedStart = 12;
  const windSpeedEnd = 35;
  const windSpeedIncrement = 1;

  const wingSizeStart = 2;
  const wingSizeEnd = 7;
  const wingSizeIncrement = 0.5;

  const constant1 = 17; // mph
  const constant2 = 5; // m

  const userWeightKg = userWeight * 0.453592

  const data: HeatmapData = [];

  for (let windSpeed = windSpeedStart; windSpeed <= windSpeedEnd; windSpeed += windSpeedIncrement) {
    for (let wingSize = wingSizeStart; wingSize <= wingSizeEnd; wingSize += wingSizeIncrement) {
      const value = (windSpeed ** 2 / (constant1 ** 2) * wingSize / constant2 * (81 / userWeightKg));
      data.push({
        wingSize,
        windSpeed,
        value,
      });
    }
  }

  return data;
};
