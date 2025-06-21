import React, { useEffect, useState } from 'react';

/**
 * Notification component displays a temporary message to the user.
 * It supports different types (success, error, info) for varying background colors.
 * The notification auto-hides after a few seconds or can be manually dismissed.
 * @param {object} props - The component's properties.
 * @param {string} props.message - The message content to display.
 * @param {'success' | 'error' | 'info'} props.type - The type of notification (influences background color).
 * @param {function} props.onClose - Callback function to execute when the notification is closed.
 */
const Notification = ({ message, type, onClose }) => {
    // Local state to control visibility, allowing for fade-out animations if needed
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // When a new message arrives, make the notification visible
        if (message) {
            setIsVisible(true);
            // Set a timer to automatically close the notification after 5 seconds
            const timer = setTimeout(() => {
                setIsVisible(false); // Start fade out
                // After fade out, truly remove from DOM
                const hideTimer = setTimeout(() => onClose(), 300); // 300ms for potential fade out transition
                return () => clearTimeout(hideTimer);
            }, 5000); // Notification visible for 5 seconds

            // Clear the timer if the component unmounts or message changes before timeout
            return () => clearTimeout(timer);
        } else {
            setIsVisible(false); // If message is empty, ensure it's hidden
        }
    }, [message, onClose]); // Re-run effect when message or onClose changes

    // If no message, don't render anything
    if (!message && !isVisible) return null;

    // Determine background color based on notification type
    const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';

    return (
        <div className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-xl flex items-center justify-between z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <span>{message}</span>
            <button onClick={() => { setIsVisible(false); setTimeout(() => onClose(), 300); }} className="ml-4 text-white font-bold text-lg leading-none">&times;</button>
        </div>
    );
};

export default Notification;
