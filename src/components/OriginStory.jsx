import { Leaf, PackageCheck, Sparkles } from 'lucide-react';

const items = [
  { icon: Leaf, title: 'Direct Origin', text: 'Fokus ke biji kopi Nusantara dari origin yang jelas.' },
  { icon: Sparkles, title: 'Fresh Character', text: 'Setiap bean punya notes, process, dan roast profile sendiri.' },
  { icon: PackageCheck, title: 'Ready to Ship', text: 'Order langsung via WhatsApp dengan format pesanan otomatis.' },
];

export default function OriginStory() {
  return (
    <section className="section origin-section" id="origin">
      <div className="origin-panel">
        <div>
          <p className="eyebrow">Why beans only?</p>
          <h2>Kita tidak jual vibes cafe. Kita jual karakter biji.</h2>
        </div>
        <p>
          Website ini dipangkas supaya fokus ke produk utama: bean. Jadi user tidak terdistraksi menu minuman, promo random, atau section yang terasa generik.
        </p>
      </div>

      <div className="value-grid">
        {items.map(({ icon: Icon, title, text }) => (
          <article key={title} className="value-card">
            <Icon size={24} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
