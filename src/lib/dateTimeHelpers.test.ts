import {getReadableDuration, getWeekDay, WeekDayEnum} from './dateTimeHelpers';

describe('dateTimeHelpers', () => {
  describe('#getWeekDay()', () => {
    test.each`
      date                                    | expected
      ${new Date('2022-01-09T13:27:34.610Z')} | ${WeekDayEnum.Sunday}
      ${new Date('2022-01-10T13:27:34.610Z')} | ${WeekDayEnum.Monday}
      ${new Date('2022-01-11T13:27:34.610Z')} | ${WeekDayEnum.Tuesday}
      ${new Date('2022-01-12T13:27:34.610Z')} | ${WeekDayEnum.Wednesday}
      ${new Date('2022-01-13T13:27:34.610Z')} | ${WeekDayEnum.Thursday}
      ${new Date('2022-01-14T13:27:34.610Z')} | ${WeekDayEnum.Friday}
      ${new Date('2022-01-15T13:27:34.610Z')} | ${WeekDayEnum.Saturday}
    `('should return expected for the given date', ({date, expected}) => {
      expect(getWeekDay(date)).toBe(expected);
    });
  });
  describe('#getReadableDuration()', () => {
    it('should return readable duration', () => {
      expect(getReadableDuration('03:20:00')).toBe('3hrs. 20min');
      expect(getReadableDuration('02:10:00')).toBe('2hrs. 10min');
      expect(getReadableDuration('00:55:00')).toBe('55min');
      expect(getReadableDuration('16:18')).toBe('16min');
    });
  });
});
