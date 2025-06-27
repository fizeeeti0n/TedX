import React from 'react';

/**
 * HomePage component displays the main content of the TEDx Program website,
 * including the introduction text and a static image.
 * @param {object} props - The component's properties.
 * @param {function} props.navigate - Function to navigate to different pages in the application.
 */
const HomePage = ({ navigate }) => {
    const imageSrc = '/photos/TedX_banner.jpg';

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

                {/* Static Image */}
                <div className="w-full mt-8 rounded-lg overflow-hidden shadow-lg">
                    <img
                        src={imageSrc}
                        alt="TEDx Event"
                        className="w-full object-cover h-64 md:h-96"
                    />
                </div>
            </section>

            {/* Call to Action Sections */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* "Organize your first TEDx event" Section */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-red-600 text-2xl md:text-3xl font-bold mb-4">Organize your first TEDx event</h2>
                    <p className="text-gray-700 mb-6">
                        Bring the global TED experience to your community through a combination of live speakers and TED Talk videos.
                    </p>
                    <ul className="space-y-4">
                        <li>
                            <button onClick={() => navigate('before-you-start')} className="block text-left w-full group">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-red-600 transition-colors">Before you start</h3>
                                <p className="text-gray-600">What you need to know before you apply for a license</p>
                            </button>
                        </li>
                        <li>
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
                            <button onClick={() => navigate('organizer-guide')} className="block text-left w-full group">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-red-600 transition-colors">Organizer guide</h3>
                                <p className="text-gray-600">General instructions and best practices from experienced conference hosts</p>
                            </button>
                        </li>
                        <li>
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
