import BeanCard from './BeanCard';

const filters = ['Semua', 'Washed', 'Natural', 'Honey', 'Wet-Hulled'];

export default function BeanGrid({ beans, activeFilter, setActiveFilter, onAdd }) {
  const filteredBeans = activeFilter === 'Semua' ? beans : beans.filter((bean) => bean.process === activeFilter);

  return (
    <section className="section beans-section" id="beans">
      <div className="section-heading">
        <p className="eyebrow">Bean catalog</p>
        <h2>Pilih biji, bukan pilih template.</h2>
        <p>Katalog dibuat lebih hidup dengan warna per origin, shape organik, dan card yang tidak terlalu kaku.</p>
      </div>

      <div className="filter-row">
        {filters.map((filter) => (
          <button key={filter} className={activeFilter === filter ? 'active' : ''} onClick={() => setActiveFilter(filter)}>
            {filter}
          </button>
        ))}
      </div>

      <div className="beans-grid">
        {filteredBeans.map((bean) => <BeanCard key={bean.id} bean={bean} onAdd={onAdd} />)}
      </div>
    </section>
  );
}
