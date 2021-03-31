import { combineReducers } from 'redux';
import postsReducer from './postsReducer'
import userReducer from './userReducer'


// export default combineReducers ({
    //     replaceMe: ()=>'hi there'
    // })

export default combineReducers ({
    posts: postsReducer,
    users: userReducer
})
