import axios from 'axios';

function fetchUsers(){
    return {
        type: 'FETCH_USER',
        payload: axios.get('https://randomuser.me/api')
    }
}
export default fetchUsers;