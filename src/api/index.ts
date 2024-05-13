import { BaseResponse } from "../interfaces";
import { UserInfo } from "../types";

export async function validate(data: UserInfo): Promise<BaseResponse> {
  try {
    const response = await fetch("http://localhost:3002/info/v2/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Failed to validate data");
    }
  } catch (error) {
    throw new Error("Network error occurred");
  }
}
