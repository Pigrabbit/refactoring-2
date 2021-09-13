export const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2021-09-13 20:10" },
    { temp: 53, time: "2021-09-13 20:20" },
    { temp: 58, time: "2021-09-13 20:30" },
    { temp: 53, time: "2021-09-13 20:40" },
    { temp: 51, time: "2021-09-13 20:50" },
  ],
};

function readingOutsideRange(station, min, max) {
  return station.readings.filter((r) => r.temp < min || r.temp > max);
}

export default function showAlert() {
  const operatingPlan = {
    temperatureFloor: 50,
    temperatureCeiling: 55,
  };

  return readingOutsideRange(
    station,
    operatingPlan.temperatureFloor,
    operatingPlan.temperatureCeiling
  );
}
