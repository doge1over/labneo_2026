import React from 'react';
import { Link } from 'react-router-dom';
import './SolutionsPage.css';

interface Product {
  name: string;
  icon: string;
  tag: string;
  tagColor?: string;
  desc: string;
  features: string[];
  extras?: string[];
}

const products: Product[] = [
  {
    name: 'LB Control', icon: '/images/lb-control.png', tag: 'Основной продукт', tagColor: 'accent',
    desc: 'Основа для построения системы учета реактивов в научно-исследовательских центрах',
    features: ['Автоматизация учета реактивов', 'Отслеживание сроков годности', 'Проведение инвентаризации', 'Информация о заканчивающихся запасах', 'Контроль доступа сотрудников', 'Журнал учета по нормативным требованиям'],
    extras: ['Неограниченное кол-во пользователей', 'Адаптивность под потребности', 'Мониторинг с оповещениями', 'Пакет документации по валидации'],
  },
  { name: 'LB Mini', icon: '/images/lb-mini.png', tag: 'Компактный', tagColor: 'green', desc: 'Идеально для небольших лабораторий', features: ['Полный функционал для одного пользователя', 'Комбинируется с любыми модулями', 'Документация по валидации'] },
  { name: 'LB Cells', icon: '/images/lb-cells.png', tag: 'Модуль', desc: 'Учет клеточных линий для исследований in vitro', features: ['Дополнительный модуль для LB Control', 'Учет клеточных линий для исследований "in vitro"'] },
  { name: 'LBReactive', icon: '/images/lb-reactive.png', tag: 'Модуль', desc: 'Автоматизация контроля и учета реактивов', features: ['Контроль и учет реактивов', 'Отслеживание сроков годности', 'Информация о запасах', 'Контроль доступа сотрудников', 'Журнал учета по нормативам'] },
  { name: 'LBVerification', icon: '/images/lb-verification.png', tag: 'Модуль', desc: 'Контроль поверки оборудования', features: ['Контроль сроков поверки', 'Электронные паспорта и протоколы', 'Проверка по QR-коду с телефона'] },
  { name: 'LBSupport', icon: '/images/lb-support.png', tag: 'Модуль', desc: 'Система заявок и обратной связи', features: ['Заявки в отделы организации', 'Интеграция с IT-службой', 'Статус заявки в реальном времени', 'Категоризация обращений'] },
  { name: 'LBArchive', icon: '/images/lb-archive.png', tag: 'Модуль', desc: 'Формирование описей и архивация документов', features: ['Формирование описей', 'Электронный журнал', 'Поиск по различным критериям', 'Снижение нагрузки на архив'] },
];

const docs = [
  { title: 'Жизненный цикл ПО', href: 'https://labneo.ru/LBcontrol/Жизненый цикл ПО.pdf' },
  { title: 'Инструкция по установке', href: 'https://labneo.ru/LBcontrol/Инструкция по установке LBControl.pdf' },
  { title: 'Функциональные характеристики', href: 'https://labneo.ru/LBcontrol/Функциональные_характеристики_ПО.pdf' },
  { title: 'Руководство пользователя', href: 'https://labneo.ru/LBcontrol/Руководство пользователя LBcontrol.pdf' },
];

const requirements = [
  'Процессор — не менее 4 ядер',
  'Оперативная память — не менее 8 Гб',
  'Диск — не менее 20 Гб',
  'ОС: Astra Linux, Альт Линукс, РедОС',
  'Сеть — не ниже 10 Мбит/с',
  'Монитор — от 1024x768',
];

const CheckSvg: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-7" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const SolutionsPage: React.FC = () => (
  <>
    <section className="sol-hero">
      <div className="container">
        <div className="sol-hero__row">
          <div className="sol-hero__text">
            <div className="sol-hero__badge">Программный комплекс</div>
            <h1>LB Control</h1>
            <p>Основа для построения системы учета реактивов в научно-исследовательских центрах и лабораториях</p>
          </div>
          <div className="sol-hero__img">
            <img src="/images/hero-solutions.png" alt="LB Control" />
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-header"><h2>Продукты и модули</h2><p>Основные продукты и модули расширения</p></div>
        <div className="sol-grid">
          {products.map((p) => (
            <div className={`sol-card ${p.extras ? 'sol-card--featured' : ''}`} key={p.name}>
              <div className="sol-card__top">
                <div className="sol-card__icon"><img src={p.icon} alt={p.name} /></div>
                <div>
                  <span className={`sol-tag sol-tag--${p.tagColor || 'default'}`}>{p.tag}</span>
                  <h3>{p.name}</h3>
                  <p className="sol-card__desc">{p.desc}</p>
                </div>
              </div>
              <ul className="sol-card__list">
                {p.features.map((f, i) => (<li key={i}><CheckSvg />{f}</li>))}
              </ul>
              {p.extras && (
                <>
                  <div className="sol-card__divider" />
                  <div className="sol-card__extras-label">Преимущества</div>
                  <ul className="sol-card__list">
                    {p.extras.map((e, i) => (
                      <li key={i}><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round"/></svg>{e}</li>
                    ))}
                  </ul>
                </>
              )}
              <Link to="/order" className="sol-card__btn">Купить</Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section section--alt">
      <div className="container">
        <div className="section-header"><h2>Документация</h2></div>
        <div className="docs-grid">
          {docs.map((d) => (
            <a key={d.title} href={d.href} target="_blank" rel="noopener noreferrer" className="doc-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 3h7l4 4v10a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5"/><path d="M12 3v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <span>{d.title}</span>
              <svg className="doc-item__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 12l8-8m0 0H5m7 0v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-header" style={{textAlign:'left'}}><h2>Системные требования</h2><p>Минимальные требования для работы LB Control</p></div>
        <div className="req-grid">
          {requirements.map((r, i) => (<div className="req-item" key={i}><CheckSvg /><span>{r}</span></div>))}
        </div>
      </div>
    </section>
  </>
);

export default SolutionsPage;
