import Link from "next/link";
import { AuthContainer } from "@/app/_components";

const ResetPasswordSuccessFormGroup = () => {
  return (
    <AuthContainer
      primaryText="Password reset successful"
      secondaryText="Your password reset has been completed successfully."
      showSocialAuth={false}
    >
      {/* FORM BLOCK */}
      <div className="form-block">
        <div className="helper-row -mt-7 mb-8">
          <div className="text flex justify-start items-center gap-x-1.5 text-grey-500 text-sm">
            {`Click the button below to log in`}
          </div>
        </div>

        {/* ACTION BUTTON */}
        <Link
          href="/login"
          className="btn btn-md btn-primary w-full hover:text-white"
        >
          Log in to your account
        </Link>
      </div>
    </AuthContainer>
  );
};

export default ResetPasswordSuccessFormGroup;
