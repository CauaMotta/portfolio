import { JSX } from 'react'

import { Line } from '../../styles'
import { ModalContainer, ModalCard, Overlay } from './styles'

type Props = {
  isOpen: boolean
  onClose: () => void
  title: string
  children: JSX.Element
}

const Modal = ({ isOpen, onClose, title, children }: Props) => {
  if (!isOpen) return null

  return (
    <ModalContainer>
      <ModalCard>
        <div className="header pi-8">
          <h3 className="title--small">{title}</h3>
          <button className="close" aria-label="Close" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <Line />
        <div className="pi-8">{children}</div>
      </ModalCard>
      <Overlay onClick={onClose} />
    </ModalContainer>
  )
}

export default Modal
