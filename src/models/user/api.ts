export enum GENDER {
  FEMALE = 'female',
  MALE = 'male',
}

export type User = {
  id: number;
  mail: string;
  name?: string;
  birthday?: string;
  tel?: string;
  gender?: GENDER;
  bonus?: number;
  address?: string[];
  typeUser?: 'user' | 'business';
};

export type UserUpdateRequest = Partial<Omit<User, 'id'>> & {
  password?: {
    oldPassword: string;
    newPassword: string;
  };
};

export type UserUpdateResponse = Partial<User>;
