import { cityActionTypes } from './action';
import { cities } from './state'

export const cityReducer = (state = cities, action) => {
  let newCities;
  switch (action.type) {
    case cityActionTypes.ADD_CITY:
      newCities = [...state]
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${action.payload.city}&appid=cf0328590b7fd3dec8b9bb899f788ffc`).then((e) => e.json().then((r) => {newCities.push(r)}));
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${action.payload.city}&appid=cf0328590b7fd3dec8b9bb899f788ffc`).then((e) => e.json().then((r) => {newCities.push(r)}));
      return newCities
  }
  return state 
}