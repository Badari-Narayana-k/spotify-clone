{/*getting end point*/}
export const authEndpoint = process.env.REACT_APP_AUTH_ENDPOINT;

{/*redirect uri*/}
const redirectUri=process.env.REACT_APP_REDIRECT_URI;

{/*connecting client id*/}
const clientId=process.env.REACT_APP_CLIENT_ID;

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        //accesstoken=mysupersecretkey&name=astro
        let parts = item.split('=');
        initial[parts[0]]=decodeURIComponent(parts[1]);
        return initial;
    },{});
    
}




export const loginUrl= `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
    )}&response_type=token&show_dialog=true`;






