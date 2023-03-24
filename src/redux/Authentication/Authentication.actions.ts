import { Thunk } from "..";
import { singUser } from "../../services/Authentication.service";

declare interface Credentials {
  user: string;
  pass: string;
}

export const login =
  ({ user, pass }: Credentials): Thunk =>
  async (dispatch) => {
    const loggedInUser = await singUser(user, pass);
    dispatch({
      type: "AUTHENTICATION_LOGIN",
      payload: loggedInUser,
    });
  };
