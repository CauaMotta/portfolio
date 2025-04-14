import { render, screen } from '../../../test/setup'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

import Modal from '.'

describe('Modal', () => {
  const mockOnClose = vi.fn()

  const renderModal = (isOpen = true) => {
    render(
      <Modal isOpen={isOpen} onClose={mockOnClose} title="Modal Title">
        <div data-testid="modal-content">Modal content</div>
      </Modal>
    )
  }

  beforeAll(() => {
    global.ResizeObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
  })

  beforeEach(() => {
    mockOnClose.mockReset()
  })

  test('Shoud not render the modal when isOpen is false', () => {
    renderModal(false)
    expect(screen.queryByText('Modal Title')).not.toBeInTheDocument()
  })

  test('Should render the modal when isOpen is true', () => {
    renderModal()

    expect(screen.getByText('Modal Title')).toBeInTheDocument()
    expect(screen.getByTestId('modal-content')).toBeInTheDocument()
  })

  test('Should call onClose when the close button is clicked', async () => {
    renderModal()

    const closeButton = screen.getByRole('button')
    await userEvent.click(closeButton)

    expect(mockOnClose).toHaveBeenCalled()
  })

  test('Should call onClose when the close overlay is clicked', async () => {
    renderModal()

    const overlay = screen.getByTestId('overlay')
    await userEvent.click(overlay)

    expect(mockOnClose).toHaveBeenCalled()
  })
})
