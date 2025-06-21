import React from 'react';

/**
 * PageLayout component provides a consistent structure and styling for different content pages.
 * It includes a main title for the page and renders its children within a styled container.
 * @param {object} props - The component's properties.
 * @param {string} props.title - The main title of the page.
 * @param {React.ReactNode} props.children - The content to be rendered inside the page layout.
 */
const PageLayout = ({ title, children }) => (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h1 className="text-red-600 text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        {children}
    </div>
);

export default PageLayout;
