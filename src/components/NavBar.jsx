import React, { useEffect, useState } from 'react'
import logo from '../assets/Link.png'

const desktopNavItems = [
  { href: '/', label: 'Home', hasCaret: true },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services', hasCaret: true },
  { href: '/cyber-security', label: 'Cyber Security', hasCaret: true },
  { href: '/career', label: 'Career' },
  { href: '/blog', label: 'Blog', hasCaret: true },
  { href: '/contact', label: 'Contact' },
]

const mobileMainItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services', isServicesTrigger: true },
  { href: '/pages', label: 'Pages' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const serviceItems = [
  { href: '/services/seo', label: 'SEO', iconType: 'seo' },
  { href: '/services/content-marketing', label: 'Content Marketing', iconType: 'content' },
  { href: '/services/ui-ux-design', label: 'UI/UX Design', iconType: 'uiux' },
  { href: '/services/mobile-app-development', label: 'Mobile App Development', iconType: 'mobile' },
  { href: '/services/web-development', label: 'Web Development', iconType: 'web', isHighlighted: true },
  { href: '/services/creative-brand-design', label: 'Creative Brand Design', iconType: 'creative' },
  { href: '/services/social-media-marketing', label: 'Social Media Marketing', iconType: 'social' },
  { href: '/services/performance-marketing', label: 'Performance Marketing', iconType: 'performance' },
  { href: '/services/website-maintenance', label: 'Website Maintenance', iconType: 'maintenance' },
]

function ServiceIcon({ type, className }) {
  const iconProps = {
    viewBox: '0 0 20 20',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.7',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': true,
  }

  if (type === 'seo') {
    return (
      <svg {...iconProps}>
        <circle cx="8" cy="8" r="4.3" />
        <path d="M6.4 6.9h2.8M6.4 8.4h3.4M6.4 9.9h2.4" />
        <path d="M11.2 11.2l3.8 3.8" />
      </svg>
    )
  }

  if (type === 'content') {
    return (
      <svg {...iconProps}>
        <rect x="3" y="3" width="9" height="12" rx="1.6" />
        <path d="M6 6h3M6 8.7h4M6 11.4h3" />
        <rect x="12" y="6" width="5" height="9" rx="1.4" />
      </svg>
    )
  }

  if (type === 'uiux') {
    return (
      <svg {...iconProps}>
        <rect x="3" y="4" width="14" height="11" rx="1.8" />
        <path d="M7.8 4v11M3 8.7h14M11.4 10.6l1.7 1.8 3-3" />
      </svg>
    )
  }

  if (type === 'mobile') {
    return (
      <svg {...iconProps}>
        <rect x="6" y="2.8" width="8" height="14.4" rx="1.8" />
        <path d="M8.2 5.2h3.6M9.2 14.8h1.6" />
      </svg>
    )
  }

  if (type === 'web') {
    return (
      <svg {...iconProps}>
        <rect x="2.5" y="4" width="15" height="11" rx="1.6" />
        <path d="M2.5 7h15M8.3 11 6.4 12.9M8.3 11 6.4 9.1M11.7 9.1l1.9 1.9-1.9 1.9" />
      </svg>
    )
  }

  if (type === 'creative') {
    return (
      <svg {...iconProps}>
        <path d="M10 3.2a4.4 4.4 0 0 0-2.8 7.8c.5.4.8 1 .8 1.7V13h4v-.3c0-.7.3-1.3.8-1.7A4.4 4.4 0 0 0 10 3.2Z" />
        <path d="M8.1 15.2h3.8M8.6 17h2.8M4 10.2H2.5M17.5 10.2H16M5.2 6.2l-1-1M14.8 6.2l1-1" />
      </svg>
    )
  }

  if (type === 'social') {
    return (
      <svg {...iconProps}>
        <circle cx="5" cy="5" r="1.7" />
        <circle cx="15" cy="5" r="1.7" />
        <circle cx="5" cy="15" r="1.7" />
        <circle cx="15" cy="15" r="1.7" />
        <path d="M6.6 5.7 13.4 14.3M13.4 5.7 6.6 14.3" />
      </svg>
    )
  }

  if (type === 'performance') {
    return (
      <svg {...iconProps}>
        <path d="M3 15.4h14M4.3 15.4V8.9M8 15.4v-4.8M11.7 15.4v-7.1M15.4 15.4v-9.5" />
        <path d="m4.2 8.8 3.6-2.3 3 1.4 4.7-3.2" />
      </svg>
    )
  }

  return (
    <svg {...iconProps}>
      <rect x="3" y="3.5" width="14" height="10" rx="1.8" />
      <path d="M6 6.5h3M6 9.2h5M10 16.6h.01" />
      <path d="M13.2 14.7a2.2 2.2 0 0 0 2.2-2.2" />
    </svg>
  )
}

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesPanelOpen, setIsServicesPanelOpen] = useState(false)

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
        setIsServicesPanelOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleToggleMenu = () => {
    setIsMobileMenuOpen((current) => {
      const next = !current
      if (!next) {
        setIsServicesPanelOpen(false)
      }
      return next
    })
  }

  const closeMenu = () => {
    setIsMobileMenuOpen(false)
    setIsServicesPanelOpen(false)
  }

  const openServicesPanel = () => {
    setIsServicesPanelOpen(true)
  }

  return (
    <header className={`navbar ${isMobileMenuOpen ? 'navbar-open' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo-link" aria-label="Go to home" onClick={closeMenu}>
          <img src={logo} alt="BeOnline logo" className="logo" />
        </a>

        <nav className="navbar-menu desktop-navbar-menu" aria-label="Main navigation">
          {desktopNavItems.map(({ href, label, hasCaret }) => (
            <a
              key={label}
              href={href}
              className={`navbar-link ${hasCaret ? 'navbar-link-group' : ''}`}
              onClick={closeMenu}
            >
              {label}
              {hasCaret && <span className="nav-caret" aria-hidden="true"></span>}
            </a>
          ))}
        </nav>

        <button className="contact-btn desktop-contact-btn" type="button">
          Contact Us
        </button>

        <button
          type="button"
          className="navbar-toggle"
          onClick={handleToggleMenu}
          aria-controls="mobile-nav-menu"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className="navbar-toggle-line"></span>
          <span className="navbar-toggle-line"></span>
          <span className="navbar-toggle-line"></span>
        </button>
      </div>

      <div
        className={`mobile-navbar-panel ${isMobileMenuOpen ? 'mobile-navbar-panel-open' : ''}`}
        id="mobile-nav-menu"
        aria-hidden={!isMobileMenuOpen}
      >
        <div className={`mobile-navbar-track ${isServicesPanelOpen ? 'mobile-navbar-track-services-open' : ''}`}>
          <div className="mobile-navbar-pane mobile-navbar-main-pane">
            {mobileMainItems.map(({ href, label, isServicesTrigger }) => {
              if (isServicesTrigger) {
                return (
                  <button
                    key={label}
                    type="button"
                    className="mobile-services-trigger"
                    onClick={openServicesPanel}
                  >
                    <span>{label}</span>
                    <span className="mobile-nav-chevron" aria-hidden="true">
                      &gt;
                    </span>
                  </button>
                )
              }

              return (
                <a key={label} href={href} className="mobile-main-link" onClick={closeMenu}>
                  {label}
                </a>
              )
            })}
          </div>

          <div className="mobile-navbar-pane mobile-navbar-services-pane">
            {serviceItems.map((service) => (
              <a
                key={service.label}
                href={service.href}
                className={`mobile-service-link ${service.isHighlighted ? 'mobile-service-link-highlight' : ''}`}
                onClick={closeMenu}
              >
                <ServiceIcon type={service.iconType} className="mobile-service-icon" />
                <span>{service.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`navbar-backdrop ${isMobileMenuOpen ? 'navbar-backdrop-visible' : ''}`}
        aria-hidden={!isMobileMenuOpen}
        onClick={closeMenu}
        tabIndex={-1}
      ></button>
    </header>
  )
}
