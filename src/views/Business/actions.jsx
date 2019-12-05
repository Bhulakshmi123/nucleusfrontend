import { GET_EQUIPMENT_SUPPLIER_LIST, GET_LEADS_NEW, GET_LEADS_ACTIVE, GET_LEADS_PENDING, GET_LEADS_REJECTED, GET_LEAD_INFORMATION } from './actionTypes';
import service from '../../service';

export const getSupplierList = async (payload, token) => {
    return (await service.fetchPost(GET_EQUIPMENT_SUPPLIER_LIST.url, payload, token));
};
export const getNewLeads = async (token) => {
    return (await service.fetchGet(GET_LEADS_NEW.url, token));
};
export const getActiveLeads = async (token) => {
    return (await service.fetchGet(GET_LEADS_ACTIVE.url, token));
};
export const getPendingLeads = async (token) => {
    return (await service.fetchGet(GET_LEADS_PENDING.url, token));
};
export const getRejectedLeads = async (token) => {
    return (await service.fetchGet(GET_LEADS_REJECTED.url, token));
};
export const getLeadInformation = async (payload, token) => {
    return (await service.fetchGet(GET_LEAD_INFORMATION.url + payload, token));
};

