import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showPopup, setShowPopup] = useState(false);
  const [fadeIn, setFadeIn] = useState(false); // For opacity transition

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
      const timer = setTimeout(() => {
        setShowPopup(true);

        // Apply opacity transition after showing the popup
        setTimeout(() => setFadeIn(true), 50);
      }, 2000); // 2 sec delay

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setFadeIn(false); // Start fade-out animation

    setTimeout(() => {
      setShowPopup(false); // Hide after animation
    }, 500);
  };

  return (
    showPopup && (
      <div
        className={`fixed bottom-16 lg:bottom-4 w-96 left-4 bg-[#8a8a8a] lg:w-[500px] text-left z-50 text-white p-[30px] flex flex-col space-y-7 items-start justify-between shadow-[0_-5px_35px_5px_#00000024] text-sm transition-opacity duration-500 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <span>
          This website uses cookies to ensure you get the best experience on our website.{" "}
          <a href="/privacy-policy" className="underline underline-offset-4">Privacy Policy</a>
        </span>
        <div>
          <a href="/" className="underline underline-offset-4 decoration-1 py-1">
            Not agree
          </a>

          <button onClick={handleAccept} className="bg-black py-2 rounded-3xl px-10 ml-4">
            Agree
          </button>
        </div>
      </div>
    )
  );
}
