import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export default function MyUrls() {
  const [urls, setUrls] = useState([]);
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await fetch('/api/url/user/urls', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch URLs');
        }

        const data = await response.json();
        setUrls(data);
      } catch (error) {
        console.error('Error fetching URLs:', error);
      }
    };

    fetchUrls();
  }, [currentUser]);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">My URL's</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {urls.map((url) => (
          <div key={url.shortId} className="bg-white p-6 rounded-lg shadow-md">
            <Link to={`/details/${url.shortId}`} className="text-xl font-semibold mb-2 break-all">{url.originalUrl}</Link>
            <p className="text-gray-600 mb-4 break-all">
              Short URL: 
              <Link to={`/${url.shortId}`} className="text-cyan-500 break-all">{`${window.location.origin}/api/url/${url.shortId}`}</Link>
            </p>
            <p className="text-gray-500">Expires at: {new Date(url.expiresAt).toLocaleDateString()}</p>
            <p className="text-gray-500">Total Clicks: {url.visitHistory.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
