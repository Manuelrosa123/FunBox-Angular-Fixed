export interface User {
  _id?: string;        //es string porque es mongoDB
  name: string;
  email: string;
  password?: string;
  avatar: string;

  lat?: number;     //por ahora vamos a no usarlo
  lng?: number;     //por ahora vamos a no usarlo
  me?: boolean;     //por ahora vamos a no usarlo
}

export interface UserLogin {
  email: string;
  password: string;
  lat?: number;     //por ahora vamos a no usarlo
  lng?: number;     //por ahora vamos a no usarlo
}

