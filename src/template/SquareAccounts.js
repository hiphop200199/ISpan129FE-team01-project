import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../layouts/CartContext'
import { ModalContext } from '../layouts/ModalContext'

function SquareAccounts() {
  // const { setShow } = useContext(CartContext)

  const navigate = useNavigate()
  const { isModalOpen, closeModal } = useContext(ModalContext);
  const handleCheckoutClick = () => {
    closeModal();
    setTimeout(() => {
      console.log(isModalOpen)
      navigate('/CheckoutFlow');
    }, 0);
  }

  return (
    <button
      type="button"
      className="btn btn-primary btn-lg col-6 p-0 hover_style"
      onClick={handleCheckoutClick}
    >
      結帳

    </button>
  )
}

export default SquareAccounts
