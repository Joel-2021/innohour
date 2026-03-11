"use client";

import { Container } from "./ui/container";
import { motion } from "motion/react";
import clock from "../public/lottie/clock.json";
import Image from "next/image";
import Lottie from "lottie-react";

const HowItWorks = () => {
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
            <div className="relative flex flex-col gap-5 mx-19">
              <motion.h3
                initial={{
                  filter: "blur(10px)",
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                }}
                whileInView={{
                  filter: "blur(0px)",
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                className="absolute -left-30 top-1/2 -translate-y-1/2 text-6xl font-extrabold text-white/7 rotate-270"
              >
                Call 01
              </motion.h3>
              <motion.div
                initial={{
                  y: -30,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="bg-[#1B1C1E] flex items-center gap-5 rounded-xl text-start p-8"
              >
                <Image
                  src="./icons/docs.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <div className="max-w-[45%]">
                  <h4 className="font-bold text-lg mb-2">Book Your Spot</h4>
                  <p className="text-xs leading-normal tracking-wide">
                    Pick a time that fits your schedule. Booking takes less than
                    a minute.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  y: -30,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="bg-[#1B1C1E] flex items-center gap-5 rounded-xl text-start p-8"
              >
                <Image
                  src="./icons/phone.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <div className="md:max-w-[40%] lg:max-w-[35%]">
                  <h4 className="font-bold text-lg mb-2">Tell Us Your Story</h4>
                  <p className="text-xs leading-normal tracking-wide">
                    In the first 30-minute call, we’ll listen to your goals,
                    challenges, and how your business operates.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="relative flex flex-col gap-5 mx-19">
              <motion.h3
                initial={{
                  filter: "blur(10px)",
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                }}
                whileInView={{
                  filter: "blur(0px)",
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                className="absolute -left-30 top-1/2 -translate-y-1/2 text-6xl font-extrabold text-white/7 rotate-270"
              >
                Call 02
              </motion.h3>

              <motion.div
                initial={{
                  y: -30,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.4,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="bg-black flex items-center gap-5 rounded-xl text-start p-8"
              >
                <Image
                  src="./icons/target.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <div className="md:max-w-[40%] lg:max-w-[35%]">
                  <h4 className="font-bold text-lg mb-2">
                    Get Practical Insights
                  </h4>
                  <p className="text-xs leading-normal tracking-wide">
                    In the second 30-minute call, we’ll share practical,
                    easy-to-understand ideas that can help you save time and
                    work smarter.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  y: -30,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="bg-black flex items-center gap-5 rounded-xl text-start p-8"
              >
                <Image
                  src="./icons/calendar.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <div className="max-w-[45%]">
                  <h4 className="font-bold text-lg mb-2">
                    Your Innovation Roadmap
                  </h4>
                  <p className="text-xs leading-normal tracking-wide">
                    Within 48 hours, you’ll get a personalized roadmap with
                    clear next steps tailored to your business.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute h-[110%] flex items-center justify-end top-1/2 md:translate-x-[5%] -right-2.5 -translate-y-1/2">
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
              className="max-w-[60%] rounded-tl-full rounded-bl-full h-full flex justify-center items-center lg:bg-[radial-gradient(100%_100%_at_50%,#222627_63%,transparent_61%)] md:bg-[radial-gradient(80%_75%_at_59%,#222627_63%,transparent_61%)]"
            >
              <Lottie animationData={clock} loop={true} />
            </motion.div>
          </div>
        </div>

        <div className="md:hidden block">
          <div className="flex flex-col gap-5 mt-5">
            <div className="relative flex flex-col gap-5 ps-5">
              <motion.h3
                initial={{
                  filter: "blur(10px)",
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                }}
                whileInView={{
                  filter: "blur(0px)",
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                className="absolute left-0 top-30 -translate-x-1/2 -translate-y-1/2 text-3xl font-extrabold text-white/7 rotate-270"
              >
                Call 01
              </motion.h3>
              <motion.div
                initial={{
                  y: -30,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="bg-[#1B1C1E] flex items-center gap-5 rounded-xl text-start p-5"
              >
                <Image
                  src="./icons/docs.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <div>
                  <h4 className="font-bold text-lg mb-2">Book Your Spot</h4>
                  <p className="text-xs leading-normal">
                    Pick a time that fits your schedule. Booking takes less than
                    a minute.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  y: -30,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="bg-[#1B1C1E] flex items-center gap-5 rounded-xl text-start p-5"
              >
                <Image
                  src="./icons/phone.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <div>
                  <h4 className="font-bold text-lg mb-2">Tell Us Your Story</h4>
                  <p className="text-xs leading-normal">
                    In the first 30-minute call, we’ll listen to your goals,
                    challenges, and how your business operates.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="relative flex flex-col gap-5 ps-5">
              <motion.h3
                initial={{
                  filter: "blur(10px)",
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                }}
                whileInView={{
                  filter: "blur(0px)",
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                className="absolute left-0 top-30 -translate-x-1/2 -translate-y-1/2 text-3xl font-extrabold text-white/7 rotate-270"
              >
                Call 02
              </motion.h3>

              <motion.div
                initial={{
                  y: -30,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.4,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="bg-black flex items-center gap-5 rounded-xl text-start p-5"
              >
                <Image
                  src="./icons/target.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <div>
                  <h4 className="font-bold text-lg mb-2">
                    Get Practical Insights
                  </h4>
                  <p className="text-xs leading-normal">
                    In the second 30-minute call, we’ll share practical,
                    easy-to-understand ideas that can help you save time and
                    work smarter.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  y: -30,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="bg-black flex items-center gap-5 rounded-xl text-start p-5"
              >
                <Image
                  src="./icons/calendar.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <div>
                  <h4 className="font-bold text-lg mb-2">
                    Your Innovation Roadmap
                  </h4>
                  <p className="text-xs leading-normal">
                    Within 48 hours, you’ll get a personalized roadmap with
                    clear next steps tailored to your business.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default HowItWorks;
