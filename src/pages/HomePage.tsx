import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => (
  <>
    <section className="hero">
      <div className="container">
        <div className="hero__row">
          <div className="hero__text">
            <div className="hero__badge">IT-решения для науки</div>
            <h1>
              Индивидуальные IT-решения<br />
              <span>для научной отрасли</span>
            </h1>
            <p className="hero__sub">
              Создание программного обеспечения и тестирование информационных систем
              для научно-исследовательских организаций
            </p>
            <div className="hero__actions">
              <Link to="/order" className="btn btn--primary btn--lg">Оставить заявку</Link>
              <Link to="/solutions" className="btn btn--ghost btn--lg">
                Наши продукты
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
          <div className="hero__img">
            <img src="/images/hero-main.png" alt="IT-решения для научной отрасли" />
          </div>
        </div>
      </div>
      <div className="hero__bg">
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>
    </section>

    <section className="section section--alt">
      <div className="container">
        <div className="section-header">
          <h2>Наши услуги</h2>
          <p>Полный цикл разработки и тестирования ПО для научных организаций</p>
        </div>
        <div className="svc-grid">
          <div className="svc-card--wide">
            <div className="svc-card__img"><img src="/images/svc-develop.png" alt="Разработка ПО" /></div>
            <div className="svc-card__content">
              <h3>Разработка ПО</h3>
              <p>Разработка ПО и баз данных по индивидуальным требованиям заказчика. Полный цикл: разработка, управление, тестирование и внедрение.</p>
            </div>
          </div>
          <div className="svc-card--wide svc-card--reverse">
            <div className="svc-card__img"><img src="/images/svc-test.png" alt="Тестирование ИС" /></div>
            <div className="svc-card__content">
              <h3>Тестирование информационных систем</h3>
              <p>Валидация компьютеризированных систем — подтверждение соответствия характеристик КС потребностям пользователя и нормативным требованиям.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>Клиенты и партнеры</h2>
          <p>Нам доверяют научно-исследовательские организации</p>
        </div>
        <div className="partners-bar">
          <img src="/images/partners.png" alt="Партнеры LabNeo" />
        </div>
      </div>
    </section>

    <section className="cta-section">
      <div className="container">
        <div className="cta-card">
          <h2>Нужно IT-решение для вашей лаборатории?</h2>
          <p>Оставьте заявку и мы подберем оптимальное решение под ваши задачи</p>
          <Link to="/order" className="btn btn--white btn--lg">Оставить заявку</Link>
        </div>
      </div>
    </section>
  </>
);

export default HomePage;
