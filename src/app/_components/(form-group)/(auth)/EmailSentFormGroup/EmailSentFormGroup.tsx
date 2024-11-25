"use client";

import React, { useState, useLayoutEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { AuthContainer } from "@/app/_components";
// import { useToast } from "@/app/_context/ToastContext";
import { useBtnClick } from "@/app/_hooks";
// import useStore from "@/app/_app-store";

const EmailSentFormGroup = () => {
  const router = useRouter();
  const params = useParams();

  // const { showToast } = useToast();
  // const { passwordRequest } = useStore();

  const [, setProcessing] = useState(false);
  const { buttonRef, updateButtonState } = useBtnClick("Resend reset link");

  const [userEmail, setUserEmail] = useState<string>("");

  const updateButtonClicks = (status: boolean) => {
    setProcessing(status);
    updateButtonState(status);
  };

  const handleForgotPassword = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    updateButtonClicks(true);

    router.push("/");

    // try {
    //   const response = await passwordRequest({ email: userEmail });
    //   updateButtonClicks(false);

    //   if (response.code === 200) {
    //     showToast(response.message, "success");
    //   } else {
    //     showToast(response?.message || response?.error, "error");
    //   }
    // } catch {
    //   updateButtonClicks(false);
    // }
  };

  useLayoutEffect(() => {
    setUserEmail(decodeURIComponent(params.email as string));
  }, [params]);

  return (
    <AuthContainer
      primaryText="Check your email"
      secondaryText="We've sent a password reset link your email."
      showSocialAuth={false}
    >
      {/* FORM BLOCK */}
      <form className="form-block -mt-3" onSubmit={handleForgotPassword}>
        {/* EMAIL VIEW */}
        <div className="flex justify-start items-center gap-2 mb-7">
          <CheckCircleIcon className="text-teal-600 w-[22px] h-[22px]" />
          <div className="text-teal-600 text-[15px] font-medium">
            {userEmail ? userEmail : "Loading user email..."}
          </div>
        </div>

        <div className="helper-row my-2">
          <div className="text">{`Didn't receive an email reset link?`}</div>
        </div>

        {/* ACTION BUTTON */}
        <button ref={buttonRef} className="btn btn-md btn-primary w-full">
          Resend reset link
        </button>

        <div className="helper-row justify-center mt-4">
          <div className="text">
            Need to login now?
            <Link href="/login">Log in</Link>
          </div>
        </div>
      </form>
    </AuthContainer>
  );
};

export default EmailSentFormGroup;
