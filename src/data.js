
type HeatmapData = { windSpeed: string; wingSize: string; value: number }[];
let data: HeatmapData = [];

const windSpeedStart = 10;
const windSpeedEnd = 20;
const windSpeedIncrement = 1;

const wingSizeStart = 2;
const wingSizeEnd = 7;
const wingSizeIncrement = 0.5;

const constant1 = 17; //mph
const constant2 = 5; //m

for (let windSpeed = windSpeedStart; windSpeed <= windSpeedEnd; windSpeed += windSpeedIncrement) {
  for (let wingSize = wingSizeStart; wingSize <= wingSizeEnd; wingSize += wingSizeIncrement) {
    const value = (Math.pow(windSpeed, 2) / (Math.pow(constant1, 2) * wingSize)) / constant2;
    
    data.push({
      windSpeed,
      wingSize,
      value,
    });
  }
}
console.log(data)
export { data };
