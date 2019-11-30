import { GET_LOGIN_INFO} from './actionTypes';
import service from '../../service';
export const getLogininfo = async ( payload ) => {
    return (await service.fetchGet(GET_LOGIN_INFO.url+payload));
};
