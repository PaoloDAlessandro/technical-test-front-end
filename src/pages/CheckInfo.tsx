import { useEffect, useState } from "react";
import Button from "../components/core/Button";
import Input from "../components/core/Input";
import { UserInfo, UserInfoValidationErrors } from "../types";
import { formatBirthDay, parseDateString } from "../utils/formatter";
import { BaseResponse, ValidationError } from "../interfaces";
import { validate } from "../api";
import Select from "../components/core/Select";
import { marriedOptions } from "../data";

export default function CheckInfo() {
  const [response, setResponse] = useState<BaseResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<UserInfoValidationErrors | undefined>();

  useEffect(() => {
    if (response?.errors && response.errors.length > 0) {
      dispatchValidationError(response.errors);
    } else {
      setValidationErrors(undefined);
    }
  }, [response]);

  const dispatchValidationError = (responseValidationError: ValidationError[]) => {
    setValidationErrors(undefined);
    let errors: UserInfoValidationErrors = {};
    responseValidationError.forEach((error) => {
      const errorMsg = error.constraints ? Object.values(error.constraints)[0] : "Validation error";
      errors[error.property as keyof UserInfoValidationErrors] = errorMsg;
    });
    setValidationErrors(errors);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    const marriedValue = formData.get("married");

    const data: UserInfo = {
      name: formData.get("name") as string,
      age: Number(formData.get("age") as string),
      birthday: parseDateString(formData.get("birthday") as string),
      married: marriedValue === "Select a option" ? null : marriedValue === "married",
    };

    const validationResponse = await validate(data);

    setResponse(validationResponse);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col gap-y-5 items-center justify-center mt-20">
      <h1 className="text-4xl font-bold">Info validator</h1>
      <div className="w-11/12 max-w-xl lg:w-96 lg:max-w-none flex flex-col border border-grey rounded-2xl p-5">
        <form className="flex flex-col gap-y-8" method="post" onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-y-2">
            <Input type="text" name="name" label="Name" error={validationErrors?.name} />
            <Input type="number" name="age" label="Age" error={validationErrors?.age} />
            <Input
              type="text"
              name="birthday"
              label="Birthday"
              placeholder="DD/MM/YYYY"
              formatValue={formatBirthDay}
              error={validationErrors?.birthday}
              maxLength={10}
            />
            <Select label="Married" placeholder="Select a option" name="married" options={marriedOptions} error={validationErrors?.married} />
          </div>
          <Button isLoading={isLoading} type="submit">
            Validate
          </Button>
        </form>
      </div>
      {response?.success && <p className="font-medium text-sm uppercase">Valid data submitted</p>}
    </div>
  );
}
