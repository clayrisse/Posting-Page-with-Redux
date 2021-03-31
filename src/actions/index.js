import _ from 'lodash'; //ues its a "_" dfrom the library lodash
import jsonPlaceholder from '../api/jsonPlaceholder'

//op3 for over fetching
export const fetchPostAndUser = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, 'userId'))
    userIds.forEach(id=> dispatch(fetchUser(id))) 
    //we dont use await cause we dont care about the time it takes
    //but if we had to would be handle like this
    // Promise.all(userIds.map(id=>dispatch(fetchUser(id))))
    // .then .....
    // console.log(`userId`, userIds)


    //whats bellow is complicated and true but no need to see it
    _.chain(getState().posts)
    //whats inside the () as an invisible 1st agrument is the arguments of the first ()chain -> getState().posts in this case
        .map('userId')
        .uniq()
        .forEach(id=>dispatch(fetchUser(id)))
        .value()
}

 
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')

    dispatch ({ type: 'FETCH_POST',  payload: response.data  })
}


export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({ type: 'FETCH_USER', payload: response.data })
}

//op1 for over fetching
// export const fetchUser = function(id) { 
//     return _.memoize(async function(dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`)

//     dispatch({ type: 'FETCH_USER', payload: response.data })
//     })
// }


//op2 for over fetching
// export const fetchUser = id => dispatch =>_fetchUser(id, dispatch)

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`)

//     dispatch({ type: 'FETCH_USER', payload: response.data })

// })