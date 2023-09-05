
type HeatmapData = { windSpeed: string; wingSize: string; value: number }[];
let data: HeatmapData = [];

const windSpeedStart = 12;
const windSpeedEnd = 35;
const windSpeedIncrement = 1;

const wingSizeStart = 2;
const wingSizeEnd = 7;
const wingSizeIncrement = 0.5;

const constant1 = 17; //mph
const constant2 = 5; //m
const userWeightKg = 108; //kg

for (let windSpeed = windSpeedStart; windSpeed <= windSpeedEnd; windSpeed += windSpeedIncrement) {
  for (let wingSize = wingSizeStart; wingSize <= wingSizeEnd; wingSize += wingSizeIncrement) {
    const value = (windSpeed ** 2 / (constant1 ** 2) * wingSize / constant2 * (81 / userWeightKg))
    // ideal_range[speed].append(speed**2 / 17**2 * size / 5 * (81 / user_weight_kg)) FROM PYTHON CODE
    // ideal range = 0.9 - 1.5
    // manageable = 0.8 - 0.9 & 1.5 - 2
    data.push({
      wingSize,
      windSpeed,
      value,
    });
  }
}
console.log(data)
export { data };
