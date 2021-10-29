// const redux = require('redux')
// const createStore = redux.createStore
// const applyMiddleware = redux.applyMiddleware
// const thunkMiddleware = require('redux-thunk').default
// const axios = require('axios')

import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

const initialState = {
  loading: false,
  users: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: ''
      } 
      
    case FETCH_USERS_FAILURE:
    return {
      ...state,
      loading: false,
      users: [],
      error: action.payload
    } 
    default: return state 
  }
}

export default reducer

// const fetchUsers = () => {
//   return function(dispatch) {
//     dispatch(fetchUsersRequest())
//     axios.get('https://jsonplacehlder.typicode.com/users')
//       .then(response => {
//         const users = response.data.map(user => user.id)
//         dispatch(fetchUsersSuccess(users))
//       }) 
//       .catch(error => {
//         dispatch(fetchUsersError(error.message))
//       })
//   }
// }

// const store = createStore(reducer, applyMiddleware(thunkMiddleware))
// store.subscribe(() => { console.log(store.getState())})
// store.dispatch(fetchUsers())