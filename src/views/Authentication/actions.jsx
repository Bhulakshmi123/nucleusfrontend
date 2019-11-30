<<<<<<< HEAD
import { GET_LOGIN_INFO} from './actionTypes';
import service from '../../service';
export const getLogininfo = async ( payload ) => {
    return (await service.fetchGet(GET_LOGIN_INFO.url+payload));
};
=======
import { GET_CLIENT_INFO} from './actionTypes';
import service from '../../service';

export const getClientInfo = async (payload) => {
    return (await service.fetchPost(GET_CLIENT_INFO.url, payload));
};

// export const liveCam = async (payload) => {
//     return (await service.fetchGet(LIVE_CAM.url));
// };

// export const getObservations = async (payload) => {
//     return (await service.fetchGet(GET_OBSERVATIONS.url + payload));
// };

// export const changeCamera = async (payload) => {
//     console.log("===================================");
//     console.log(POST_CAMERA.url);
//     console.log(payload);
//     console.log("===================================");
//     return (await service.fetchPost(POST_CAMERA.url, payload));
// };

// export const videoSocket = async () => {
//     return await service.fetchGet(GET_VIDEO_WITH_FRAME.url);
// };
>>>>>>> 37f40e500a9b9b11453e9d09fc38eff5a0401b90
