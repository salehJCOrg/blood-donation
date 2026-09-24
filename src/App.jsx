import { useState } from 'react'

const CAMPAIGN = {
  id: 12,
  title: 'نفس الزكية ١٢',
  location: 'جمعية الجارودية',
  start: '2026-09-23',
  end: '2026-09-30',
  hijri: '٢٣ سبتمبر ٢٠٢٦',
  remaining: 41,
  capacity: 45,
}

const NAV = [
  { href: '/', label: 'الحملات', current: true },
  { href: '/manage', label: 'إدارة حجزي' },
  { href: '/admin/login', label: 'دخول المشرفين' },
]

function Icon({ name, size = 24 }) {
  const paths = {
    droplet: (
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    ),
    pin: (
      <>
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    calendar: (
      <>
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 18h.01" />
        <path d="M12 18h.01" />
        <path d="M16 18h.01" />
      </>
    ),
    ticket: (
      <>
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M13 5v2" />
        <path d="M13 17v2" />
        <path d="M13 11v2" />
      </>
    ),
    arrow: (
      <>
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </>
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
    mail: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
    menu: (
      <>
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </>
    ),
    close: (
      <>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </>
    ),
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function NavLinks({ className, onNavigate }) {
  return (
    <nav className={className}>
      {NAV.map((item) => (
        <a
          key={item.href}
          href={item.href}
          aria-current={item.current ? 'page' : undefined}
          className={item.current ? 'active' : undefined}
          onClick={onNavigate}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const booked = CAMPAIGN.capacity - CAMPAIGN.remaining
  const progress = Math.round((booked / CAMPAIGN.capacity) * 100)

  return (
    <div className="page">
      <header>
        <div className="wrap header-bar">
          <a className="brand" href="/">
            <span className="logo">
              <Icon name="droplet" />
            </span>
            <span className="brand-name">جمعية الجارودية الخيرية للخدمات الاجتماعية</span>
          </a>
          <NavLinks className="nav-desktop" />
          <button
            className="menu-btn"
            type="button"
            aria-label="القائمة"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
        {menuOpen && <NavLinks className="nav-mobile" onNavigate={() => setMenuOpen(false)} />}
      </header>

      <main>
        <section className="hero">
          <div className="wrap hero-inner">
            <Icon name="droplet" size={32} />
            <h1>حملات التبرع بالدم</h1>
          </div>
        </section>

        <div className="wrap campaigns">
          <div className="grid">
            <article className="card">
              <div className="card-head">
                <h2>{CAMPAIGN.title}</h2>
              </div>
              <div className="card-body">
                <div className="meta">
                  <p>
                    <Icon name="pin" size={16} />
                    {CAMPAIGN.location}
                  </p>
                  <p>
                    <Icon name="calendar" size={16} />
                    <span>
                      {CAMPAIGN.start} — {CAMPAIGN.end}
                      <span className="hijri"> (هـ: {CAMPAIGN.hijri})</span>
                    </span>
                  </p>
                  <p>
                    <Icon name="ticket" size={16} />
                    <span>
                      المتبقي <strong>{CAMPAIGN.remaining}</strong> من {CAMPAIGN.capacity}
                    </span>
                  </p>
                </div>
                <div className="bar" aria-hidden="true">
                  <span style={{ width: `${progress}%` }} />
                </div>
                <div className="book">
                  <a href={`/book/${CAMPAIGN.id}`}>
                    احجز الآن
                    <Icon name="arrow" size={16} />
                  </a>
                </div>
              </div>
            </article>
          </div>
          <p className="manage-note">
            لديك حجز مسبق؟ <a href="/manage">إدارة الحجز</a>
          </p>
        </div>
      </main>

      <footer>
        <div className="wrap footer-grid">
          <div className="footer-col">
            <div className="footer-title">
              <Icon name="droplet" />
              <h3>جمعية الجارودية الخيرية</h3>
            </div>
            <p>
              جمعية الجارودية الخيرية للخدمات الاجتماعية — مؤسسة غير ربحية مسجلة في وزارة
              الموارد البشرية والتنمية الاجتماعية برقم (60). تنظم حملات التبرع بالدم بالشراكة مع
              المراكز الصحية وبنوك الدم.
            </p>
          </div>
          <div className="footer-col">
            <h3>تواصل معنا</h3>
            <ul>
              <li>
                <Icon name="pin" size={16} />
                العنوان: القطيف – الجارودية، ص.ب 32، الرمز 31911
              </li>
              <li>
                <Icon name="phone" size={16} />
                <span dir="ltr">013 854 0032</span>
                <span className="sep">/</span>
                <a href="https://wa.me/+966556776750" dir="ltr">
                  0556776750
                </a>
              </li>
              <li>
                <Icon name="mail" size={16} />
                <a href="mailto:info@jarodcharity.org.sa" dir="ltr">
                  info@jarodcharity.org.sa
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>روابط سريعة</h3>
            <ul>
              <li>
                <a href="/">حجز موعد للتبرع بالدم</a>
              </li>
              <li>
                <a href="/manage">إدارة حجزي (عرض / تعديل / إلغاء)</a>
              </li>
              <li>
                <a href="https://jarodcharity.org.sa/" target="_blank" rel="noreferrer">
                  الموقع الرسمي للجمعية
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy">
          جميع الحقوق محفوظة © 2026 جمعية الجارودية الخيرية للخدمات الاجتماعية
        </div>
      </footer>
    </div>
  )
}
