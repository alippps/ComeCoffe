import { Plus, MapPin } from 'lucide-react';
import beanBagImage from '../assets/coffee-bean-bag.svg';
import { formatRupiah } from '../utils/format';

export default function BeanCard({ bean, onAdd }) {
  const soldOut = bean.stock === 0;
  const handleAdd = () => {
    if (!soldOut) onAdd(bean);
  };

  return (
    <article className={`bean-card palette-${bean.palette} ${soldOut ? 'is-soldout' : ''}`}>
      <div className="bean-card-glow" />
      <div className="bean-topline">
        <span className="bean-tag">{bean.tag}</span>
        <span className="bean-stock">{soldOut ? 'Habis' : `${bean.stock} pack`}</span>
      </div>

      <div className="bean-visual">
        <img src={beanBagImage} alt={`${bean.name} coffee bean template`} />
      </div>

      <div className="bean-location"><MapPin size={14} /> {bean.origin} Â· {bean.altitude}</div>
      <h3>{bean.name}</h3>
      <p>{bean.desc}</p>

      <div className="flavor-list">
        {bean.flavor.map((item) => <span key={item}>{item}</span>)}
      </div>

      <div className="bean-meta">
        <span><small>Process</small>{bean.process}</span>
        <span><small>Roast</small>{bean.roast}</span>
        <span><small>Weight</small>{bean.weight}</span>
      </div>

      <div className="bean-buy">
        <strong>{formatRupiah(bean.price)}</strong>
        <button type="button" disabled={soldOut} onClick={handleAdd}>
          <Plus size={16} /> {soldOut ? 'Sold' : 'Add'}
        </button>
      </div>
    </article>
  );
}
