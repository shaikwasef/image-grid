export const reachedEnd = (status) => {
    return {
        type : "REACHED_END",
        payload : status
    }
}