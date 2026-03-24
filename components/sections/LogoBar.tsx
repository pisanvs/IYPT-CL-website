const LOGOS = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Escudo_de_la_Pontificia_Universidad_Cat%C3%B3lica_de_Chile.svg/200px-Escudo_de_la_Pontificia_Universidad_Cat%C3%B3lica_de_Chile.svg.png',
    alt: 'PUC',
    className: 'logo-img',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Coat_of_arms_of_the_University_of_Chile.svg/960px-Coat_of_arms_of_the_University_of_Chile.svg.png',
    alt: 'UChile',
    className: 'logo-img',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Escudo_USACH.svg/250px-Escudo_USACH.svg.png',
    alt: 'USACH',
    className: 'logo-img',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/MIT_logo_2003-2023.svg/330px-MIT_logo_2003-2023.svg.png',
    alt: 'MIT',
    className: 'logo-img logo-mit',
  },
];

export default function LogoBar() {
  return (
    <div className="logo-bar-wrapper">
      <div className="logo-bar-inner">
        {LOGOS.map(logo => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={logo.alt} src={logo.src} alt={logo.alt} className={logo.className} />
        ))}
      </div>
      <style>{`
        .logo-bar-wrapper {
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
          padding: 1.4rem 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 20;
        }
        .logo-bar-inner {
          display: flex;
          align-items: center;
          gap: 3rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .logo-img {
          height: 100px;
          width: auto;
          opacity: 0.4;
          filter: grayscale(1);
          transition: opacity 0.3s, filter 0.3s;
          object-fit: contain;
        }
        .logo-img:hover {
          opacity: 0.75;
          filter: grayscale(0);
        }
        .logo-mit {
          height: 45px;
        }
        @media (max-width: 768px) {
          .logo-bar-wrapper { padding: 1.25rem 1.5rem; }
          .logo-bar-inner { gap: 2rem; }
          .logo-img { height: 34px; }
          .logo-mit { height: 22px; }
        }
      `}</style>
    </div>
  );
}
