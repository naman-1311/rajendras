"use server";
import { fetchGraphQLMutation } from "..";
import {
  REFRESH_TOKEN_MUTATION,
  SIGN_IN_MUTATION,
} from "./query";
import { RefreshTokenRes, SignInResponse, SignInInput } from "@/types/auth-type";

export const signInAction = async ({
  variables,
}: {
  variables: { input: SignInInput };
}): Promise<SignInResponse> => {
  const res = await fetchGraphQLMutation<SignInResponse>(SIGN_IN_MUTATION, variables);
  return res as SignInResponse;
};

export const refreshToken = async (refreshToken: string): Promise<RefreshTokenRes> => {
  const variables = { refreshToken };
  const res = await fetchGraphQLMutation<RefreshTokenRes>(
    REFRESH_TOKEN_MUTATION,
    variables
  );
  return res;
};
