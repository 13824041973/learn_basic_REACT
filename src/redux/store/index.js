const { createStore } = require('redux')

const initialState = {
    name: 'why',
    counter: 100
}

// 要保持reducer是纯函数
function reducer(state = initialState, action) {
    switch(action.type) {
        case 
    }
    if (action.type === 'change_name') {
        return { ...state, name: action.name }
    }
    return state
}

const store = createStore(reducer)

module.exports = store