"use client";

import React, { useState } from "react";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import { IInputType } from "@/app/_types/form-type";
import { TextInputField, SelectInputField } from "@/app/_components";
// import { useToast } from "@/app/_context/ToastContext";
import { useBtnClick } from "@/app/_hooks";
// import useStore from "@/app/_app-store";
import { countries } from "@/app/_utils";

type ISetupInputType = {
  organizationName: string;
  industryType: string;
  numberOfEmployees: string;
  country: string;
};

type ISelectData = {
  name: string;
  value: string;
};

const SetupFormGroup = () => {
  const router = useRouter();

  // const { showToast } = useToast();
  //   const { loginUser } = useStore();

  const [, setProcessing] = useState(false);
  const { buttonRef, updateButtonState } = useBtnClick("Finish setup");

  const [setupPayload, setSetupPayload] = useState<ISetupInputType>({
    organizationName: "",
    industryType: "",
    numberOfEmployees: "",
    country: "",
  });

  const [industryType] = useState<ISelectData[]>([
    { name: "Government", value: "government" },
    { name: "Private", value: "private" },
    { name: "Non-Profit", value: "non-profit" },
    { name: "Other", value: "other" },
  ]);

  const [numberOfEmployees] = useState<ISelectData[]>([
    { name: "1-10", value: "1-10" },
    { name: "11-50", value: "11-50" },
    { name: "51-200", value: "51-200" },
    { name: "201-500", value: "201-500" },
    { name: "500+", value: "500+" },
  ]);

  const [countryData] = useState<ISelectData[]>(
    countries.map((country) => ({
      name: country.country,
      value: country.country.toLowerCase(),
    }))
  );

  const updateSetupPayload = (value: string, field: string) => {
    setSetupPayload({ ...setupPayload, [field]: value });
  };

  const updateButtonClicks = (status: boolean) => {
    setProcessing(status);
    updateButtonState(status);
  };

  const isSetupReady = () => {
    return !(
      setupPayload.organizationName &&
      setupPayload.industryType &&
      setupPayload.numberOfEmployees &&
      setupPayload.country
    );
  };

  const handleUserSetup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateButtonClicks(true);

    router.push("/overview");

    try {
      //   const response = await loginUser(setupPayload);
      // updateButtonClicks(false);
      //   if (response.code === 200) {
      //     showToast(response.message, "success");
      //     // CHECK USER PAYLOAD AND APPLY REDIRECTS
      //     const { isOnboarded, isVerified, email } = response.data.user;
      //     setTimeout(() => {
      //       // REDIRECT TO DASHBOARD
      //       if (isVerified && isOnboarded) {
      //         router.push("/dashboard");
      //       }
      //       // REDIRECT TO STEP ONE ONBOARDING PAGE
      //       else if (isVerified && !isOnboarded) {
      //         router.push("/welcome");
      //       }
      //       // REDIRECT TO EMAIL VERIFICATION PAGE
      //       else if (!isVerified && !isOnboarded) {
      //         router.push(`/verify-email?email=${encodeURIComponent(email)}`);
      //       }
      //     }, 1000);
      //   } else {
      //     showToast(response.error, "error");
      //   }
    } catch {
      updateButtonClicks(false);
    }
  };

  return (
    <form className="form-block" onSubmit={handleUserSetup}>
      {/* EMAIL INPUT */}
      <TextInputField
        labelId="organizationName"
        labelTitle="Organization name"
        inputType={IInputType.Text}
        inputPlaceholder="Enter your organization name"
        isRequired={true}
        onInputChange={(value) => updateSetupPayload(value, "organizationName")}
        errorHandler={{ validator: "validateRequired" }}
      />

      <SelectInputField
        labelId="industryType"
        labelTitle="Industry type"
        isRequired={true}
        inputPlaceholder="Select your industry type"
        selectData={industryType}
        onSelectChange={(value) => updateSetupPayload(value, "industryType")}
      />

      <SelectInputField
        labelId="numberOfEmployees"
        labelTitle="Number of employees"
        isRequired={true}
        inputPlaceholder="Select your number of employees"
        selectData={numberOfEmployees}
        onSelectChange={(value) =>
          updateSetupPayload(value, "numberOfEmployees")
        }
      />

      <SelectInputField
        labelId="country"
        labelTitle="Country of operation"
        isRequired={true}
        inputPlaceholder="Select your country of operation"
        selectData={countryData}
        onSelectChange={(value) => updateSetupPayload(value, "country")}
      />

      {/* ACTION BUTTON */}
      <button
        ref={buttonRef}
        className="btn btn-md btn-primary w-full"
        disabled={isSetupReady()}
      >
        Finish setup
      </button>
    </form>
  );
};

export default SetupFormGroup;
