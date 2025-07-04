export enum GENDER {
  FEMALE = 'female',
  MALE = 'male',
}

export enum UserType {
  USER = 'user',
  BUSINESS = 'business',
}

export type Address = {
  idAdress: number;
  settlement: string;
  street: string;
  entrance: string;
  flor: string;
  aptOffice: string;
  isMain: boolean;
};

export type User = {
  idProfile?: number;
  mail?: string;
  name?: string;
  birthday?: string;
  tel?: string;
  gender?: GENDER;
  bonus?: number;
  typeUser?: UserType;
  address?: Address[];
};

export type UserUpdateRequest = Partial<Omit<User, 'id'>> & {
  password?: {
    oldPassword: string;
    newPassword: string;
  };
};

export type UserUpdateResponse = Partial<User>;

export type AddressRequest = Address & {
  isMain?: boolean;
};

export type UserResponse = User;

export type AddressResponse = Address;
export type Addresses = Address[];
export type AddressesResponse = Addresses;
