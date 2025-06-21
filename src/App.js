import React, { useState } from 'react';

// Import components - Corrected paths with .js extension
import Notification from './components/Notification.js';
import HomePage from './pages/HomePage.js';
import WatchPage from './pages/WatchPage.js';
import DiscoverPage from './pages/DiscoverPage.js';
import AttendPage from './pages/AttendPage.js';
import ParticipatePage from './pages/ParticipatePage.js';
import AboutPage from './pages/AboutPage.js';
import SignInPage from './pages/SignInPage.js';
import MembershipPage from './pages/MembershipPage.js';
import SearchPage from './pages/SearchPage.js';
import BeforeYouStartPage from './pages/BeforeYouStartPage.js';
import ApplyForLicensePage from './pages/ApplyForLicensePage.js';
import OrganizerGuidePage from './pages/OrganizerGuidePage.js';
import ResourcesPage from './pages/ResourcesPage.js';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.js';
import TermsOfUsePage from './pages/TermsOfUsePage.js';
import ContactPage from './pages/ContactPage.js';

// Main App component
const App = () => {
    // State to manage the current active page, initialized to 'home'
    const [currentPage, setCurrentPage] = useState('home');
    // State to manage notification messages (message and type: success, error, info)
    const [notification, setNotification] = useState({ message: '', type: '' });

    /**
     * Navigates to a specified page and scrolls the window to the top.
     * @param {string} page - The identifier of the page to navigate to.
     */
    const navigate = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0); // Scroll to top on page change for better UX
    };

    /**
     * Handles the search functionality. Displays a notification and navigates to the search results page.
     */
    const handleSearch = () => {
        setNotification({ message: "Displaying placeholder search results.", type: 'info' });
        navigate('search');
    };

    /**
     * Handles the membership button click. Navigates to the membership page.
     */
    const handleMembership = () => {
        navigate('membership');
    };

    /**
     * Closes the currently displayed notification.
     */
    const closeNotification = () => {
        setNotification({ message: '', type: '' });
    };

    /**
     * Renders the appropriate page component based on the `currentPage` state.
     * Passes `navigate` and `setNotification` props to child components as needed.
     */
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage navigate={navigate} />;
            case 'watch':
                return <WatchPage />;
            case 'discover':
                return <DiscoverPage />;
            case 'attend':
                return <AttendPage />;
            case 'participate':
                return <ParticipatePage />;
            case 'about':
                return <AboutPage />;
            case 'sign-in':
                return <SignInPage setNotification={setNotification} />;
            case 'membership':
                return <MembershipPage setNotification={setNotification} />;
            case 'search':
                return <SearchPage />;
            case 'before-you-start':
                return <BeforeYouStartPage />;
            case 'apply-for-license':
                return <ApplyForLicensePage setNotification={setNotification} />;
            case 'organizer-guide':
                return <OrganizerGuidePage />;
            case 'resources':
                return <ResourcesPage />;
            case 'privacy-policy':
                return <PrivacyPolicyPage />;
            case 'terms-of-use':
                return <TermsOfUsePage />;
            case 'contact':
                return <ContactPage setNotification={setNotification} />;
            default:
                return <HomePage navigate={navigate} />; // Fallback to home page
        }
    };

    return (
        <div className="font-sans bg-gray-100 min-h-screen flex flex-col items-center">
            {/* Notification component, visible when `notification.message` is not empty */}
            <Notification message={notification.message} type={notification.type} onClose={closeNotification} />

            {/* Header Section */}
            <header className="w-full bg-white shadow-sm py-4 px-6 flex flex-col sm:flex-row justify-between items-center rounded-b-lg z-10">
                {/* Logo - Navigates to home page on click */}
                <div className="flex items-center space-x-4 mb-4 sm:mb-0 cursor-pointer" onClick={() => navigate('home')}>
                    <div className="text-red-600 font-bold text-lg md:text-xl flex items-center">
                        <span className="mr-1">TED</span> Ideas change everything
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-grow flex justify-center sm:justify-end">
                    <ul className="flex flex-wrap justify-center space-x-4 text-sm font-semibold text-gray-700">
                        <li><button onClick={() => navigate('watch')} className="hover:text-red-600 transition-colors p-2 rounded-md">WATCH</button></li>
                        <li><button onClick={() => navigate('discover')} className="hover:text-red-600 transition-colors p-2 rounded-md">DISCOVER</button></li>
                        <li><button onClick={() => navigate('attend')} className="hover:text-red-600 transition-colors p-2 rounded-md">ATTEND</button></li>
                        <li><button onClick={() => navigate('participate')} className="hover:text-red-600 transition-colors p-2 rounded-md">PARTICIPATE</button></li>
                        <li><button onClick={() => navigate('about')} className="hover:text-red-600 transition-colors p-2 rounded-md">ABOUT</button></li>
                        <li><button onClick={() => navigate('sign-in')} className="hover:text-red-600 transition-colors p-2 rounded-md">SIGN IN</button></li>
                    </ul>
                </nav>

                {/* Membership Button and Search Icon */}
                <div className="flex items-center space-x-4 mt-4 sm:mt-0 ml-0 sm:ml-4">
                    <button
                        onClick={handleMembership}
                        className="bg-red-600 text-white px-5 py-2 rounded-full font-bold hover:bg-red-700 transition-colors shadow-md"
                    >
                        MEMBERSHIP
                    </button>
                    <button onClick={handleSearch} className="text-gray-600 hover:text-red-600 transition-colors text-xl p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-300">
                        {/* Simple search icon (magnifying glass) for visual clarity */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                </div>
            </header>

            {/* Main content area where different pages are rendered */}
            <main className="w-full max-w-6xl mt-8 px-4">
                {renderPage()}
            </main>

            {/* Footer Section */}
            <footer className="w-full bg-gray-800 text-white py-6 mt-8 rounded-t-lg">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p>&copy; 2025 TED Conferences LLC. All rights reserved.</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <button onClick={() => navigate('privacy-policy')} className="hover:text-red-600 transition-colors text-sm">Privacy Policy</button>
                        <button onClick={() => navigate('terms-of-use')} className="hover:text-red-600 transition-colors text-sm">Terms of Use</button>
                        <button onClick={() => navigate('contact')} className="hover:text-red-600 transition-colors text-sm">Contact</button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
