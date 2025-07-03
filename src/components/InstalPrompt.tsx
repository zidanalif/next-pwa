"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const standalone = window.matchMedia("(display-mode: standalone)").matches;
    setIsStandalone(standalone);

    const userAgent = window.navigator.userAgent;
    const ios = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    setIsIOS(ios);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  if (isStandalone) return null;

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;

      setDeferredPrompt(null);
      setShowPrompt(false);
    }
  };

  const handleClosePrompt = () => {
    setShowPrompt(false);
  };

  return (
    <>
      {showPrompt && (
        <div
          className="offcanvas offcanvas-bottom addtohome-popup theme-offcanvas show"
          tabIndex={-1}
          id="offcanvas"
          aria-modal="true"
          role="dialog"
        >
          <button
            type="button"
            className="btn-close text-reset popup-close-home"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={handleClosePrompt}
          ></button>
          <div className="offcanvas-body small">
            <Image
              className="logo-popup"
              src="/logo.png"
              alt="logo"
              width={42}
              height={40}
            />
            <p className="title font-w600">Zoop Store</p>
            <p>
              {isIOS
                ? "To install the Zoop Retail Store Multipurpose eCommerce Mobile App Template on your iOS device, tap the share icon and select 'Add to Home Screen'."
                : "Install Zoop Retail Store Multipurpose eCommerce Mobile App Template to your home screen for easy access, just like any other app"}
            </p>
            <button
              className="theme-btn install-app btn-inline addhome-btn"
              id="installApp"
              onClick={handleInstallClick}
            >
              Add to Home Screen
            </button>
          </div>
        </div>
      )}
    </>
  );
}
