import { cityActionTypes } from './action';
import { cities } from './state'

export const cityReducer = (state = cities, action) => {
  let newCities;
  switch (action.type) {
    case cityActionTypes.ADD_CITY:
      newCities = [...state]
      newCities.push(action.payload)
      return newCities
  }
  return state 
}