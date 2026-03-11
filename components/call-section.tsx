import { motion } from 'motion/react';
import React from 'react'

export function CallSection({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="relative flex flex-col gap-5 md:mx-19 mx-5">
            <motion.h3
                initial={{ filter: "blur(10px)", opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileInView={{ filter: "blur(0px)", opacity: 1 }}
                viewport={{ once: true }}
                className="absolute md:-left-6.25 top-1/2 -translate-y-1/2 md:text-6xl font-extrabold text-white/7 rotate-270 -left-3.75 -translate-x-1/2 text-3xl "
            >
                {label}
            </motion.h3>

            {children}
        </div>
    );
}
