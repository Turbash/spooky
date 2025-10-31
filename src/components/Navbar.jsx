import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Demo", href: "#hero" },
  { label: "Subscribe", href: "#cta" },
];

const Navbar = () => {
  const [isOpenOverlay, setIsOpenOverlay] = useState(false);
  const [overlayMounted, setOverlayMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const overlayRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpenOverlay(false);
    };
    if (isOpenOverlay) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden"; 
      setTimeout(() => firstLinkRef.current?.focus(), 50);
    } else {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpenOverlay]);

  const closeOverlay = () => {
    setIsClosing(true);
    setIsOpenOverlay(false);
    setTimeout(() => {
      setOverlayMounted(false);
      setIsClosing(false);
    }, 320);
  };

  const openOverlay = () => {
    setOverlayMounted(true);
    setTimeout(() => setIsOpenOverlay(true), 16);
  };

  const handleNavClick = (href) => (e) => {
    e.preventDefault();
    closeOverlay();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.href = href;
  };

  return (
    <div className="w-full absolute inset-0 z-30 pointer-events-none">
      <div className="container flex justify-between items-center py-4 pointer-events-auto">
        <a href="#hero" className="font-semibold text-lg lg:text-2xl 2xl:text-3xl">Turbash</a>

        <nav className="hidden sm:flex items-center gap-12 text-sm lg:text-xl 2xl:text-2xl" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={handleNavClick(item.href)} className="hover:underline">
              {item.label}
            </a>
          ))}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-orange px-5 py-2 border-2 bg-transparent border-orange rounded-full font-semibold hover:bg-orange hover:text-white transition"
          >
            Code Repo
          </a>
        </nav>

        <button
          aria-label={isOpenOverlay ? "Close menu" : "Open menu"}
          aria-expanded={isOpenOverlay}
          className="sm:hidden p-2 rounded-md bg-white/5 backdrop-blur text-white z-60"
          onClick={() => {
            if (overlayMounted) closeOverlay();
            else openOverlay();
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <g className={isOpenOverlay ? 'hamburger icon-open' : 'hamburger'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path className="line line1" d="M4 6h16" />
              <path className="line line2" d="M4 12h16" />
              <path className="line line3" d="M4 18h16" />
            </g>
          </svg>
        </button>
      </div>

      {overlayMounted && (
        <div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          className={`fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center gap-8 pointer-events-auto overlay ${isOpenOverlay && !isClosing ? 'overlay--open' : ''} ${isClosing ? 'overlay--closing' : ''}`}
          onClick={(e) => {
            if (e.target === overlayRef.current) closeOverlay();
          }}
        >
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              ref={i === 0 ? firstLinkRef : null}
              href={item.href}
              onClick={handleNavClick(item.href)}
              className="text-3xl font-semibold"
            >
              {item.label}
            </a>
          ))}
          <a href="#" onClick={(e) => e.preventDefault()} className="text-xl mt-4 px-6 py-2 border-2 border-orange rounded-full">
            Code Repo
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
