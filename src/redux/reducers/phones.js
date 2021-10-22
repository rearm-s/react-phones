let initiateState = {
    phones: [],
    isLoaded: false
}

const phones = (state = initiateState, action) => {

    switch (action.type) {
        case 'SET_PHONES':
            return {
                ...state,
                phones: action.payload,
                isLoaded: true
            }
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload

            }
        default:
            return state;
    }
}

export default phones;