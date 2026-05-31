import { WA_NUMBER } from '../utils/format';

export default function Footer() {
  return (
    <footer className="footer" id="order">
      <div>
        <strong>ComeCoffeee</strong>
        <p>Specialty coffee beans from Indonesia. Bean only, clear origin, ready to brew.</p>
      </div>
      <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer">Chat WhatsApp</a>
    </footer>
  );
}
