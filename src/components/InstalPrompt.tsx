"use client";

import { useEffect, useState } from "react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Cek apakah app sudah di-install (PWA standalone mode)
    const standalone = window.matchMedia("(display-mode: standalone)").matches;
    setIsStandalone(standalone);

    // Deteksi iOS
    const userAgent = window.navigator.userAgent;
    const ios = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    setIsIOS(ios);

    // Handle event beforeinstallprompt (Android & Chrome)
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

  // Jika sudah diinstall, tidak tampilkan prompt
  if (isStandalone) return null;

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;

      setDeferredPrompt(null);
      setShowPrompt(false);
    }
  };

  return (
    <>
      {showPrompt && (
        <div>
          Install this app on your device for a better experience.
          <button onClick={handleInstallClick}>Add to Home Screen</button>
        </div>
      )}
      {isIOS && (
        <p>
          On iOS, tap the{" "}
          <span role="img" aria-label="Share">
            ⬆️
          </span>{" "}
          then select{" "}
          <strong>
            “Add to Home Screen”{" "}
            <span role="img" aria-label="Plus">
              ➕
            </span>
          </strong>
        </p>
      )}
    </>
  );
}
