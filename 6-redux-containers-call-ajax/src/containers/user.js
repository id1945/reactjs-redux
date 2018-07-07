import Users from '../components/User';
import fetchUsers from '../actions/user';
import { connect } from 'react-redux';

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
const UsersContainers = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);

export default UsersContainers;