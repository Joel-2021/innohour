import { motion } from 'motion/react';
import React from 'react'

const TextGenerate = ({ animate, message, animationComplete }: { animate?: boolean, message: string, animationComplete?: (isComplete: boolean) => void }) => {
    return (
        animate ? message.split(' ').map((word, i, arr) => (
            <motion.span
                onAnimationComplete={() => {
                    if (i === arr.length - 1) {
                        animationComplete?.(true);
                    } else {
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
        )) : message
    )
}

export default TextGenerate