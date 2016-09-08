export const nextAction = (state) => {
    console.log("recieve action creators")
    return {
        type: 'NEXT'
        //payload: find position in array and move to the next audio and play that
    }
}

export const setState = (state) => {
    return {
        type: 'setstate',
        state: state
    }
}
