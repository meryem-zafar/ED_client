import React, { useEffect, useRef, useState } from 'react'

export function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.12 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`motion-reveal motion-reveal-${direction} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--motion-delay': `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function CountUp({ end, suffix = '', duration = 1300 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    let frameId
    const startedAt = performance.now()
    const animate = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(end * eased))
      if (progress < 1) frameId = requestAnimationFrame(animate)
    }
    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [duration, end])

  return <span ref={ref}>{value.toLocaleString()}{suffix}</span>
}
