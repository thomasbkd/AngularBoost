import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: DurationPipe;

  beforeEach(() => {
    pipe = new DurationPipe();
  })

  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return an empty string if startTime is empty', () => {
    expect(pipe.transform(null, null)).toBe("");
    expect(pipe.transform(null, new Date())).toBe("");
  })

  it('should format as "HH:mm:ss"', () => {
    const start = new Date();
    start.setHours(0, 0, 0);

    const end = new Date();
    end.setHours(1, 2, 3);

    expect(pipe.transform(start, end, "HH:mm:ss")).toBe("01:02:03");
  })
});
