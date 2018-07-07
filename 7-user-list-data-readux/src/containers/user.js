import { connect } from 'react-redux';
import fetchUsers from '../actions/user';
import Users from '../components/User';

const mapStateToProps = (state) => ({
    data: state
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => {
            dispatch(fetchUsers());
        }
    }
}

const userContainers = connect(mapStateToProps,mapDispatchToProps)(Users);

export default userContainers;