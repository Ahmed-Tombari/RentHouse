"use client"
import Image from "next/image";
import { useState } from "react";

export default function PricingSection() {
  const [billingAnnual, setBillingAnnual] = useState(false);

  // Pricing plans data
  const plans = [
    {
      name: "Starter",
      priceMonthly: 29,
      description: "No credit card required",
      features: [
        "400 GB Storage",
        "Unlimited Photos & Videos",
        "Exclusive Support",
      ],
      btnBg: "bg-secondary",
      btnHoverBg: "hover:bg-primary",
    },
    {
      name: "Growth Plan",
      priceMonthly: 59,
      description: "No credit card required",
      features: [
        "400 GB Storage",
        "Unlimited Photos & Videos",
        "Exclusive Support",
      ],
      btnBg: "bg-primary",
      btnHoverBg: "hover:bg-secondary",
    },
    {
      name: "Business",
      priceMonthly: 139,
      description: "No credit card required",
      features: [
        "400 GB Storage",
        "Unlimited Photos & Videos",
        "Exclusive Support",
      ],
      btnBg: "bg-secondary",
      btnHoverBg: "hover:bg-primary",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-whiter py-20 dark:bg-blacksection lg:py-25 xl:py-30"
    >
      {/* Background shapes */}
      <Image
        alt="Shape"
        loading="lazy"
        width={43}
        height={86}
        className="absolute left-[10%] top-[5%]"
        src="/images/shape-06.svg"
      />
      <Image
        alt="Shape"
        loading="lazy"
        width={85}
        height={46}
        className="absolute right-[20%] top-[25%]"
        src="/images/shape-03.svg"
      />
      <Image
        alt="Shape"
        loading="lazy"
        width={100}
        height={50}
        className="absolute bottom-[10%] right-[5%] w-25"
        src="/images/shape-07.svg"
      />
      <Image
        alt="Shape"
        loading="lazy"
        width={927}
        height={1039}
        className="absolute bottom-0 left-0"
        src="/images/shape-12.svg"
      />
      <Image
        alt="Shape"
        loading="lazy"
        width={1027}
        height={492}
        className="absolute right-0 top-0"
        src="/images/shape-13.svg"
      />

      {/* Header */}
      <div className="animate_top relative z-10 mx-auto max-w-[1390px] px-4 text-center md:px-8 xl:px-0">
        <h2 className="mx-auto mb-4.5 text-3xl font-semibold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-title-xl">
          Great Affordable Pricing Plans
        </h2>
        <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using.
        </p>
      </div>

      {/* Billing toggle */}
      <div className="mt-12.5 flex items-center justify-center space-x-4">
        <span
          className={`font-medium ${
            !billingAnnual ? "text-black dark:text-white" : "text-gray-400"
          }`}
        >
          Bill Monthly
        </span>
        <button
          aria-label="Pricing Toggler"
          className="relative rounded-full focus:outline-none"
          onClick={() => setBillingAnnual(!billingAnnual)}
        >
          <div className="h-6 w-11 rounded-full bg-primary transition" />
          <div
            className={`absolute left-1 top-[3px] inline-flex h-4.5 w-4.5 transform items-center justify-center rounded-full bg-white shadow-xs transition-all duration-200 ease-in-out ${
              billingAnnual ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
        <span
          className={`font-medium ${
            billingAnnual ? "text-black dark:text-white" : "text-gray-400"
          }`}
        >
          Bill Annually
        </span>
      </div>

      {/* Pricing cards */}
      <div className="relative z-10 mx-auto mt-15 max-w-[1390px] px-4 md:px-8 xl:px-21">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="animate_top rounded-lg bg-white px-7.5 pb-10 pt-11 text-center shadow-3 dark:bg-black dark:shadow-none"
            >
              <h4 className="mb-10 text-title-xsm text-black dark:text-white">
                {plan.name}
              </h4>
              <div className="mb-1.5 flex items-center justify-center gap-1.5">
                <h2 className="text-title-lg font-semibold text-black dark:text-white">
                  $
                  {billingAnnual
                    ? Math.round(plan.priceMonthly * 12 * 0.8) // example annual discount 20%
                    : plan.priceMonthly}
                </h2>
                <span className="inline-block text-sm text-black dark:text-white">
                  /per {billingAnnual ? "year" : "month"}
                </span>
              </div>
              <p className="text-xm mb-9.5">{plan.description}</p>
              <a
                href="#"
                className={`rounded-full px-13 py-3 font-medium text-white duration-300 ease-in-out ${plan.btnBg} ${plan.btnHoverBg}`}
              >
                Try for free
              </a>
              <ul className="mb-10 mt-7.5 flex flex-col gap-3 text-black dark:text-white">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <p className="text-black dark:text-white">7-day free trial</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
