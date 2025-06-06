import { User } from '../user/api';

export type LoginRequest = Pick<User, 'mail'> & {
  password: string;
};

export type LoginResponse = User;

export type RegisterRequest = Pick<User, 'mail'> & {
  password: string;
};
