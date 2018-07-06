// REDCUER
function userReducer(state = {}, action) {
  const user = {
    name: '',
    email: '',
    gender: ''
  };
  switch (action.type) {
    case 'FETCH_USER_PENDING':
      state = { ...state,
        status: 'Pending...',
        statusClass: 'text-info'
      }
      break;
    case 'FETCH_USER_FULFILLED':
      user.name = `${action.payload.data.results[0].name.first} ${action.payload.data.results[0].name.last}`
      user.email = action.payload.data.results[0].email;
      user.gender = action.payload.data.results[0].gender;
      state = { ...state,
        user,
        status: 'User Recieved',
        statusClass: 'text-success'
      }
      break;
    case 'FETCH_USER_REJECTED':
      state = { ...state,
        status: `${action.payload.message}`,
        statusClass: 'text-danger'
      }
      break;
    default:
      return state;
  }
  return state;
}

export default userReducer;