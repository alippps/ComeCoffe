import { ArrowRight, Coffee } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />

      <div className="hero-copy">
        <p className="eyebrow">Nusantara specialty bean</p>
        <h1>Biji kopi yang punya warna, karakter, dan cerita.</h1>
        <p className="hero-text">
          ComeCoffeee hanya fokus ke bean: green bean dan roasted bean single origin dari petani lokal. Tidak jual menu cafe, tidak ribet, tinggal pilih origin yang cocok buat seduhanmu.
        </p>
        <div className="hero-actions">
          <a className="primary-link" href="#beans">Lihat Beans <ArrowRight size={18} /></a>
          <a className="ghost-link" href="#origin"><Coffee size={18} /> Kenali Origin</a>
        </div>
      </div>

      <div className="bean-showcase" aria-hidden="true">
        <span className="big-bean">🫘</span>
        <div className="taste-card taste-card-top">floral · citrus · caramel</div>
        <div className="taste-card taste-card-bottom">fresh roast weekly</div>
      </div>
    </section>
  );
}
