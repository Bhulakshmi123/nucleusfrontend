import { allProjects, newProjects, activeProjects, pendingProjects, rejectedProjects } from '../../views/Business/demoData';
const dataPicker = (state = allProjects, action) => {
    switch (action.type) {
        case 'DATAOBJECT':
            switch (action.payload) {
                case 'new':
                    return state = newProjects;
                case 'active':
                    return state = activeProjects;
                case 'pending':
                    return state = pendingProjects;
                case 'rejected':
                    return state = rejectedProjects;
                default:
                    return state = allProjects;
            }
        default:
            return state;
    }
}
export default dataPicker;