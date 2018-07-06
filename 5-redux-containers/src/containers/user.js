import { connect } from 'react-redux';
import Main from '../components/Main';
import { addUser } from '../actions/user';

const mapStateToProps = (state) => ({
    data: state,
})
const mapDispatchToProps = (dispatch) => {
    return {
        onAddUser: (user) => {
            dispatch(addUser(user))
        }
    }
}
const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)

export default UsersContainer;