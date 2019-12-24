const initState = {
    leadForm: {}
}

export default (state = initState, action) => {
    switch(action.type){
        case 'ADD_LEAD':
            state = {
                leadForm: action.leadForm
            }
        break;
        default:
            break;
    }

    return state;
}