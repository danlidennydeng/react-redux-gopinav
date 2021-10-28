React Redux
------------

Redux is a predictable state container for JavaScript apps, and is a library for JavaScript application.

1. It is for JavaScript apps
Redux is not tied to React, can be used with React, Angular, Vue, or vanilla JavaScript.

2. It is a state container. 
Redux stores the state of your application. Consider a React app - state of a component. State of an app is the state represented by all the individual components of that app.

3. It is predictable.
Redux is a state container. The state of an application can change. Ex: todo list app - item(pending) -> item(completed). in Redux, all state transitions are explict and it is possible to keep track of them. So the change to your application's state become predictable.

Why would we want to use redux in a react application?
Components in React have their own state.

Why do we need another tool to help manage that state since React context can prevent prop drilling and useContext + useReducer can manage state?

However, Redux 1.0 has launched on August 2015 before useContext and useReducer.

React-redux is a library that provides bindings to use React and Redux together in an application.

----------------------------------------------------------------------------------------------------

Lesson 19, React Redux + Hooks

* Action creators, reducers, provide the store and connect the components.
* Components can access state and dispatch actions
* React Hooks works since React Redux v7.1
* subscribe to store and dispatch actions without connect()

* hooks look like much simpler, however, it comes with a warning.

------------------------------------------------------------------------------------------------------


