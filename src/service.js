const env = '192.168.0.194:9018';

const Service = {

    fetchPost: async(url, body, token = null) => {
        url = env + url;
        const headers = { 'Content-Type': 'application/json' };
        if (token) {
            headers['x-access-token'] = token;
            headers['source'] = 'website';
        }
        try {
            const res = await fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(body) });
            if (res.status >= 200 && res.status < 400) {
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
    }
};
export default Service;