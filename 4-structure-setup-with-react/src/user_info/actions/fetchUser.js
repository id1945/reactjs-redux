import axios from 'axios';

function fetchUser() {
    return {
        type: 'FETCH_USER',
        payload: axios.get("https://randomuser.me/api")
    }
}
export default fetchUser;