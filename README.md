Lesson 1
l
Redux is a predictable state container for JavaScript apps, and is a library for JavaScript application.

1. It is for JavaScript apps
Redux is not tied to React, can be used with React, Angular, Vue, or vanilla JavaScript.

2. It is a state container. 
Redux stores the state of your application. Consider a React app - state of a component. State of an app is the state represented by all the individual components of that app.

state = {
    isUserLoggedIn: true,
    username: 'Vishwas',
    profileUrl: '',
    onlineUser: [],
    isModalOpened: false
}

3. It is predictable.
* Redux is a state container. 
* The state of an application can change. 
* Ex: todo list app - item(pending) -> item(completed). 
* in Redux, all state transitions are explict and it is possible to keep track of them. 
* So the change to your application's state become predictable.

Why would we want to use redux in a react application?
redux manages state independently from components in react. Components in React have their own state.

Why do we need another tool to help manage that state since React context can prevent prop drilling and useContext + useReducer can manage state?

However, Redux 1.0 has launched on August 2015 before useContext and useReducer.

React-redux is a library that provides bindings to use React and Redux together in an application.

----------------------------------------------------------------------------------------------------
Lesson 3

* A store holds the state of your application.
* An action descripts the changes in the state of the application
* A reducer which actually carries out the state transition depending on the action.

-------------------------------------------------------------------------------

Lesson 4

Three Principles:

1. maintain our application state in a single object which would be managed by the Redux store.

2. to update the state of your app, you need to let Redux know about that with an action. Not allowed to directly update the state object.

3. to specify how the state tree is transformed by actions, your write pure reducers.

Reducer - (previousState, action) => newState
----------------------------------------------------------------------------

Lesson 5

Actions

* the only way your application can interact with the store
* carry some informations from you app to the redux store
* plain Javascript objects

-----------------------------------------------------------------------------

Lesson 6

Reducers

* Specify how the app's state changes in response to actions send to the store
* Function that accepts state and action as arguments, and returns the next state of the application

(previousState, action) => newState

------------------------------------------------------------------------------

Lesson 7

Redux Store

* one store for the entire application

1. holds application state
2. allows access to state via getState()
3. allows state to be updated via dispatch(action)
4. register listeners via subscribe(listener)
5. handles unregistering of listeners via the function returned by subscribe(listener)

-----------------------------------------------------------------------------
Lesson 9 and 10

They belong to react2/redux-demo folder
-----------------------------------------------------------------------------

Lesson 11

Middleware

* Is the suggested way to extend Redux with custom functionality
* provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
* use middleware for logging, crash reporting, performing asynchronous tasks etc

npm install redux-logger

all above are supposed to from react2/redux-demo folder

---------------------------------------------------------------------------

Lesson 14, It starts from here

npx create-react-app react-redux-gopinav
npm install redux react-redux

----------------------------------------------------------------------------
