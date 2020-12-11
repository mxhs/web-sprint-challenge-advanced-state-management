const initialState = {
    isLoading: false,
    smurfsData: [{
        name: "Maxwell",
        age: 15,
        height: "8cm",
        id: 1
    }],
    error: ""
}

export const smurfsReducer = (state = initialState, action) => {
    switch (action.type) { 
        case("FETCH_SMURFS_START"):
            return ({
                ...state,
                isLoading: true,
                error: ""
            })
        case("FETCH_SMURFS_SUCCESS"):
            return {
                ...state,
                isLoading: false,
                smurfsData: action.payload
            }
        default:
            return state
    }
}
