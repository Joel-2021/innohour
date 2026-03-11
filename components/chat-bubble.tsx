"use client"
import { cn } from '@/lib/utils'
import { ChatBubbleProps, SenderType } from '@/models/chat-bubble.model'
import { Star } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from './ui/button'

const bubble = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 }
}

const ChatBubble = ({ sender, message, index, isSaved, saveMessage, animationComplete }: ChatBubbleProps) => {

    const isUser = sender === SenderType.User;

    return (
        <motion.div
            variants={bubble} transition={{ duration: 0.25 }} className={cn('flex gap-4 items-start mb-3', isUser ? 'flex-row-reverse' : '')}>
            <div className={cn("rounded-full shrink-0 size-10", isUser ? 'bg-linear-to-b from-[#06b6d4] via-[#2563eb] to-[#6366f1]' : ' bg-linear-to-r from-[#fda4af]  to-[#f43f5e]')}></div>
            <div className={cn('group flex gap-1 items-start', isUser ? 'flex-row-reverse' : '')}>
                <div className={cn('relative rounded-xl p-0.5', isSaved && 'animated-border')}>
                    <div className='bg-[#191919] h-full w-full py-2 px-3 md:text-lg text-base rounded-lg max-w-sm text-start z-10'>
                        {message.split(' ').map((word, i, arr) => (
                            <motion.span
                                onAnimationComplete={() => {
                                    if (i === arr.length - 1) {
                                        animationComplete?.(true);
                                    }else {
                                        animationComplete?.(false);
                                    }
                                }}
                                key={i}
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{
                                    delay: i * 0.2,
                                    duration: 0.2
                                }}
                            >
                                {word}{" "}
                            </motion.span>
                        ))}
                    </div>
                </div>
                <Button aria-label='save' variant={'ghost'} className='cursor-pointer' onClick={(e) => saveMessage && saveMessage(index)}>
                    <Star fill={isSaved ? '#fff' : 'transparent'} className='hidden group-hover:block' size={15} />
                </Button>
            </div>
        </motion.div>
    )
}

export default ChatBubble