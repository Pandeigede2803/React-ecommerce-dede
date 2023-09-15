const user_reducer = (state, action) => {
    if (action.type === "USER_LOGIN_REQUEST") {
      return { ...state, loading: false };
    }
    if (action.type === "USER_LOGIN_SUCCESS") {
      const newState = {
        ...state,
        userId: action.payload.userId,
        token: action.payload.jwttoken,
        loading: false,
        error: "",
      };
  
      localStorage.setItem("userInfo", JSON.stringify(newState));
  
      return newState;
    }
    if (action.type === "USER_LOGIN_FAIL") {
      return { ...state, loading: false, error: action.payload };
    }
  
    // Handle empty actions here
  // if (action.type === "USER_LOGOUT") {
  //   return state;
  // }
  if (action.type === "USER_LOGOUT") {
    // Clear user data from state and local storage
    localStorage.removeItem("userInfo");
    return {
      ...state,
      userId: null,
      token: null,
      loading: false,
      error: "",
    };
  }

  if (action.type === "USER_REGISTER_REQUEST") {
    return state;
  }
  if (action.type === "USER_REGISTER_FAIL") {
    return state;
  }
  if (action.type === "USER_REGISTER_SUCCESS") {
    return state;
  }
  };
  
  export default user_reducer;