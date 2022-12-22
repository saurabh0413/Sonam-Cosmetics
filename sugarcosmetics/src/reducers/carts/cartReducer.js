import * as types from "./actionTypes"
const initialData = {
  cart: [],
};

function cartReducer(oldState = initialData, action) {
  const { type, action } = action;
  switch(type){
    default:
        return oldState
  }
}

export default cartReducer
