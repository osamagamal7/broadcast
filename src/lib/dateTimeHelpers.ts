export enum WeekDayEnum {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

export const getWeekDay = (date: Date): WeekDayEnum => {
  //it'll return the num of the day
  const day = date.getDay();

  const lookups = {
    [WeekDayEnum.Monday]: 1,
    [WeekDayEnum.Tuesday]: 2,
    [WeekDayEnum.Wednesday]: 3,
    [WeekDayEnum.Thursday]: 4,
    [WeekDayEnum.Friday]: 5,
    [WeekDayEnum.Saturday]: 6,
    [WeekDayEnum.Sunday]: 0,
  };

  for (const key in lookups) {
    //   if the the value of the day equals the passed in day (eg: 1 === 1 )
    if (lookups[key as keyof typeof lookups] === day) {
      return key as keyof typeof lookups;
    }
  }

  throw new Error('Invalid date');
};

export const getReadableDuration = (duration: string): string => {
  const durationSplit = duration.split(':');

  if (durationSplit.length === 1) {
    const [m] = durationSplit;
    return `${Number(m)}min`;
  }
  if (durationSplit.length === 2) {
    const [m] = durationSplit;
    return `${Number(m)}min`;
  }

  const [h, m] = durationSplit;

  if (h === '00') {
    return `${Number(m)}min`;
  }

  return `${Number(h)}hrs. ${m}min`;
};
