'use client';

import { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleDot,
  Leaf,
  Mail,
  PackageCheck,
  Sparkles,
  Wheat,
} from 'lucide-react';

const variants = [
  { weight: '300 g', price: '4,50 zł', note: 'Na próbę' },
  { weight: '500 g', price: '8,00 zł', note: 'Poręczna porcja' },
  { weight: '800 g', price: '10,90 zł', note: 'Dla małego pupila' },
  { weight: '1 kg', price: '12,99 zł', note: 'Najczęściej wybierane', featured: true },
  { weight: '1,5 kg', price: '18,50 zł', note: 'Dłuższy zapas' },
  { weight: '2 kg', price: '23,90 zł', note: 'Dla kilku zwierząt' },
  { weight: '3 kg', price: '34,90 zł', note: 'Duży zapas' },
  { weight: '4 kg', price: '44,90 zł', note: 'Dla hodowli' },
  { weight: '5 kg', price: '54,90 zł', note: 'Najbardziej ekonomiczna' },
];

const faqs = [
  { question: 'Dla jakich zwierząt jest to siano?', answer: 'Siano łąkowe możesz podawać królikom, świnkom morskim, szynszylom, koszatniczkom i innym małym roślinożercom. Powinno być dostępne jako pasza objętościowa każdego dnia.' },
  { question: 'Czy siano ma dodatki?', answer: 'Nie. To suszone rośliny łąkowe bez dodatków paszowych, barwników, aromatów i konserwantów. Naturalnie mogą różnić się kolorem oraz długością źdźbeł.' },
  { question: 'Jak przechowywać siano?', answer: 'W suchym, chłodnym i przewiewnym miejscu, z dala od wilgoci i intensywnych zapachów. Po otwarciu najlepiej zapewnić opakowaniu dostęp powietrza.' },
  { question: 'Jak zamówić wybrany wariant?', answer: 'Napisz do nas na bocian.gold@gmail.com, podając gramaturę i liczbę opakowań. Odpowiemy z aktualną dostępnością i sposobem dostawy.' },
];

