





export const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
  }

 
 


  export const timeoutScheduler = store => next => action => {

 
    if (!action.meta || !action.meta.delay) {
      return next(action)
    }
  
    const timeoutId = setTimeout(() => next(action), action.meta.delay)
  
    return function cancel() {
      clearTimeout(timeoutId)
    }
  }