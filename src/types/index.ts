export type UserInfo = {
  name?: string;
  age?: number;
  birthday?: Date;
  married: boolean | null;
};

export type UserInfoValidationErrors = {
  name?: string;
  age?: string;
  birthday?: string;
  married?: string;
};

export type SelectOption = {
  value: string;
  label: string;
};
