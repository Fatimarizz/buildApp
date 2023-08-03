import React from 'react';
import { useState } from 'react';
import { createCheckout } from '../api/userServices';
import Stepper from '../components/Stepper';
import { StepperInfo, STRIPE_PUBLISHABLE_KEY } from '../constants/AppConstants';
import { loadStripe } from '@stripe/stripe-js';
export const StepperPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});

  const makePayment = async () => {
    console.log('STRIPE_PUBLISHABLE_KEY', STRIPE_PUBLISHABLE_KEY);
    const stripe = await loadStripe(STRIPE_PUBLISHABLE_KEY);
    const session = await createCheckout({
      ...selectedOptions,
      quantity: 1,
      price: 2
    });
    console.log(session);

    const result = stripe.redirectToCheckout({
      sessionId: session?.data?.id
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  const handleProceedNext = async () => {
    if (currentStep + 1 > StepperInfo.length - 1) {
      await makePayment();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <Stepper
      selectedOptions={selectedOptions}
      setSelectedOptions={setSelectedOptions}
      currentStep={currentStep}
      handleProceedNext={handleProceedNext}
      steps={StepperInfo}
    />
  );
};
