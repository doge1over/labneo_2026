import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OrderPage.css';

interface SoftwareOption {
  id: string;
  label: string;
  sub: string;
}

const softwareOptions: SoftwareOption[] = [
  { id: 'Control', label: 'LB Control', sub: 'Основной' },
  { id: 'Mini', label: 'LB Mini', sub: 'Компактный' },
  { id: 'Cells', label: 'LB Cells', sub: 'Модуль' },
  { id: 'Reactive', label: 'LBReactive', sub: 'Модуль' },
  { id: 'Verification', label: 'LBVerification', sub: 'Модуль' },
  { id: 'Support', label: 'LBSupport', sub: 'Модуль' },
  { id: 'Archive', label: 'LBArchive', sub: 'Модуль' },
];

interface FormData {
  name: string;
  email: string;
  software: string[];
  comments: string;
}

const OrderPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', software: [], comments: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleSoftware = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      software: prev.software.includes(id)
        ? prev.software.filter((s) => s !== id)
        : [...prev.software, id],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="ord-section">
        <div className="container">
          <div className="ord-success">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="20" stroke="var(--accent)" strokeWidth="2"/>
              <path d="M15 24l6 6 12-12" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2>Заявка отправлена</h2>
            <p>Мы свяжемся с вами в ближайшее время</p>
            <Link to="/" className="btn btn--ghost" style={{ marginTop: '1.5rem' }}>На главную</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="ord-section">
      <div className="container">
        <div className="ord-layout">
          <div className="ord-info">
            <div className="ord-info__badge">Заявка</div>
            <h1>Оставьте заявку на покупку ПО</h1>
            <p>Заполните форму и мы свяжемся с вами для уточнения деталей</p>
            <div className="ord-info__features">
              <div className="ord-info__feat">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3.5 10.5l4 4 9-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Бесплатная консультация</span>
              </div>
              <div className="ord-info__feat">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3.5 10.5l4 4 9-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Индивидуальный подход</span>
              </div>
              <div className="ord-info__feat">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3.5 10.5l4 4 9-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Техническая поддержка</span>
              </div>
            </div>
          </div>

          <form className="ord-form" onSubmit={handleSubmit}>
            <div className="ord-field">
              <label htmlFor="name">Имя</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Ваше имя" />
            </div>
            <div className="ord-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="example@mail.ru" />
            </div>
            <div className="ord-field">
              <label>Программное обеспечение</label>
              <div className="ord-sw-grid">
                {softwareOptions.map((opt) => (
                  <button key={opt.id} type="button" className={`ord-sw-item ${formData.software.includes(opt.id) ? 'ord-sw-item--active' : ''}`} onClick={() => toggleSoftware(opt.id)}>
                    <span className="ord-sw-item__name">{opt.label}</span>
                    <span className="ord-sw-item__sub">{opt.sub}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="ord-field">
              <label htmlFor="comments">Пожелания</label>
              <textarea id="comments" name="comments" value={formData.comments} onChange={handleChange} rows={3} placeholder="Дополнительная информация..." />
            </div>
            <button type="submit" className="ord-submit">
              Отправить заявку
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderPage;
