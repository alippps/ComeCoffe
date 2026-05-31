import { X, Send } from 'lucide-react';
import { formatRupiah, WA_NUMBER } from '../utils/format';

export default function CartDrawer({ open, cart, beans, onClose, onRemove }) {
  if (!open) return null;

  const total = cart.reduce((sum, item) => {
    const bean = beans.find((data) => data.id === item.id);
    return sum + (bean ? bean.price * item.qty : 0);
  }, 0);

  const sendOrder = () => {
    const lines = cart.map((item) => {
      const bean = beans.find((data) => data.id === item.id);
      return `• ${bean.name} ${bean.weight} x${item.qty} = ${formatRupiah(bean.price * item.qty)}`;
    });
    const message = encodeURIComponent(`Halo ComeCoffee, saya mau order bean:\n\n${lines.join('\n')}\n\nTotal: ${formatRupiah(total)}\n\nTolong konfirmasi stok dan ongkir ya.`);
    window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <aside className="cart-drawer" onClick={(event) => event.stopPropagation()}>
        <div className="drawer-head">
          <div>
            <p className="eyebrow">Checkout</p>
            <h2>Bean pilihanmu</h2>
          </div>
          <button onClick={onClose}><X size={20} /></button>
        </div>

        <div className="cart-list">
          {cart.length === 0 ? (
            <p className="empty-cart">Belum ada bean yang dipilih.</p>
          ) : cart.map((item) => {
            const bean = beans.find((data) => data.id === item.id);
            return (
              <div className="cart-item" key={item.id}>
                <span className={`cart-bean palette-${bean.palette}`}>🫘</span>
                <div>
                  <strong>{bean.name}</strong>
                  <small>{bean.weight} · x{item.qty}</small>
                </div>
                <b>{formatRupiah(bean.price * item.qty)}</b>
                <button onClick={() => onRemove(item.id)}>×</button>
              </div>
            );
          })}
        </div>

        {cart.length > 0 && (
          <div className="drawer-footer">
            <div><span>Total</span><strong>{formatRupiah(total)}</strong></div>
            <button onClick={sendOrder}><Send size={17} /> Order via WhatsApp</button>
          </div>
        )}
      </aside>
    </div>
  );
}
