"use client";
import { useEffect } from "react";
import Script from "next/script";

export default function Analytics() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-BV53N1HNJ2"); // Replace with your actual Tracking ID
  }, []);

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
    </>
  );
}
