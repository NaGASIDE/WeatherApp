import { combineReducers } from 'redux'
import { cityReducer as city } from './City/reducer'

export let reducers = combineReducers({
  city
})