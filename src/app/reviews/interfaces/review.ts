import { User } from "src/app/auth/interfaces/user";

export interface Review {
  _id?: string;
  title: string;
  image: string;
  description: string;
  type: string; //esto era el format antes
  launchDate: Date;
  reviewDate: Date;
  creator?:string; //esto en :User no estaría mal, pero por ahora vamos a dejarlo en string
  stars?: number;
  likes: number;
  duration?: string;
  pages?: number;
  mine?: boolean;  //esto puede ser un poco mareo
}
