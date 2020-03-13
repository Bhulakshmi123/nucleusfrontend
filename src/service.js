import { getIPAddress } from './config.js';
const env = getIPAddress();
const Service = {
    fetchGet: async(url, token = null) => {
        url = env + url;
<<<<<<< HEAD
        // console.log('Final Url', url);
=======
        // console.log('Final URL Type:GET', url);
>>>>>>> 1e54069a057ea6d5f68a27e15602a4301026bc56
        const headers = {};
        headers['source'] = 'lms';
        if (token) {
            headers['x-access-token'] = token;
        }
        try {
            const res = await fetch(url, { method: 'GET', headers: headers });
            if (res.status >= 200 && res.status < 400 && res.status !== 204) {
                return (res.json());
            } else if (res.status >= 400 && res.status < 500) {
                if (res.status === 401) {
                    onFailure('token');
                }
                return false;
            } else {
                onFailure('server');
                return false;
            }
        } catch (e) {
            console.log('Server Failur Error',e);
            onFailure('network');
            return false;
        }
    },

    fetchPost: async(url, body, token = null) => {
        url = env + url;
<<<<<<< HEAD
        // console.log(url);
=======
        // console.log('Final URL Type:POST',url);
>>>>>>> 1e54069a057ea6d5f68a27e15602a4301026bc56
        const headers = { 'Content-Type': 'application/json' };
        headers['source'] = 'website';
        if (token) {
            headers['x-access-token'] = token;
        }
        try {
            const res = await fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(body) });
            if (res.status >= 200 && res.status < 400) {
                // console.log(res);
                return (res.json());
            } else if (res.status >= 400 && res.status < 500) {
                console.log(res);
                return false;
            } else {
                console.log(res);
                return false;
            }
        } catch (e) {
            console.log('Server Failur Error',e);
            return false;
        }
    },
};

const onFailure = (type) => {
    console.log("API FAILED " + type);
};

export default Service;