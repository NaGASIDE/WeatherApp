import { cityActionTypes } from './action';
import { cities } from './state'

export const cityReducer = (state = cities, action) => {
  let newCities;
  switch (action.type) {
    case cityActionTypes.ADD_CITY:
      newCities = [...state]
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${action.payload.city}&appid=cf0328590b7fd3dec8b9bb899f788ffc`)
      .then((e) => e.json().then((r) => {
        if (r.cod == 200) {newCities.push(r)}
        else {console.log(`api_error`)}
      }));
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${action.payload.city}&appid=cf0328590b7fd3dec8b9bb899f788ffc`)
      .then((e) => e.json().then((r) => {
        if (r.cod == 200) {newCities.push(r)}
          else {console.log(`api_error`)}
      }));
      return newCities
    case cityActionTypes.DELETE_CITY:
      newCities = [...state];
      newCities = newCities.filter(city => city.key != action.payload)
      return newCities;
  }
  return state 
}