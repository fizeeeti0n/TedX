import React from 'react';
import PageLayout from '../components/PageLayout.js'; // Import the reusable PageLayout component

/**
 * AttendPage component provides information about attending TED events.
 * It lists upcoming major TED conferences and encourages users to check TEDx for local events.
 */
const AttendPage = () => (
    <PageLayout title="Attend a TED Event">
        <p className="text-gray-700 leading-relaxed">
            Experience the magic of TED live! Find upcoming TED, TEDGlobal, and TEDWomen conferences, as well as local TEDx events happening around the world.
        </p>
        {/* Section for upcoming major TED events */}
        <div className="mt-6 space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-gray-800">TED2025: The Next Frontier</h3>
                <p className="text-sm text-gray-600">Vancouver, Canada - April 20-24, 2025</p>
                <p className="text-sm text-gray-700 mt-2">Join us for a week of radical ideas, profound insights, and inspiring performances.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-gray-800">TEDGlobal 2025: Bridging Worlds</h3>
                <p className="text-sm text-gray-600">Rio de Janeiro, Brazil - October 15-19, 2025</p>
                <p className="text-sm text-gray-700 mt-2">Exploring global challenges and innovative solutions from diverse perspectives.</p>
            </div>
        </div>
        {/* Reminder about TEDx local events */}
        <p className="text-gray-700 leading-relaxed mt-6">
            Looking for a local experience? Visit the <span className="font-semibold text-red-600">TEDx Program</span> section on the home page!
        </p>
    </PageLayout>
);

export default AttendPage;