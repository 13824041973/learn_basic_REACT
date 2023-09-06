const store = require('./store')

const subscribe = store.subscribe(() => {
    console.log('变化了', store.getState());
})



store.dispatch()

subscribe()