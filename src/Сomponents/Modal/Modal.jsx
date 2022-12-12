import React from 'react';
import { createPortal } from "react-dom";

import "../../Assets/Styles/Modal/modal.css";

export const Modal = ({ state, children, styles, closeModal }) => {
    if (!state) return null;

    return createPortal(
        <div className="modalOverlay" onClick={closeModal}>
            <div className="modalContainer" style={styles} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.querySelector("body")
    )
}
