<<<<<<< HEAD
const env = '192.168.0.194:9018';

const Service = {

    fetchPost: async(url, body, token = null) => {
        url = env + url;
        const headers = { 'Content-Type': 'application/json' };
        if (token) {
            headers['x-access-token'] = token;
            headers['source'] = 'website';
=======
// const env = require('./config').api_server;
const env = 'http://127.0.0.1:9018';

const Service = {
    fetchGet: async (url, token = null) => {
        url = env + url;
        const headers = {};
        headers['source'] = 'nucleus';
        if (token) {
            headers['x-auth-token'] = token;
        }
        try {
            const res = await fetch(url, { method: 'GET', headers: headers });

            if (res.status >= 200 && res.status < 400) {

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
            console.log(e);
            onFailure('network');
            return false;
        }
    },

    fetchPost: async (url, body, token = null) => {
        url = env + url;
        const headers = { 'Content-Type': 'application/json' };
        headers['source'] = 'website';
        if (token) {
            headers['x-auth-token'] = token;
>>>>>>> 37f40e500a9b9b11453e9d09fc38eff5a0401b90
        }
        try {
            const res = await fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(body) });
            if (res.status >= 200 && res.status < 400) {
<<<<<<< HEAD
=======
                console.log(res);
>>>>>>> 37f40e500a9b9b11453e9d09fc38eff5a0401b90
                return (res.json());
            } else if (res.status >= 400 && res.status < 500) {
                console.log(res);
                return false;
            } else {
                console.log(res);
                return false;
            }
        } catch (e) {
            console.log(e);
            return false;
        }
<<<<<<< HEAD
    }
};
export default Service;
=======
    },


};

const onFailure = (type) => {
    console.log("API FAILED " + type);

};

export default Service;
>>>>>>> 37f40e500a9b9b11453e9d09fc38eff5a0401b90
