"use client";

import { Button } from "../ui/button";
import { ChatBubbleProps, SenderType } from "@/models/chat-bubble.model";
import { Container } from "../ui/container";
import { Input } from "../ui/input";
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
      animate: true,
    },
  ]);

  const [inputEnabled, setInputEnabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState<ChatBubbleProps>({
    sender: SenderType.User,
    message: "",
    animate: true,
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const history = getChatHistory();

    if (history) setResponses(history.map((msg) => ({
      ...msg,
      animate: false
    })));
  }, []);


  useEffect(() => {
    //Scrolls to the bottom of the chat widget
    scrollRef?.current?.scrollTo({
      top: scrollRef?.current.scrollHeight,
      behavior: "smooth",
    });
    setChatHistory(responses);

  }, [responses]);


  /**
   * Updates the response state and resets the input field
   * @returns {void}
   */
  const handleSubmit = async (): Promise<void> => {

    setResponses((prev) => [...prev, prompt]);
    setPrompt((prev) => ({ ...prev, message: "" }));

    // const loadingBubble: ChatBubbleProps = {
    //   sender: SenderType.AI,
    //   message: "",
    //   loading: true
    // };

    setLoading(true);
    // setResponses((prev) => [...prev, loadingBubble]);

    const response = await getChatResponse(prompt.message);

    setLoading(false);
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

  return (
    <Container className="text-center my-30" id="ai-widget">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        viewport={{ once: true }}
        className="md:text-5xl text-4xl leading-normal tracking-normal text-transparent bg-clip-text font-bold bg-linear-to-r from-[#00E5FC] to-primary"
      >Ask me anything about{" "}
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
          className="flex-1 flex flex-col min-h-0 no-scrollbar overflow-y-scroll"
        >
          {responses.map((response, index) => (
            <ChatBubble
              key={index}
              saveMessage={saveResponse}
              index={index}
              animationComplete={(status: boolean) => setInputEnabled(status)}
              {...response}
            />
          ))}

          {
            loading && <ChatBubble
              loading={loading}
              sender={SenderType.AI}
              message=""
            />
          }

        </motion.div>
        <div className="flex gap-2 items-center mt-3">
          <Input
            disabled={!inputEnabled}
            required
            className="bg-[#191919] dark:bg-[#191919] h-10"
            placeholder={inputEnabled ? "Ask anything!" : "Ai is typing..."}
            type="text"
            ref={inputRef}
            value={prompt.message}
            onKeyDown={(e) => {
              if (e.key === "Enter" && prompt.message.trim() !== "") {
                inputRef.current?.blur();
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
