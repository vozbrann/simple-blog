import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import {createWrapper, HYDRATE} from "next-redux-wrapper";

export type AppState = ReturnType<typeof rootReducer>

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        if (state.count) nextState.count = state.count // preserve count value on client side navigation
        return nextState
    } else {
        return rootReducer(state, action)
    }
}

const initStore = () => {
    return createStore(reducer, applyMiddleware(thunk))
}

export const wrapper = createWrapper(initStore)
