import getMissions from '../redux/Missions/missionsSlice';
import storeSlice from '../redux/Rockets/rockets';

describe('not', () => {
  it('test the storeSlice reducer for the mission to return empty array as initialState', () => {
    expect(getMissions(undefined,{})).toEqual([]);
  });

  it('test the storeSlice reducer for the rockets to return empty array as initialState', () => {
    expect(storeSlice(undefined, {})).toEqual([]);
  });
});
