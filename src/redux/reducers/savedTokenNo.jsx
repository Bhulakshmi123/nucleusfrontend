const savedTokenNo = (state = 'null', action) => {
    switch (action.type) {
        case 'SAVETOKENNOACTION':
            return state = action.payload;
        default:
            return state;
    }
}
export default savedTokenNo;