import React, { useState, useEffect, useContext, createContext } from 'react'
import { Link, useNavigate, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXmark,
  faCartShopping,
  faAnglesLeft,
} from '@fortawesome/free-solid-svg-icons'
import Ball from '../img/layout/毬.svg' //圖片
import Menu from './Menu'
import AbilityTrain from './AbilityTrain'
import { Cart } from '../template'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import CartContextProvider, { CartContext } from './CartContext'
import ModalContextProvider, { ModalContext } from './ModalContext'

function MainLayouts() {
  const { isModalOpen, toggleModal, closeModal } = useContext(ModalContext);
  useEffect(() => {
    if (!isModalOpen) {
      // 在狀態值被更新後關閉Modal
      closeModal()
    }
  }, [isModalOpen, closeModal])
  return (
    <CartContextProvider>
      <ModalContextProvider>
        <div className="wrap">
          <nav className="nav">
            <Link to="/">
              <img src={Ball} alt="" />
            </Link>
            <Menu />
            <AbilityTrain />
            <Button variant="primary" onClick={toggleModal}>
              <FontAwesomeIcon icon={faCartShopping} />
            </Button>
          </nav>

          <main className="content-border">
            <div className="content">
              <Outlet />

              <Modal
                show={isModalOpen}
                onHide={toggleModal}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header>
                  <Modal.Title>購物車</Modal.Title>
                  <Button variant="secondary" onClick={toggleModal}>
                    <FontAwesomeIcon icon={faXmark} />
                  </Button>
                </Modal.Header>
                <Cart show={isModalOpen} />
              </Modal>
            </div>
          </main>
        </div>
      </ModalContextProvider>
    </CartContextProvider>
  )
}

export default MainLayouts
