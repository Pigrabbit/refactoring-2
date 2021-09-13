import NumberRange from "./numberRange";

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

function readingOutsideRange(station, range) {
  return station.readings.filter(
    (r) => r.temp < range.min || r.temp > range.max
  );
}

export default function showAlert() {
  const operatingPlan = {
    temperatureFloor: 50,
    temperatureCeiling: 55,
  };
  const range = new NumberRange(
    operatingPlan.temperatureFloor,
    operatingPlan.temperatureCeiling
  );

  return readingOutsideRange(station, range);
}
