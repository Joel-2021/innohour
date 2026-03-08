"use client";

import { Button } from "./ui/button";
import { ChatBubbleProps, SenderType } from "@/models/chat-bubble.model";
import { Container } from "./ui/container";
import { Input } from "./ui/input";
import { motion } from "motion/react";
import {
  getChatHistory,
  getChatResponse,
  setChatHistory,
} from "@/services/chatService";
import { useEffect, useRef, useState } from "react";
import ChatBubble from "./chat-bubble";

const AiWidget = () => {
  const [responses, setResponses] = useState<ChatBubbleProps[]>([
    {
      sender: SenderType.AI,
      message: "Hi! How may i help you",
    },
  ]);

  const [prompt, setPrompt] = useState<ChatBubbleProps>({
    sender: SenderType.User,
    message: "",
  });

  useEffect(() => {
    const history = getChatHistory();

    if (history) setResponses(history);
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);

  /**
   * Updates the response state and resets the input field
   * @returns {void}
   */
  const handleSubmit = () => {
    setResponses((prev) => [...prev, prompt]);
    const response = getChatResponse(prompt.message);
    setPrompt((prev) => ({ ...prev, message: "" }));

    setResponses((prev) => [...prev, response]);
  };

  /**
   * Saves the chat response
   * @param {number} index index of the chat response
   * @returns {void}
   */
  const saveResponse = (index: number): void => {
    setResponses((prev) =>
      prev.map((res, i) =>
        i === index ? { ...res, isSaved: !res.isSaved } : res,
      ),
    );
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  useEffect(() => {
    //Scrolls to the bottom of the chat widget
    scrollRef?.current?.scrollTo({
      top: scrollRef?.current.scrollHeight,
      behavior: "smooth",
    });
    setChatHistory(responses);
  }, [responses]);

  return (
    <Container className="text-center my-30 ai-widget">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        viewport={{ once: true }}
        className="md:text-5xl text-4xl leading-normal text-transparent bg-clip-text font-bold bg-linear-to-r from-[#00E5FC] to-primary"
      >
        Ask me anything about{" "}
        <span className="bg-linear-to-r from-[#CACACA] to-[#878787] bg-clip-text">
          InnoHour!
        </span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.3, duration: 0.4 }}
        viewport={{ once: true }}
        className="mx-5 rounded-xl bg-[#222627] mt-5 h-150 p-6 flex flex-col"
      >
        <motion.div
          id="scroll-container"
          ref={scrollRef}
          layout
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 flex flex-col min-h-0 no-scrollbar overflow-y-scroll"
        >
          {responses.map((response, index) => (
            <ChatBubble
              key={index}
              saveMessage={saveResponse}
              index={index}
              isSaved={response.isSaved}
              message={response.message}
              sender={response.sender}
            />
          ))}
        </motion.div>
        <div className="flex gap-2 items-center mt-3">
          <Input
            required
            className="bg-[#191919] dark:bg-[#191919] h-10"
            placeholder="Ask anything!"
            type="text"
            value={prompt.message}
            onKeyDown={(e) => {
              if (e.key === "Enter" && prompt.message.trim() !== "") {
                handleSubmit();
              }
            }}
            onChange={(e) =>
              setPrompt((prev) => ({ ...prev, message: e.target.value }))
            }
          />
          <Button
            className="h-10"
            disabled={prompt.message?.trim() === ""}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </motion.div>
    </Container>
  );
};

export default AiWidget;
