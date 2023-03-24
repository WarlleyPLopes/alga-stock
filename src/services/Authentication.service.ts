import http from "../utils/http";

export interface User {
  _id: string;
  user: string;
  email: string;
  role: "admin" | "customed";
  createdAt: string;
  updatedAt: string;
}

export function singUser(user: string, pass: string) {
  return http
    .post<User>("/authentication/login", { user, pass })
    .then((res) => res.data);
}
