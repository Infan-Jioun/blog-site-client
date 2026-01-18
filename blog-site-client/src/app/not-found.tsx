import Link from 'next/link';
import React from 'react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            <div className="text-center">
                {/* Large Animated 404 Text */}
                <h1 className="text-9xl font-extrabold text-blue-600 animate-bounce">
                    404
                </h1>

                {/* Main Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
                    Oops! Page Not Found
                </h2>

                {/* Description Text */}
                <p className="text-gray-600 mt-4 text-lg max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                {/* Back to Home Button */}
                <div className="mt-8">
                    <Link
                        href="/"
                        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 inline-block"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>

            {/* Decorative Background Blob (SVG) */}
            <div className="mt-12 w-full max-w-lg opacity-50">
                <svg
                    className="w-full h-auto text-blue-200"
                    fill="currentColor"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="currentColor"
                        d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C86.9,14.5,81.2,29,72.4,41.4C63.6,53.8,51.8,64.1,38.1,71.5C24.4,78.9,8.7,83.4,-6.5,81.4C-21.6,79.4,-36.2,70.9,-48.7,61.1C-61.2,51.3,-71.5,40.1,-77.4,26.9C-83.3,13.6,-84.8,-1.7,-81.4,-15.8C-78,-29.9,-69.7,-42.8,-58.6,-51.1C-47.5,-59.4,-33.6,-63,-20.5,-70.8C-7.4,-78.6,4.9,-90.5,19.9,-90.9C34.8,-91.3,44.7,-76.4Z"
                        transform="translate(100 100)"
                    />
                </svg>
            </div>
        </div>
    );
}