export const imageStatusReducer = (state="" , action) => {
    switch(action.type){
        case "NOT_FOUND":
            return "notFound";
        case "FOUND":
            return "found"
        default:
            return state;
    }
}