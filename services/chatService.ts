import { ChatBubbleProps, SenderType } from "@/models/chat-bubble.model";

type MockResponse = {
  keywords: string[];
  responses: string[];
};

const mockResponses: MockResponse[] = [
  {
    keywords: ["hello", "hi", "hey"],
    responses: [
      "Hello! How can I help you today?",
      "Hey there ! What can I do for you?",
      "Hi! Feel free to ask me anything.",
    ],
  },
  {
    keywords: ["price", "pricing", "cost"],
    responses: [
      "Our pricing starts at $10/month.",
      "We offer flexible pricing plans depending on your needs.",
      "You can check our pricing page for detailed plans.",
    ],
  },
  {
    keywords: ["feature", "features", "what can you do"],
    responses: [
      "We provide analytics, automation, and AI-powered insights.",
      "Some of our key features include real-time analytics and integrations.",
      "Our platform helps teams automate workflows and analyze data.",
    ],
  },
  {
    keywords: ["support", "help"],
    responses: [
      "Our support team is available 24/7.",
      "You can reach our support team via chat or email.",
      "I'm here to help! What do you need assistance with?",
    ],
  },
  {
    keywords: ["thanks", "thank you"],
    responses: [
      "You're welcome",
      "Happy to help!",
      "Anytime! Let me know if you need anything else.",
    ],
  },
];

/**
 * This function takes a prompt and returns a response from the mockResponses array.
 * @param {string} input : Input prompted by the user
 * @returns {ChatBubbleProps}
 */
export const getChatResponse = (input: string): ChatBubbleProps => {
  const text = input.trim().toLowerCase();

  const match = mockResponses.find((item) =>
    item.keywords.some((keyword) => text.includes(keyword)),
  );

  if (match) {
    const randomIndex = Math.floor(Math.random() * match.responses.length);
    return {
      message: match.responses[randomIndex],
      sender: SenderType.AI,
    };
  }

  return {
    message: "I'm not sure about that yet, but I'm learning!",
    sender: SenderType.AI,
  };
};


/**
 * This function gets the save chat history from the local storage.
 * @returns {ChatBubbleProps[] | null}
 */
export const getChatHistory = (): ChatBubbleProps[] | null => {
  try {
    const savedHistory = localStorage.getItem("chat-history");

    if (!savedHistory) return null;

    const parsedHistory: ChatBubbleProps[] = JSON.parse(savedHistory);

    return parsedHistory;
  } catch (err) {
    console.error("Failed to parse chat history:", err);
    return null;
  }
};

/**
 * This function saves the chat history in the local storage.
 * @param {ChatBubbleProps[]} chatResponses
 * @returns {void}
 */
export const setChatHistory = (chatResponses: ChatBubbleProps[]): void => {

    const stringifyResponses = JSON.stringify(chatResponses);
    localStorage.setItem('chat-history', stringifyResponses);
}