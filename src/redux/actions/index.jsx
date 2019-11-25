export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload: nr
    };
};
export const decrement = (nr) => {
    return {
        type: 'DECREMENT',
        payload: nr
    };
};
export const dataObject = (nr) => {
    return {
        type: 'DATAOBJECT',
        payload: nr
    };
}
export const sidebarViewAction = (nr) => {
    return {
        type: 'SIDEBARVIEWACTION',
        payload: nr
    };
}
export const addLead = leadForm => {
    return dispatch => {
        dispatch({
            type: "ADD_LEAD",
            leadForm: leadForm
        });
    }
}
