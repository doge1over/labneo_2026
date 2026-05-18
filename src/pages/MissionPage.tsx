import React from 'react';
import './MissionPage.css';

const MissionPage: React.FC = () => (
  <>
    <section className="ms-hero">
      <div className="container">
        <div className="ms-hero__row">
          <div className="ms-hero__text">
            <div className="ms-hero__badge">Миссия</div>
            <h1>О компании LabNeo</h1>
          </div>
          <div className="ms-hero__img">
            <img src="/images/mission.png" alt="Миссия LabNeo" />
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="ms-mission">
          <div className="ms-mission__line" />
          <p className="ms-mission__text">
            В наши задачи входит в тесной связи с ведущими учеными институтов и научных
            организаций России и дружественных стран создать российское программное
            обеспечение, которое обеспечивало бы единое информационное пространство,
            со встроенными алгоритмами поиска и сортировки информации для построения
            качественного дизайна эксперимента на животных, согласованное с нормативными
            актами Российской Федерации и ЕАЭК.
          </p>
        </div>
      </div>
    </section>

    <section className="section section--alt">
      <div className="container">
        <div className="ms-contact-row">
          <div className="ms-contact-img">
            <img src="/images/contacts.png" alt="Контакты" />
          </div>
          <div className="ms-contact-info">
            <h2>Контактная информация</h2>
            <div className="ms-contacts">
              <div className="ms-contact-card">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <div><span className="ms-contact-card__label">Часы работы</span><span className="ms-contact-card__value">пн-пт, 9:00 — 18:00</span></div>
              </div>
              <a href="mailto:info@labneo.ru" className="ms-contact-card ms-contact-card--link">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M2 6l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <div><span className="ms-contact-card__label">Email</span><span className="ms-contact-card__value">info@labneo.ru</span></div>
              </a>
              <a href="tel:+79968158524" className="ms-contact-card ms-contact-card--link">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 4.5C3 3.672 3.672 3 4.5 3H7l1.5 4-2 1.5a10.5 10.5 0 005 5L13 11.5l4 1.5v2.5c0 .828-.672 1.5-1.5 1.5A13.5 13.5 0 013 4.5z" stroke="currentColor" strokeWidth="1.5"/></svg>
                <div><span className="ms-contact-card__label">Телефон</span><span className="ms-contact-card__value">+7 (996) 815-85-24</span></div>
              </a>
              <div className="ms-contact-card">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" stroke="currentColor" strokeWidth="1.5"/><path d="M10 18s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z" stroke="currentColor" strokeWidth="1.5"/></svg>
                <div><span className="ms-contact-card__label">Адрес</span><span className="ms-contact-card__value">188663, Ленинградская обл., ГП Кузьмоловский, ул. Заводская, д. 3, к. 245, ком. 4.25</span></div>
              </div>
            </div>
            <div className="ms-legal">
              <div className="ms-legal__item"><span className="ms-legal__label">Юр. лицо</span><span>ООО "ЛАБНЕО"</span></div>
              <div className="ms-legal__item"><span className="ms-legal__label">ИНН</span><span>4706053555</span></div>
              <div className="ms-legal__item"><span className="ms-legal__label">КПП</span><span>470601001</span></div>
              <div className="ms-legal__item"><span className="ms-legal__label">ОКВЭД</span><span>62.01</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default MissionPage;
