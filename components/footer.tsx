"use client"
import { motion } from 'motion/react';

const Footer = () => {
    return (
        <footer className='text-center bg-[#0E0E0E] py-10'>
            <motion.h2 initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='text-5xl font-bold mb-2'>Inno<span className='text-primary'>Hour</span></motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className='text-lg'>Crafted for testing you</motion.p>
        </footer>
    )
}

export default Footer