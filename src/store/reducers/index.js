import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth/auth.reducer';
import commonReducer from './common/common.reducer';
import freelancerReducer from './freelancer/freelancer.reducer';
import manageDevelopersReducer from './manageDevelopers/manageDevelopers.reducer';
import chatReducer from './chat/chat.reducer';
import socketReducer from './socket/socket.reducer';
import jobPostReducer from './jobPost/jobPost.reducer';

const createReducer = asyncReducers =>
	combineReducers({
		form: formReducer,
		authReducer,
		commonReducer,
		freelancerReducer,
		manageDevelopersReducer,
		chatReducer,
		socketReducer,
		jobPostReducer,
		...asyncReducers
	});

export default createReducer;
