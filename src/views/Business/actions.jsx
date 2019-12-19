import { GET_LEADS, GET_EQUIPMENT_SUPPLIER_LIST, GET_LEAD_INFORMATION, GET_LEAD_EQUIPMENT_DETAILS, CHANGE_LEAD_STATUS, CHANGE_SERVICE_STATUS, MAKE_A_REQUEST_BID } from './actionTypes';
import service from '../../service';

export const getSupplierList = async (payload, token) => {
    return (await service.fetchPost(GET_EQUIPMENT_SUPPLIER_LIST.url, payload, token));
};
export const getLeads = async (leadtype, token) => {
    return (await service.fetchGet(GET_LEADS.url + leadtype, token))
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
export const makeRequestBid = async (urlpayload, payload, token) => {
    return (await service.fetchPost(MAKE_A_REQUEST_BID.url + urlpayload, payload, token));
}