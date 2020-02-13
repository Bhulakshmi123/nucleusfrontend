const sidebarView = (state = false, action) => {
    switch (action.type) {
        case 'SIDEBARVIEWACTION':
            return state = action.payload;
        default:
            return state;
    }
}
export default sidebarView;