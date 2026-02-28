'use client';

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

export function MotionDiv({ children, ...props }: HTMLMotionProps<"div">) {
  return <motion.div {...props}>{children}</motion.div>;
}
