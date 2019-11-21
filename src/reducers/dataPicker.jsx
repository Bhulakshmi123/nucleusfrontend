import { allProjects, newProjects, activeProjects, pendingProjects, rejectedProjects } from '../views/Business/demoData'
const dataPicker = (state = allProjects, action) => {
    switch (action.type) {
        case 'DATAOBJECT':
            if (action.payload = 'activeProjects') {
                return state = activeProjects;
            }
        default:
            return state;
    }
}
export default dataPicker;