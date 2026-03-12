"use client"

import { motion } from 'motion/react'

const Loader = ({ text }: { text: string }) => {



    return (
        <motion.span className="text-transparent bg-clip-text bg-linear-to-r from-[#878787] via-[#CACACA] to-[#878787] bg-size-[150%]"
            initial={{ backgroundPositionX: "200%" }}
            animate={{ backgroundPositionX: "0%" }}
            transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}>
            {text}
        </motion.span>
    )
}

export default Loader