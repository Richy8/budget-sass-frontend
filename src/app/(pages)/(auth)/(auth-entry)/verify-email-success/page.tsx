import type { Metadata } from "next";
import { VerifyEmailSuccessFormGroup } from "@/app/_components";

export const metadata: Metadata = {
  title: "Email verified",
};

const VerifyEmailSuccess = () => {
  return <VerifyEmailSuccessFormGroup />;
};

export default VerifyEmailSuccess;
