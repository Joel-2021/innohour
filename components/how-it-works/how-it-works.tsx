"use client";

import { Container } from "../ui/container";
import { motion } from "motion/react";
import clock from "../../public/lottie/clock.json";
import Lottie from "lottie-react";
import { CallSection } from "./call-section";
import { StepCard } from "./step-card";

const HowItWorks = () => {

  const call01 = [
    {
      icon: "./icons/docs.svg",
      title: "Book Your Spot",
      text: "Pick a time that fits your schedule. Booking takes less than a minute.",
      delay: 0.2,
      width: "md:max-w-[45%] w-full"
    },
    {
      icon: "./icons/phone.svg",
      title: "Tell Us Your Story",
      text: "In the first 30-minute call, we’ll listen to your goals, challenges, and how your business operates.",
      delay: 0.3,
      width: "md:max-w-[40%] lg:max-w-[35%] w-full"
    }
  ];

  const call02 = [
    {
      icon: "./icons/target.svg",
      title: "Get Practical Insights",
      text: "In the second 30-minute call, we’ll share practical, easy-to-understand ideas that can help you save time and work smarter",
      delay: 0.4,
      className: "bg-black",
      width: "md:max-w-[40%] lg:max-w-[35%] w-full"
    },
    {
      icon: "./icons/calendar.svg",
      title: "Your Innovation Roadmap",
      text: "Within 48 hours, you’ll get a personalized roadmap with clear next steps tailored to your business.",
      delay: 0.5,
      className: "bg-black",
      width: "md:max-w-[45%] w-full"
    }
  ];

  return (
    <Container className="text-center">
      <div className="bg-[#222627] md:p-10 p-6 mx-5 rounded-xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring" }}
          viewport={{
            once: true,
          }}
          className="md:text-5xl text-4xl tracking-normal text-transparent bg-clip-text font-bold bg-linear-to-r from-[#00E5FC] to-[#137FD8] md:after:w-1/3 after:w-1/2 after:bottom-0 after:block after:bg-[#4a4a4a]/48 after:mx-auto after:h-0.75 after:mt-4"
        >
          How{" "}
          <span className="bg-linear-to-r from-[#CACACA] to-[#878787] bg-clip-text">
            InnoHour
          </span>{" "}
          Works
        </motion.h2>

        <div className="mt-12 mb-4 relative md:block hidden overflow-hidden">
          <div className="flex flex-col gap-5">
            <CallSection label="Call 01">
              {call01.map((step, i) => (
                <StepCard key={i} {...step} />
              ))}
            </CallSection>

            <CallSection label="Call 02">
              {call02.map((step, i) => (
                <StepCard key={i} {...step} />
              ))}
            </CallSection>
          </div>

          <div className="absolute md:w-[50%] lg:w-[58%] h-[110%] flex items-center justify-end top-1/2 md:translate-x-[5%] -right-2.5 -translate-y-1/2">
            <motion.div
              initial={{
                x: 30,
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
                type: "spring",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="rounded-tl-full rounded-bl-full h-full flex justify-center items-center bg-[#222627]"
            >
              <Lottie animationData={clock} loop={true} />
            </motion.div>
          </div>
        </div>

        <div className="md:hidden block mb-6">
          <div className="flex flex-col gap-5 mt-5">
            <CallSection label="Call 01">
              {call01.map((step, i) => (
                <StepCard key={i} {...step} />
              ))}
            </CallSection>

            <CallSection label="Call 02">
              {call02.map((step, i) => (
                <StepCard key={i} {...step} />
              ))}
            </CallSection>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default HowItWorks;
