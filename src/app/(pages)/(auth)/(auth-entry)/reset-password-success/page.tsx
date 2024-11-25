import type { Metadata } from "next";
import { ResetPasswordSuccessFormGroup } from "@/app/_components";

export const metadata: Metadata = {
  title: "Password reset successful",
};

const ResetPasswordSuccess = () => {
  return <ResetPasswordSuccessFormGroup />;
};

export default ResetPasswordSuccess;
