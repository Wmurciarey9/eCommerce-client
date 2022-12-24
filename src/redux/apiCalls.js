import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../redux/requestMethods";

const url = "https://ecommerce.adaptable.app/";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post(url + "/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
