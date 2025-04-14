import { JSX, useEffect, useRef, useState } from 'react'

import { mobileBreakpoint } from '../../utils'

import { Line } from '../../styles'
import { ModalContainer, ModalCard, Overlay } from './styles'

type Props = {
  isOpen: boolean
  onClose: () => void
  title: string
  children: JSX.Element
}

const Modal = ({ isOpen, onClose, title, children }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragY, setDragY] = useState(0)
  const startY = useRef<number>(0)
  const [position, setPosition] = useState<'closed' | 'half' | 'full'>('half')

  const halfOpen = contentHeight > 100 ? 150 : 0
  const fullOpen = 0
  const close = 1000

  const getClientY = (e: React.TouchEvent | React.MouseEvent) =>
    'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY

  const getTranslateY = () => {
    if (!mobileBreakpoint()) return 0
    switch (position) {
      case 'full':
        return fullOpen
      case 'half':
        return halfOpen
      case 'closed':
        return close
    }
  }

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true)
    startY.current = getClientY(e)
  }

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return
    const currentY = getClientY(e)
    const baseY = getTranslateY()

    let offset = currentY - startY.current

    const totalOffset = baseY + offset

    const maxUp = fullOpen

    if (totalOffset < maxUp) {
      offset = maxUp - baseY
    }

    setDragY(offset)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)

    const closeThreshold = 50
    if (dragY < -closeThreshold) {
      setPosition('full')
    } else if (dragY > closeThreshold) {
      if (position === 'half') {
        onClose()
        setPosition('closed')
      } else {
        if (dragY > halfOpen + closeThreshold) {
          onClose()
          setPosition('closed')
        } else setPosition('half')
      }
    }

    setDragY(0)
  }

  useEffect(() => {
    if (mobileBreakpoint()) {
      if (!isOpen) setPosition('closed')
      if (isOpen) {
        setPosition('half')
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    let resizeObserver: ResizeObserver | null = null
    if (contentRef.current) {
      resizeObserver = new ResizeObserver(() => {
        const height = contentRef.current!.getBoundingClientRect().height
        setContentHeight(height)
      })

      resizeObserver.observe(contentRef.current)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      if (resizeObserver) resizeObserver.disconnect()
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <ModalContainer>
      <ModalCard
        style={{
          transform: `translateY(${getTranslateY() + dragY}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease'
        }}
      >
        <div className="header pi-8">
          <h3 className="title--small">{title}</h3>
          <button className="close" aria-label="Close" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <Line />
        {mobileBreakpoint() && (
          <div
            className="drag-icon"
            onMouseDown={handleTouchStart}
            onMouseMove={handleTouchMove}
            onMouseUp={handleTouchEnd}
            onMouseLeave={handleTouchEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <span></span>
          </div>
        )}
        <div ref={contentRef} className="pi-8">
          {children}
        </div>
      </ModalCard>
      <Overlay data-testid="overlay" onClick={onClose} />
    </ModalContainer>
  )
}

export default Modal
