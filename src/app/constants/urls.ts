import {environment} from "../../environments/environment";

const {API} = environment;

const auth = `${API}/auth`;
const cars = `${API}/cars`;
const users = `${API}/users`;

const urls = {
  auth: {
    login: auth,
    register: users,
    refresh: `${auth}/refresh`,
    me: `${auth}/me`
  },
  cars: {
    base: cars,
    byId: (id: number): string => `${cars}/${id}`
  }
}

export {urls};
