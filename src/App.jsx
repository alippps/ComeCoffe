import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BeanGrid from './components/BeanGrid';
import OriginStory from './components/OriginStory';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { beans as beanData } from './data/beans';

export default function App() {
  const [beans] = useState(beanData);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Semua');

  const addToCart = (bean) => {
    if (bean.stock === 0) return;
    setCart((items) => {
      const current = items.find((item) => item.id === bean.id);
      if (current) return items.map((item) => item.id === bean.id ? { ...item, qty: item.qty + 1 } : item);
      return [...items, { id: bean.id, qty: 1 }];
    });
    setCartOpen(true);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <main>
      <Navbar totalItems={totalItems} onCart={() => setCartOpen(true)} />
      <Hero />
      <BeanGrid beans={beans} activeFilter={activeFilter} setActiveFilter={setActiveFilter} onAdd={addToCart} />
      <OriginStory />
      <Footer />
      <CartDrawer open={cartOpen} cart={cart} beans={beans} onClose={() => setCartOpen(false)} onRemove={(id) => setCart((items) => items.filter((item) => item.id !== id))} />
    </main>
  );
}
