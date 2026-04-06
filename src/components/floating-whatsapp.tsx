"use client";

export default function FloatingWhatsApp() {
  const whatsappLink = "https://wa.me/60189023676?text=Hi%20Isma%20Design%20%26%20Build!%20I'm%20interested%20in%20your%20services.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.335 22.594c-.39 1.1-1.932 2.012-3.17 2.278-.846.18-1.95.324-5.67-1.218-4.762-1.97-7.826-6.81-8.064-7.126-.23-.316-1.932-2.574-1.932-4.908s1.222-3.482 1.656-3.96c.434-.478.948-.598 1.264-.598.316 0 .632.004.908.016.292.014.684-.11 1.07.816.39.948 1.328 3.242 1.444 3.478.118.236.196.51.04.826-.158.316-.236.514-.472.79-.236.278-.496.62-.71.832-.236.236-.482.492-.208.964.276.472 1.224 2.02 2.63 3.272 1.808 1.612 3.332 2.112 3.806 2.348.472.236.75.196 1.026-.118.276-.316 1.184-1.382 1.5-1.856.316-.478.632-.394 1.066-.236.434.158 2.728 1.286 3.196 1.522.468.236.78.354.896.552.118.196.118 1.146-.272 2.246z"/>
      </svg>
    </a>
  );
}