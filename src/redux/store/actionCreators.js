const changeNmaeAction = (name) => ({
    type: 'change_name', name: name
})

const changeCounterAction = (counter) => ({
    type: 'change_counter', counter: counter
})

module.exports = {
    changeNmaeAction,
    changeCounterAction
}