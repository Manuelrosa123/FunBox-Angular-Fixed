import { User } from "src/app/auth/interfaces/user";

export interface Review {
  _id?: string;
  title: string;
  image: string;
  description: string;
  type: string; //esto era el format antes
  launchDate: Date;
  reviewDate: Date;
  chapters?:number;
  creator?:string;
  stars?: number;
  likes: number;
  duration?: number;
  pages?: number;
  mine?: boolean;  //esto puede ser un poco mareo
}
