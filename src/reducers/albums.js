
export default (state = initialState, action = {}) => {
    // console.log(state, 'state', action, 'action')

    switch (action.type) {
        case 'ADD_ALBUM':
            return [...state, action.payload]
        case 'SET_ALBUMS':
            return action.payload

        default:
            return state
    }
}

const initialState = [{ id: 1, userId: 2, title: "Test" }]
