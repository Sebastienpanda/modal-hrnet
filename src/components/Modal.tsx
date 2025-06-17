import React, { useEffect, useState } from "react";
import "./modal.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;

    escapeClose?: boolean;
    clickClose?: boolean;
    showClose?: boolean;

    fadeDuration?: number; // ms
    fadeDelay?: number;    // 0–2

    closeClass?: string;
    closeText?: string;
}

export const Modal: React.FC<ModalProps> = ({
                                                isOpen,
                                                onClose,
                                                children,
                                                escapeClose = true,
                                                clickClose = true,
                                                showClose = true,
                                                fadeDuration = 300,
                                                fadeDelay = 1,
                                                closeClass = "",
                                                closeText = "×"
                                            }) => {
    const [visible, setVisible] = useState(false);
    const [animatedOpen, setAnimatedOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
        }
    }, [isOpen]);

    useEffect(() => {
        let frame: number;

        if (isOpen) {
            frame = requestAnimationFrame(() => {
                setAnimatedOpen(true);
            });
        } else {
            setAnimatedOpen(false);
        }

        return () => {
            cancelAnimationFrame(frame);
        };
    }, [isOpen]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape" && escapeClose) onClose();
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [escapeClose, onClose]);

    const handleClickOverlay = () => {
        if (clickClose) onClose();
    };

    const handleAnimationEnd = () => {
        if (!isOpen) {
            setVisible(false);
        }
    };

    if (!visible) return null;

    const overlayStyle = {
        transitionDuration: `${fadeDuration}ms`
    };

    const contentStyle = {
        animationDuration: `${fadeDuration}ms`,
        animationDelay: `${fadeDuration * fadeDelay}ms`
    };

    return (
        <div
            className={`modal-overlay ${animatedOpen ? "modal-ready" : ""}`}
            style={overlayStyle}
            onClick={handleClickOverlay}
            onAnimationEnd={handleAnimationEnd}
            onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && clickClose) onClose();
            }}
            tabIndex={-1}
            aria-hidden="true"
        >
            <div
                className="modal-content"
                style={contentStyle}
                onClick={(e) => e.stopPropagation()}
                aria-modal="true"
                aria-labelledby="modal-title"
                tabIndex={-1}
            >
                {showClose && (
                    <button
                        className={`modal-close ${closeClass}`}
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        {closeText}
                    </button>
                )}
                {children}
            </div>
        </div>
    );
};
