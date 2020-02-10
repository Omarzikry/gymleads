export const updateFavourite = (state,action,condition) => {
    return state.people.map((item, index) => {
      // Find the item with the matching id
      if(item.name === action.payload.name) {
        // Return a new object
        return {
          ...item,  // copy the existing item
          isFavourite: condition
        }
      }
  
      // Leave every other item unchanged
      return item;
    });
  }