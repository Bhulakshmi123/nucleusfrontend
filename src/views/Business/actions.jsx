import { GET_LEADS, GET_EQUIPMENT_SUPPLIER_LIST, GET_LEAD_INFORMATION, GET_LEAD_EQUIPMENT_DETAILS, CHANGE_LEAD_STATUS, CHANGE_SERVICE_STATUS, MAKE_A_REQUEST_BID, MOVE_TO_PROJECTS, PROJECT_LIST_NUCLEUS } from './actionTypes';
import service from '../../service';

export const getSupplierList = async (payload, token) => {
    return (await service.fetchPost(GET_EQUIPMENT_SUPPLIER_LIST.url, payload, token));
};
export const getLeads = async (leadType, token) => {
    return (await service.fetchGet(GET_LEADS.url + leadType, token))
}
export const getLeadInformation = async (payload, token) => {
    return (await service.fetchGet(GET_LEAD_INFORMATION.url + payload, token));
};
export const getLeadEquipmentDetails = async (payload, token) => {
    return (await service.fetchGet(GET_LEAD_EQUIPMENT_DETAILS.url + payload, token));
}
export const changeLeadStatus = async (payload, token) => {
    return (await service.fetchPost(CHANGE_LEAD_STATUS.url, payload, token));
}
export const changeServiceStatus = async (payload, token) => {
    return (await service.fetchPost(CHANGE_SERVICE_STATUS.url, payload, token));
}
export const makeRequestBid = async (urlPayload, payload, token) => {
    return (await service.fetchPost(MAKE_A_REQUEST_BID.url + urlPayload, payload, token));
}
export const moveToProjects = async (payload, token) => {
    return (await service.fetchPost(MOVE_TO_PROJECTS.url, payload, token));
}
export const getProjectsOfNucleus = async (token) => {
    return (await service.fetchGet(PROJECT_LIST_NUCLEUS.url, token));
}