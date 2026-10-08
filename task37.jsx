import React from "react";
import { useState } from "react";

function Popup({ isVisible, onClose, title, children }) {
    if (!isVisible) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <h1>{title}</h1>

                {children}

                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

function Dashboard() {
    const [popupStatus, setPopupStatus] = useState(false);

    return (
        <div>
            <h1>Dashboard Page</h1>

            <button onClick={() => setPopupStatus(true)}>
                Open Dashboard Popup
            </button>

            <Popup
                isVisible={popupStatus}
                onClose={() => setPopupStatus(false)}
                title="Dashboard Popup"
            >
                <p>Welcome to the Dashboard Page!</p>
            </Popup>
        </div>
    );
}

function Information() {
    const [popupStatus, setPopupStatus] = useState(false);

    return (
        <div>
            <h1>Information Page</h1>

            <button onClick={() => setPopupStatus(true)}>
                Open Information Popup
            </button>

            <Popup
                isVisible={popupStatus}
                onClose={() => setPopupStatus(false)}
                title="Information Popup"
            >
                <p>This popup is being reused on the Information Page!</p>
            </Popup>
        </div>
    );
}

export { Popup, Dashboard, Information };
