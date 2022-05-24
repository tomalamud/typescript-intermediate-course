export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
};

export type User = {
  username: string;
  role: ROLES;
};

const tomiUser: User = {
  username: 'tomibytes',
  role: ROLES.ADMIN
};

