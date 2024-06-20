import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function UrlDetails() {
  const { shortId } = useParams();
  const [urlDetails, setUrlDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUrlDetails = async () => {
      try {
        const response = await fetch(`/api/url/details/${shortId}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch URL details');
        }

        const data = await response.json();
        setUrlDetails(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUrlDetails();
  }, [shortId]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/url/${shortId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete URL');
      }

      window.location.href = '/myurls';
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">URL Details</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Original URL</h2>
        <p className="text-gray-600 mb-4 break-all">{urlDetails.originalUrl}</p>

        <h2 className="text-xl font-semibold mb-2">Short URL</h2>
        <Link to={`/${urlDetails.shortId}`} className="text-cyan-500 mb-4 break-all">{`${window.location.origin}/${urlDetails.shortId}`}</Link>

        <h2 className="text-xl font-semibold mb-2">Expires At</h2>
        <p className="text-gray-500 mb-4">{new Date(urlDetails.expiresAt).toLocaleDateString()}</p>

        <h2 className="text-xl font-semibold mb-2">Total Clicks</h2>
        <p className="text-gray-500 mb-4">{urlDetails.visitHistory.length}</p>

        <h2 className="text-xl font-semibold mb-2">Visit History</h2>
        <ul className="list-disc list-inside">
          {urlDetails.visitHistory.map((visit, index) => (
            <li key={index} className="text-gray-500">{new Date(visit.timestamp).toLocaleString()}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-2">QR Code</h2>
        <img src={urlDetails.qrCodeUrl} alt="QR Code" className="mb-4" />

        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-red-600 focus:outline-none">
          Delete URL
        </button>
      </div>
    </div>
  );
}
