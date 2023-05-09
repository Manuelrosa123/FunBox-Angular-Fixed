import { User } from "../../auth/interfaces/user";

export interface Comment {
    id?: number;
    stars: number;
    text: string;
    date?: string;
    user?: User; //los comments van a estar jodidos de hacer
}
