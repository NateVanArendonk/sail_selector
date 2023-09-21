export const generateData = (userWeight, userWindSpeed, userWingSize) => {
  const windSpeedStart = 12;
  const windSpeedEnd = 40;
  const windSpeedIncrement = 1;

  const wingSizeStart = 2;
  const wingSizeEnd = 7;
  const wingSizeIncrement = 0.5;

  const constant1 = 17; // mph
  const constant2 = 5; // m

  const userWeightKg = userWeight * 0.453592

  function calculateWingValueWeight(windSpeed, constant1, wingSize, constant2, userWeightKg) {
    const value = windSpeed ** 2 / constant1 ** 2 * wingSize / constant2 * (81 / userWeightKg);
    return value;
  }

  function calculateWingValueAdvanced(windSpeed, wingSize, userWindSpeed, userWingSize) {
    const value = windSpeed ** 2 / userWindSpeed ** 2 * wingSize / userWingSize
    return value;
  }

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
    const zdataAdvanced = [];
    for (let windSpeed = windSpeedStart; windSpeed <= windSpeedEnd; windSpeed += windSpeedIncrement) {
      const sublist = [];
      const sublistAdvanced = []
      for (let wingSize = wingSizeStart; wingSize <= wingSizeEnd; wingSize += wingSizeIncrement) {
        const value = calculateWingValueWeight(windSpeed, constant1, wingSize, constant2, userWeightKg) 
        const valueAdvanced = calculateWingValueAdvanced(windSpeed, wingSize, userWindSpeed, userWingSize)
        sublist.push(value);
        sublistAdvanced.push(valueAdvanced)
      }
      zdata.push(sublist);
      zdataAdvanced.push(sublistAdvanced)
    }
    data['values'] = zdata
    data['valuesAdvanced'] = zdataAdvanced
    return data

};
