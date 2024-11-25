import { create } from "zustand";
import { IAuthStore, IAuthType } from "@/app/_types/store-type";
import { apiUtil } from "@/app/_utils";
import { AUTH_USER, commonUtil } from "@/app/_utils";

const routes = {
  login: "/auth/login",
  signup: "/auth/signup",
  verifyOTP: "/auth/verify-otp",
  resendOTP: "/auth/resend-otp",
  passwordRequest: "/auth/request-password",
  passwordReset: "/auth/reset-password",
};

export const useAuthStore = create<IAuthStore>((set) => ({
  authUser:
    commonUtil.getStorage({
      storage_name: AUTH_USER,
      storage_type: "object",
    }) || {},

  // Method to directly update authUser
  setAuthUser: (newUserData: any) => set({ authUser: newUserData }),

  loginUser: async (payload: Pick<IAuthType, "email" | "password">) => {
    const response = await apiUtil.push(routes.login, { payload });
    mutateAuthUser(set, response);
    return response;
  },

  signupUser: async (
    payload: Pick<IAuthType, "firstName" | "lastName" | "email" | "password">
  ) => {
    const response = await apiUtil.push(routes.signup, { payload });
    mutateAuthUser(set, response);
    return response;
  },

  verifyUserOTP: async (payload: Pick<IAuthType, "otp">) => {
    return await apiUtil.push(routes.verifyOTP, { payload });
  },

  resendUserOTP: async () => {
    return await apiUtil.push(routes.resendOTP, {});
  },

  passwordRequest: async (payload: Pick<IAuthType, "email">) => {
    return await apiUtil.push(routes.passwordRequest, { payload });
  },

  passwordReset: async (payload: Pick<IAuthType, "token" | "password">) => {
    return await apiUtil.push(routes.passwordReset, { payload });
  },
}));

// MUTATE AUTH USER DATA
const mutateAuthUser = (setHandler: any, responsePayload: any) => {
  const { code, data } = responsePayload;

  if ([200, 201].includes(code)) {
    const { user } = data;

    commonUtil.setStorage({
      storage_name: AUTH_USER,
      storage_value: user,
      storage_type: "object",
    });

    setHandler({ authUser: user ?? {} }); // Corrected this part
  }
};
