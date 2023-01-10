import { RepeatDataPipe } from './repeat-data.pipe';

describe('RepeatDataPipe', () => {
  it('create an instance', () => {
    const pipe = new RepeatDataPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return mm mm ', () => {
    const pipe = new RepeatDataPipe();
    const data = pipe.transform("mm", 2)
    expect(data).toEqual('mm mm ');
  });

});
