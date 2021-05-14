export const totalPagesReducer = (state = false , action) => {
    switch(action.type){
        case "REACHED_END":
            return action.payload;
        default:
            return state;
    }
}