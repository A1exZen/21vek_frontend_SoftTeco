import { User } from '../user/api';

export type LoginRequest = Pick<User, 'email'> & {
  password: string;
};

export type LoginResponse = User;

export type RegisterRequest = Pick<User, 'email'> & {
  password: string;
};
