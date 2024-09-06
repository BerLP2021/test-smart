import React, { forwardRef } from 'react'
import './Modal.scss';

type Props = { children: React.ReactNode }

export const Modal = forwardRef<HTMLDialogElement, Props>(function Modal({ children }, ref) {
    return (
        <dialog ref={ref} className='modal__wrapper'>
            <div className="inner">
                {children}
            </div>
        </dialog>
    )
})

