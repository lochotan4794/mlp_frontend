import React, { useState } from "react";
import Modal from './Modal'

export default function UseModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Login|Signup</button>
            <Modal
                title={'modal1'}
                onClose={() => setShowModal(false)}
                show={showModal}
            >
                Login|Signup
            </Modal>
        </div>
    )
}