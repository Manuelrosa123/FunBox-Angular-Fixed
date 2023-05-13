import { User } from "src/app/auth/interfaces/user";
import { Review } from "./review";
import { Comment } from "./comment";

export interface ReviewsResponse {
  reviews: Review[];
}

export interface ReviewResponse {
  review: Review;
}

export interface TokenResponse {
  token: string;
  user: User
}

export interface UserResponse {
  user: User;
}

export interface UsersResponse {
  users: User[];
}

export interface AvatarResponse {
  avatar: string;
}

export interface CommentsResponse {
  comments: Comment[];
}

export interface CommentResponse {
  comment: Comment;
}
