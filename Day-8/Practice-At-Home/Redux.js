import { createStore } from 'redux'

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: item,
})

export const removeItem = (index) => ({
  type: 'REMOVE_ITEM',
  payload: index,
})

const initialState = {
  items : []
}

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { items: [...state.items, action.payload] }
      case 'REMOVE_ITEM':
      const newItems = [...state.items];
      newItems.splice(action.payload,1);
      return {
        items: newItems,
      }
    default:
      return state
  }
}

const store = createStore(listReducer)

export default store;