import Mission from '../redux/Missions/missionsSlice';
import Slice from '../redux/Rockets/rockets';

describe('test the reducers to return the initial state', () => {
  it('test the storeSlice reducer for the mission to return empty array as initialState', () => {
    expect(Mission(undefined, {})).toEqual([]);
  });

  it('test the storeSlice reducer for the rockets to return empty array as initialState', () => {
    expect(Slice(undefined, {})).toEqual([]);
  });
});
