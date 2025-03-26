import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:3000';
Axios.defaults.withCredentials = true;

// Menő axios interceptor a CSRF token miatt (yippie)
Axios.interceptors.request.use(config => {
    const csrfToken = document.cookie.split('; ')
        .find(row => row.startsWith('XSRF-TOKEN='))
        ?.split('=')[1];

    if (csrfToken) {
        config.headers['X-XSRF-TOKEN'] = csrfToken;
    }

    return config;
}, err => {
    return Promise.reject(err);
});

export default {
    postLogin(user) {
        return Axios.post('/api/auth/login', user)
            .then(res => {
                if (res.status === 200) {
                    localStorage.setItem('token', res.data.token);
                    this.$router.push('/');
                    return res.data;
                }
                // return response.data;
            })
            .catch(err => {
                console.log(err);
            })
    },
    postSignup(user) {
        return Axios.post('/api/auth/signup', user)
    }
}
