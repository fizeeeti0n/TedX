import React from 'react';
import PageLayout from '../components/PageLayout'; // Import the reusable PageLayout component

/**
 * WatchPage component displays content related to watching TED Talks.
 * It includes an introductory paragraph and placeholder video cards.
 */
const WatchPage = () => (
    <PageLayout title="Watch TED Talks">
        <p className="text-gray-700 leading-relaxed">
            Explore thousands of TED Talks, broken down by topic and mood, from innovators and educators to tech geniuses and medical mavericks.
            Dive deep into ideas worth spreading, from new perspectives on ancient wisdom to cutting-edge research.
        </p>
        {/* Grid for placeholder video cards, responsive layout */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Array.from creates 6 placeholder video cards */}
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    {/* Placeholder image for video thumbnail */}
                    <img
                        src={`https://placehold.co/300x180/F0F0F0/333333?text=Video+Thumbnail+${i + 1}`}
                        alt={`Video ${i + 1}`}
                        className="w-full rounded mb-2 object-cover"
                    />
                    {/* Video title and speaker information */}
                    <h3 className="font-semibold text-lg text-gray-800">Talk Title {i + 1}</h3>
                    <p className="text-sm text-gray-600">Speaker Name {i + 1}</p>
                </div>
            ))}
        </div>
    </PageLayout>
);

export default WatchPage;
