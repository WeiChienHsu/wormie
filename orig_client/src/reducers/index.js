import { combineReducers } from 'redux';
import userProfile from './createRequest';
import currentWormhole from './currentWormhole';
import camera from './camera';
import feed from './feed';
import pendingWormholeSubmission from './pendingWormholeSubmission';
import profile from './profile';
import discover from './discover';
const rootReducer = combineReducers({
	userProfile,
	currentWormhole,
	camera,
	pendingWormholeSubmission,
	feed,
  profile,
  discover,
});

export default rootReducer;
