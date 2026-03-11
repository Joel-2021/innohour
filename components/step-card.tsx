import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import Image from 'next/image';

export function StepCard({ icon, title, text, delay,className, width }: { icon: string; title: string; text: string; delay: number; className?: string; width: string }) {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      transition={{ duration: 0.4, delay }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("bg-[#1B1C1E] flex items-center md:gap-6 gap-3 rounded-xl text-start md:p-8 p-5", className)}
    >
      <Image src={icon} alt="icon" width={40} height={40} />

      <div className={width}>
        <h4 className="font-bold md:text-lg mb-2 text-base">{title}</h4>
        <p className="text-xs leading-normal tracking-wide">{text}</p>
      </div>
    </motion.div>
  );
}
