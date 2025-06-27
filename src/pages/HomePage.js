import React, { useState } from 'react';

/**
 * HomePage component displays the main content of the TEDx Program website,
 * including the introduction text, an image carousel, and call-to-action sections.
 * @param {object} props - The component's properties.
 * @param {function} props.navigate - Function to navigate to different pages in the application.
 */
const HomePage = ({ navigate }) => {
    // State for the image carousel: tracks the index of the currently displayed image.
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Placeholder image URLs for the carousel.
    // In a real application, these would typically come from an API or a content management system.
    const images = [
     '/photos/TedX_banner.jpg',
       
    ];
    
    /**
     * Advances the image carousel to the next image.
     * Loops back to the first image if the end of the array is reached.
     */
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    /**
     * Rewinds the image carousel to the previous image.
     * Loops to the last image if the beginning of the array is reached.
     */
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <>
            {/* TEDx Program Introduction Section */}
            <section className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h1 className="text-red-600 text-3xl md:text-4xl font-bold mb-4">TEDx Program</h1>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    TEDx is a grassroots initiative, created in the spirit of TED’s overall mission to research and discover “ideas worth spreading.” TEDx brings the
                    spirit of TED to local communities around the globe through TEDx events. These events are organized by passionate individuals who seek to
                    uncover new ideas and to share the latest research in their local areas that spark conversations in their communities. TEDx events include live
                    speakers and recorded TED Talks, and are organized independently under a free license granted by TED. These events are not controlled by
                    TED, but event organizers agree to abide by our format, and are offered guidelines for curation, speaker coaching, event organizing and more.
                    They learn from us and from each other. More than 3000 events are now held annually.
                </p>

                {/* Image Carousel Component */}
                <div className="relative w-full overflow-hidden mt-8 rounded-lg shadow-lg">
                    {/* Carousel slides container. Uses CSS transform for smooth transitions. */}
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                    >
                        {images.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`TEDx Event ${index + 1}`}
                                // `flex-shrink-0` ensures images don't shrink, `object-cover` maintains aspect ratio
                                className="w-full flex-shrink-0 object-cover h-64 md:h-96"
                            />
                        ))}
                    </div>
                    {/* Carousel Navigation Buttons (Previous) */}
                    <button
                        onClick={prevImage}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-opacity focus:outline-none"
                    >
                        &#10094; {/* Left arrow Unicode character */}
                    </button>
                    {/* Carousel Navigation Buttons (Next) */}
                    <button
                        onClick={nextImage}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-opacity focus:outline-none"
                    >
                        &#10095; {/* Right arrow Unicode character */}
                    </button>
                    {/* Dots for carousel navigation - allow direct jump to any image */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                // Highlight the dot corresponding to the current image
                                className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Sections - Organized in a responsive grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* "Organize your first TEDx event" Section */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-red-600 text-2xl md:text-3xl font-bold mb-4">Organize your first TEDx event</h2>
                    <p className="text-gray-700 mb-6">
                        Bring the global TED experience to your community through a combination of live speakers and TED Talk videos.
                    </p>
                    <ul className="space-y-4">
                        <li>
                            {/* Button to navigate to "Before you start" page */}
                            <button onClick={() => navigate('before-you-start')} className="block text-left w-full group">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-red-600 transition-colors">Before you start</h3>
                                <p className="text-gray-600">What you need to know before you apply for a license</p>
                            </button>
                        </li>
                        <li>
                            {/* Button to navigate to "Apply for a license" page */}
                            <button onClick={() => navigate('apply-for-license')} className="block text-left w-full group">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-red-600 transition-colors">Apply for a license</h3>
                                <p className="text-gray-600">Start the application process to host your own TEDx event</p>
                            </button>
                        </li>
                    </ul>
                </div>

                {/* "Already an organizer?" Section */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-red-600 text-2xl md:text-3xl font-bold mb-4">Already an organizer?</h2>
                    <p className="text-gray-700 mb-6">
                        Planning and designing a TEDx event is a big endeavor. Here's everything you need to help you organize your next TEDx event.
                    </p>
                    <ul className="space-y-4">
                        <li>
                            {/* Button to navigate to "Organizer guide" page */}
                            <button onClick={() => navigate('organizer-guide')} className="block text-left w-full group">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-red-600 transition-colors">Organizer guide</h3>
                                <p className="text-gray-600">General instructions and best practices from experienced conference hosts</p>
                            </button>
                        </li>
                        <li>
                            {/* Button to navigate to "Resources" page */}
                            <button onClick={() => navigate('resources')} className="block text-left w-full group">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-red-600 transition-colors">Resources</h3>
                                <p className="text-gray-600">A place where organizers can spark connection and peer learning</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default HomePage;
