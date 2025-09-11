"use client"

import { ReactNode } from 'react'
import styles from './Button.module.css'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  href?: string
  target?: string
  rel?: string
}

export default function Button({ 
  children, 
  className = '',
  onClick,
  type = 'button',
  href,
  target,
  rel
}: ButtonProps) {
  const classes = `${styles.button} ${className}`
  
  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (href && href.startsWith('#')) {
      event.preventDefault()
      const targetId = href.slice(1)
      const targetEl = document.getElementById(targetId)
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    onClick?.()
  }
  
  if (href) {
    return (
      <motion.a
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.985 }}
        href={href}
        target={target}
        rel={target === '_blank' ? (rel ?? 'noopener noreferrer') : undefined}
        className={classes}
        onClick={handleAnchorClick}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.985 }}
      type={type}
      className={classes}
      onClick={onClick}
      transition={{ type: 'spring', stiffness: 320, damping: 26 }}
    >
      {children}
    </motion.button>
  )
}
