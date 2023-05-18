export interface User {
  _id?: string;        //It's string because it's mongoDB
  name: string;
  email: string;
  password?: string;
  avatar: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

