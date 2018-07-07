import axios from 'axios';

function fectUser(){
    return {
        type: 'FETCH_USER',
        payload: axios.get('https://randomuser.me/api?results=10')
    }

}

export default fectUser;