export default function Home() {
  const [selectedWeight, setSelectedWeight] = useState('1 kg');

  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Główna nawigacja">
        <a href="#start" className="brand-lockup" aria-label="Bocian Gold – Złota Łąka"><img src="/logo-bocian-gold.png" alt="Bocian Gold – Złota Łąka" /></a>
        <div className="nav-links"><a href="#warianty">Warianty</a><a href="#o-sianie">O sianie</a><a href="#faq">FAQ</a></div>
        <a className="nav-cta" href="mailto:bocian.gold@gmail.com?subject=Zapytanie%20o%20siano">Napisz do nas <ArrowRight size={16} /></a>
      </nav>

      <section className="hero" id="start">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> Siano z kujawskich łąk</div>
          <h1>Codzienna uczta dla małych roślinożerców.</h1>
          <p className="hero-lede">Naturalne siano łąkowe premium, starannie suszone i ręcznie pakowane. Prosty skład, duża porcja natury i wygodne gramatury dla domowych pupili oraz hodowli.</p>
          <div className="hero-actions"><a className="button button-primary" href="#warianty">Wybierz gramaturę <ArrowRight size={18} /></a><a className="button button-quiet" href="mailto:bocian.gold@gmail.com?subject=Zapytanie%20o%20siano"><Mail size={17} /> Zapytaj o dostępność</a></div>
          <div className="hero-proof"><div className="proof-avatars"><span>🐇</span><span>🐹</span><span>🐭</span></div><div><strong>Dla codziennego podawania</strong><small>Naturalna zmienność każdego pokosu</small></div></div>
        </div>
        <div className="hero-art" aria-label="Etykieta Bocian Gold – Złota Łąka"><div className="art-glow" /><div className="art-sticker"><Sparkles size={15} /> Ręcznie pakowane</div><img src="/etykieta-tylna.png" alt="Etykieta siana Bocian Gold Złota Łąka" /><div className="art-caption"><span>01</span><span>naturalny skład</span><span>kujawska łąka</span></div></div>
      </section>

      <section className="benefits" aria-label="Najważniejsze cechy">
        <div><span className="benefit-icon"><Leaf size={20} /></span><div><strong>100% roślin łąkowych</strong><small>Bez dodatków paszowych</small></div></div>
        <div><span className="benefit-icon"><Wheat size={20} /></span><div><strong>Suszone z uważnością</strong><small>Naturalny kolor i zapach siana</small></div></div>
        <div><span className="benefit-icon"><PackageCheck size={20} /></span><div><strong>Pakowane ręcznie</strong><small>Każde opakowanie przechodzi przez nasze ręce</small></div></div>
      </section>

      <section className="section variants-section" id="warianty">
        <div className="section-heading"><div><span className="section-kicker">Znajdź swój format</span><h2>Wybierz ilość na dziś<br /><em>i na cały zapas.</em></h2></div><p>Od małej porcji na próbę po większe opakowania dla kilku zwierząt. Kliknij wariant, aby go wybrać.</p></div>
        <div className="variant-grid">{variants.map((variant) => { const active = selectedWeight === variant.weight; return <button key={variant.weight} className={`variant-card ${active ? 'active' : ''} ${variant.featured ? 'featured' : ''}`} onClick={() => setSelectedWeight(variant.weight)} aria-pressed={active}>{variant.featured && <span className="variant-badge">Najczęściej wybierane</span>}<span className="variant-weight">{variant.weight}</span><span className="variant-price">{variant.price}</span><span className="variant-note">{variant.note}</span><span className="variant-check">{active ? <Check size={15} /> : <CircleDot size={15} />}</span></button>; })}</div>
        <div className="selection-bar"><div><span>Wybrany wariant</span><strong>{selectedWeight}</strong></div><a className="button button-primary" href={`mailto:bocian.gold@gmail.com?subject=Zapytanie%20o%20siano%20${encodeURIComponent(selectedWeight)}`}>Zapytaj o {selectedWeight} <ArrowRight size={18} /></a></div>
      </section>

      <section className="story section" id="o-sianie"><div className="story-image"><img src="/etykieta-tylna.png" alt="Tył etykiety siana Bocian Gold" /></div><div className="story-copy"><span className="section-kicker">Z kujawskich łąk</span><h2>Prosty skład.<br /><em>Dużo natury.</em></h2><p>Wybieramy to, co najważniejsze: suszone rośliny łąkowe, dobry zapach i wygodne opakowanie. Bez zbędnych dodatków — tak, aby siano mogło być codzienną podstawą diety małych roślinożerców.</p><p>Różna długość źdźbeł i odcień zieleni to naturalna cecha siana. Każda partia ma swój charakter, bo łąka nie jest fabryką.</p><div className="story-list"><span><Check size={15} /> Naturalnie zmienny kolor</span><span><Check size={15} /> Bez aromatów i barwników</span><span><Check size={15} /> Ręczne pakowanie</span></div></div></section>

      <section className="process section"><div className="section-heading compact"><div><span className="section-kicker">Jak powstaje</span><h2>Od łąki do<br /><em>Twojego pupila.</em></h2></div><p>Mały, powtarzalny proces, w którym liczy się świeżość, porządek i uważność na każdy pakunek.</p></div><div className="process-grid"><div><span className="step-number">01</span><Wheat size={25} /><h3>Łąka</h3><p>Rośliny łąkowe z kujawskiego krajobrazu.</p></div><div><span className="step-number">02</span><Leaf size={25} /><h3>Suszenie</h3><p>Spokojne suszenie, aby zachować naturalny charakter siana.</p></div><div><span className="step-number">03</span><PackageCheck size={25} /><h3>Pakowanie</h3><p>Ręcznie pakujemy i przygotowujemy do wysyłki.</p></div></div></section>

      <section className="faq section" id="faq"><div className="section-heading compact"><div><span className="section-kicker">Masz pytanie?</span><h2>Najważniejsze<br /><em>odpowiedzi.</em></h2></div><p>Jeśli czegoś nie ma poniżej, napisz — chętnie odpowiemy przed zakupem.</p></div><div className="faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<ChevronDown size={18} /></summary><p>{faq.answer}</p></details>)}</div></section>

      <section className="contact-band"><div><span className="section-kicker">Bocian Gold – Złota Łąka</span><h2>Wybierz porcję natury<br /><em>dla swojego pupila.</em></h2></div><a className="button button-light" href="mailto:bocian.gold@gmail.com?subject=Zapytanie%20o%20siano"><Mail size={17} /> bocian.gold@gmail.com</a></section>

      <footer className="footer"><div className="footer-brand"><img src="/logo-bocian-gold.png" alt="Bocian Gold" /><span>Naturalne siano łąkowe premium</span></div><div className="footer-meta"><span>© {new Date().getFullYear()} Bocian Gold</span><a href="#start">Wróć na górę ↑</a></div></footer>
    </main>
  );
}
