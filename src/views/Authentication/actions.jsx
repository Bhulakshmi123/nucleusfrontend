import { GET_CLIENT_INFO} from './actionTypes';
import service from '../../service';

export const getClientInfo = async (payload) => {
    return (await service.fetchPost(GET_CLIENT_INFO.url, payload));
};
