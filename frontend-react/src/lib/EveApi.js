import queryString from 'query-string';
import base64 from 'base-64';

const eveLogin = () => {

    const scope = 'publicData'
    const redirectUri = encodeURIComponent('http://localhost:3000/callback')
    const uniqueString = '12345'
    return `https://login.eveonline.com/v2/oauth/authorize/?response_type=code&redirect_uri=${redirectUri}&client_id=${process.env.REACT_APP_CLIENT_ID}&scope=${scope}&state=${uniqueString}`;

};

const getAuthTokenFromEve = async (params) => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const secret = process.env.REACT_APP_EVE_SECRET_KEY;
    
    const { code, state } = queryString.parse(params);

    if (!code)
        return {
            error: 'There is not authorization code'
        }

    let encodedForm = []
    encodedForm.push(encodeURIComponent('grant_type')+'='+encodeURIComponent('authorization_code'));
    encodedForm.push(encodeURIComponent('code')+'='+encodeURIComponent(code));
    encodedForm = encodedForm.join('&');

    try{
        const response = await fetch(`https://login.eveonline.com/v2/oauth/token`,{
            method: 'POST',
            headers: {
                Authorization: `Basic ${base64.encode(`${clientId}:${secret}`)}`,
                'Content-Type': 'application/x-www-form-urlencoded',
                Host: 'login.eveonline.com'
            },
            body: encodedForm
        })
        const data = await response.json();

        return data;

    } catch (error) {
        return {
            error
        }
    }
}

const signOff = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
}

export {
    eveLogin,
    getAuthTokenFromEve,
    signOff
};