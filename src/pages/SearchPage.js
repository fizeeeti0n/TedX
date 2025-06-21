import React from 'react';
import PageLayout from '../components/PageLayout'; // Import the reusable PageLayout component

/**
 * SearchPage component displays placeholder search results.
 * In a full application, this page would dynamically fetch and display results
 * based on a user's search query, likely from a backend API.
 */
const SearchPage = () => (
    <PageLayout title="Search Results">
        <p className="text-gray-700 mb-4">
            Below are some placeholder results. In a full implementation, these would be dynamically loaded based on a search query.
        </p>
        {/* Container for individual search result items */}
        <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-gray-800">Search Result 1: The Power of Vulnerability</h3>
                <p className="text-sm text-gray-600">By Brené Brown (TEDGlobal 2010)</p>
                <p className="text-sm text-gray-700 mt-2">A talk about connection, shame, and the courage to be imperfect.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-gray-800">Search Result 2: How great leaders inspire action</h3>
                <p className="text-sm text-gray-600">By Simon Sinek (TEDGlobal 2009)</p>
                <p className="text-sm text-gray-700 mt-2">Learn about the "golden circle" and how to inspire cooperation and trust.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-gray-800">Search Result 3: Do schools kill creativity?</h3>
                <p className="text-sm text-gray-600">By Sir Ken Robinson (TED2006)</p>
                <p className="text-sm text-gray-700 mt-2">A passionate and funny case for a radical rethinking of our school systems.</p>
            </div>
        </div>
    </PageLayout>
);

export default SearchPage;
