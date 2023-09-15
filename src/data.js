export const generateData = (userWeight, heatmapLibrary) => {
  const windSpeedStart = 12;
  const windSpeedEnd = 40;
  const windSpeedIncrement = 1;

  const wingSizeStart = 2;
  const wingSizeEnd = 7;
  const wingSizeIncrement = 0.5;

  const constant1 = 17; // mph
  const constant2 = 5; // m

  const userWeightKg = userWeight * 0.453592

  const heatmapPlottingLibrary = heatmapLibrary;
  let data;

  if (heatmapPlottingLibrary === 'd3') {
    const data = [];
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
    return data
  } else if (heatmapPlottingLibrary === 'plotly') {
    const data = {
      windSpeed: Array.from(
        { length: (windSpeedEnd - windSpeedStart) / windSpeedIncrement + 1 },
        (_, i) => windSpeedStart + windSpeedIncrement * i
      ),
      wingSize: Array.from(
        { length: (wingSizeEnd - wingSizeStart) / wingSizeIncrement + 1 },
        (_, i) => wingSizeStart + wingSizeIncrement * i
      ),
    };

    const zdata = [];
    for (let windSpeed = windSpeedStart; windSpeed <= windSpeedEnd; windSpeed += windSpeedIncrement) {
      const sublist = [];
      for (let wingSize = wingSizeStart; wingSize <= wingSizeEnd; wingSize += wingSizeIncrement) {
        const value = (windSpeed ** 2 / (constant1 ** 2) * wingSize / constant2 * (81 / userWeightKg));
        sublist.push(value);
      }
      zdata.push(sublist);
    }

    data['values'] = zdata
    return data
  } else if (heatmapPlottingLibrary === 'apex') {
    const data = {
      windSpeed: Array.from(
        { length: (windSpeedEnd - windSpeedStart) / windSpeedIncrement + 1 },
        (_, i) => windSpeedStart + windSpeedIncrement * i
      ),
      wingSize: Array.from(
        { length: (wingSizeEnd - wingSizeStart) / wingSizeIncrement + 1 },
        (_, i) => wingSizeStart + wingSizeIncrement * i
      ),
    };

    const zdata = [];
    for (let windSpeed = windSpeedStart; windSpeed <= windSpeedEnd; windSpeed += windSpeedIncrement) {
      const sublist = [];
      for (let wingSize = wingSizeStart; wingSize <= wingSizeEnd; wingSize += wingSizeIncrement) {
        const value = (windSpeed ** 2 / (constant1 ** 2) * wingSize / constant2 * (81 / userWeightKg));
        sublist.push(value);
      }
      zdata.push(sublist);
    }
    data['values'] = zdata
    return data
  }
};
