export default (state = initialState, action = {}) => {
    // console.log(state, 'state', action, 'action')

    switch (action.type) {
        case 'SET_PHOTOS':
            return [...state, ...action.payload]

        default:
            return state
    }
}

const initialState = []
