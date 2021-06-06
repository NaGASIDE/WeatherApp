export const cityActionTypes = {
  ADD_CITY: `CITY.ADD_CITY`,
  DELETE_CITY: `CITY.DELETE_CITY`
}

export const cityActions = {
  addCity: (city) => ({type: cityActionTypes.ADD_CITY, payload: city }),
  deleteTodo: (cityId) => ({type: cityActionTypes.DELETE_CITY, payload:cityId })
}