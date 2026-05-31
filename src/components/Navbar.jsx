import { ShoppingBag, Sprout } from 'lucide-react';

export default function Navbar({ totalItems, onCart }) {
  return (
    <header className="nav-shell">
      <a className="brand" href="#home" aria-label="ComeCoffeee home">
        <span className="brand-mark"><Sprout size={20} /></span>
        <span>
          <strong>ComeCoffeee</strong>
          <small>single origin beans</small>
        </span>
      </a>

      <nav className="nav-links">
        <a href="#beans">Beans</a>
        <a href="#origin">Origin</a>
        <a href="#order">Order</a>
      </nav>

      <button className="cart-button" onClick={onCart}>
        <ShoppingBag size={18} />
        <span>Cart</span>
        {totalItems > 0 && <b>{totalItems}</b>}
      </button>
    </header>
  );
}
