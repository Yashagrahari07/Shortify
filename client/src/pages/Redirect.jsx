import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Redirect() {
  const { shortId } = useParams();

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        const response = await fetch(`/api/url/${shortId}`);

        if (!response.ok) {
          throw new Error("Failed to fetch the original URL");
        }

        const data = await response.json();
        window.open(data.originalUrl, '_blank');
        window.location.href = "/";
      } catch (error) {
        console.error("Error:", error);
        window.location.href = "/404";
      }
    };

    fetchOriginalUrl();
  }, [shortId]);

  return (
    <div className="flex flex-col items-center">
      <p className="text-lg text-black mb-2">Please wait!</p>
      <p className="text-lg text-black font-bold">Redirecting...</p>
    </div>
  );
}