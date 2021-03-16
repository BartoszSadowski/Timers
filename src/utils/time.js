const timeMultipliers = {
  second: 1_000, // 1000ms,
  minute: 60_000, // 60s * 1000ms
  hour: 3_600_000, // 60min * 60s * 1000ms
  day: 86_400_000, // 24h * 60min * 60s * 1000ms
};

// eslint-disable-next-line import/prefer-default-export
export function msToTimeObj(ms) {
  let time = ms;

  const days = Math.floor(time / timeMultipliers.day);
  time -= days * timeMultipliers.day;

  const hours = Math.floor(time / timeMultipliers.hour);
  time -= hours * timeMultipliers.hour;

  const minutes = Math.floor(time / timeMultipliers.minute);
  time -= minutes * timeMultipliers.minute;

  const seconds = Math.floor(time / timeMultipliers.second);
  time -= seconds * timeMultipliers.second;

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
