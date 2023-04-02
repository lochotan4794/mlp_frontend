import React, { useState, useEffect } from "react";
import Modal from './Modal'

type Video = {
    link?: string
}

const VideoModal = ({ link }: Video) => {

    const [showModal, setShowModal] = useState(false);

    function toggle(index: any) {
        setShowModal(!showModal);
    }

    return (
        <div style={{flexDirection:"row", display: "flex", width: "fit-content", margin: "0", minWidth: "10%", alignItems: "end", alignContent: "end", justifyContent: "end", padding:0 }}>
            <div>
                    <button
                        style={{
                            border: "none",
                            fontWeight: "bold",
                            color: "blue",
                            backgroundColor: "transparent",
                            paddingRight: "2px",
                        }}
                        onClick={() => toggle("Login")}
                    >
                        Video
                    </button>
                
            </div>
            <Modal
                title={'modal1'}
                onClose={() => setShowModal(false)}
                show={showModal}
            >
                <>
                    {link != '' &&
                        <iframe style={{ width: "100%", opacity: "100%", backgroundColor: "white" }} src={link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" ></iframe>}
                    {link === '' && <h3 style={{ width: "100%", opacity: "100%", backgroundColor: "white", textAlign: "center" }}>No video available</h3>}
                </>
            </Modal>
        </div>
    )
}

export default VideoModal;
