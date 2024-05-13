export type UserInfo = {
  name?: string;
  age?: number;
  birthday?: DateObject;
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

export type DateObject = {
  day: number;
  month: number;
  year: number;
};
