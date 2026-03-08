"use client";

import { Container } from "./ui/container";
import Image from "next/image";
import Lottie from "lottie-react";
import clock from "../public/lottie/clock.json";
import { motion } from "motion/react";

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
          className="md:text-5xl text-4xl leading-normal text-transparent bg-clip-text font-bold bg-linear-to-r from-[#00E5FC] to-primary md:after:w-1/3 after:w-1/2 after:bottom-0 after:block after:bg-[#4a4a4a]/48 after:mx-auto after:h-1"
        >
          How{" "}
          <span className="bg-linear-to-r from-[#CACACA] to-[#878787] bg-clip-text">
            InnoHours
          </span>{" "}
          Works
        </motion.h2>

        <div className="relative md:block hidden">
          <div
            className="mask-[radial-gradient(560px_400px_at_right_center,transparent_95%,black_0%)]
  [-webkit-mask-image:radial-gradient(560px_400px_at_right_center,transparent_95%,black_0%)] relative"
          >
            <div className="flex flex-col gap-5 mt-12">
              <div className="relative flex flex-col gap-5 ps-12">
                <motion.h5
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
                  className="absolute -left-18.75 top-1/2 -translate-y-1/2 text-6xl font-extrabold text-white/7 rotate-270"
                >
                  Call 01
                </motion.h5>
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
                    width={50}
                    height={50}
                  />
                  <div className="w-[40%]">
                    <h5 className="font-bold text-lg mb-2">Book Your Spot</h5>
                    <p className="text-xs">
                      Pick a time that fits your schedule. Booking takes less
                      than a minute.
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
                    width={50}
                    height={50}
                  />
                  <div className="w-[40%]">
                    <h5 className="font-bold text-lg mb-2">
                      Tell Us Your Story
                    </h5>
                    <p className="text-xs">
                      In the first 30-minute call, we’ll listen to your goals,
                      challenges, and how your business operates.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="relative flex flex-col gap-5 ps-12">
                <motion.h5
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
                  className="absolute -left-18.75 top-1/2 -translate-y-1/2 text-6xl font-extrabold text-white/7 rotate-270"
                >
                  Call 02
                </motion.h5>

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
                    width={50}
                    height={50}
                  />
                  <div className="w-[40%]">
                    <h5 className="font-bold text-lg mb-2">
                      Get Practical Insights
                    </h5>
                    <p className="text-xs">
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
                    width={50}
                    height={50}
                  />
                  <div className="w-[40%]">
                    <h5 className="font-bold text-lg mb-2">
                      Your Innovation Roadmap
                    </h5>
                    <p className="text-xs">
                      Within 48 hours, you’ll get a personalized roadmap with
                      clear next steps tailored to your business.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-[-10%] rounded-full">
            <motion.div
              initial={{
                y: -30,
                scale: 0.85,
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                type: "spring",
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="size-150"
            >
              <Lottie animationData={clock} loop={true} />
            </motion.div>
          </div>
        </div>

        <div className="md:hidden block">
          <div className="flex flex-col gap-5 mt-5">
            <div className="relative flex flex-col gap-5 ps-5">
              <motion.h5
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
              </motion.h5>
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
                  width={50}
                  height={50}
                />
                <div>
                  <h5 className="font-bold text-lg mb-2">Book Your Spot</h5>
                  <p className="text-xs">
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
                  width={50}
                  height={50}
                />
                <div>
                  <h5 className="font-bold text-lg mb-2">Tell Us Your Story</h5>
                  <p className="text-xs">
                    In the first 30-minute call, we’ll listen to your goals,
                    challenges, and how your business operates.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="relative flex flex-col gap-5 ps-5">
              <motion.h5
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
              </motion.h5>

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
                  width={50}
                  height={50}
                />
                <div>
                  <h5 className="font-bold text-lg mb-2">
                    Get Practical Insights
                  </h5>
                  <p className="text-xs">
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
                  width={50}
                  height={50}
                />
                <div>
                  <h5 className="font-bold text-lg mb-2">
                    Your Innovation Roadmap
                  </h5>
                  <p className="text-xs">
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
