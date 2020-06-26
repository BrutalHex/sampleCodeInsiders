



export function updateItemInArray<T,Key>(array: Array<T> , itemId:Key, updateItemCallback:any) {
    const updatedItems = array.map( (item:any) => {
      if (item.id !== itemId) {
         return item
      }
  
       const updatedItem = updateItemCallback(item)
      return updatedItem
    })
  
    return updatedItems
  }

  export function updateItemInArrayIndex<T>(array: Array<T> , index:number, updateItemCallback:any) {

   var arr=[...array];
   arr[index]= updateItemCallback( arr[index])  ;
  
    return arr;
  }

  export function updateObject<T>(oldObject:T, newValues:T) {
   
    return Object.assign({}, oldObject, newValues)
  }



  
  export function createReducer(initialState:any, handlers:any) {
    return function reducer(state = initialState, action:any) {
      if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action)
      } else {
        return state
      }
    }
  }