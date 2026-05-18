import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="ftr">
    <div className="container">
      <div className="ftr__top">
        <div className="ftr__brand">
          <Link to="/" className="ftr__logo">
            <img src="/images/logo.png" alt="LabNeo" className="ftr__logo-img" />
          </Link>
          <p>IT-решения для научной отрасли</p>
        </div>

        <div className="ftr__col">
          <h4>Навигация</h4>
          <Link to="/">Главная</Link>
          <Link to="/solutions">Решения</Link>
          <Link to="/team">Команда</Link>
          <Link to="/about">О нас</Link>
          <Link to="/order">Заявка</Link>
        </div>

        <div className="ftr__col">
          <h4>Контакты</h4>
          <a href="tel:+79968158524">+7 (996) 815-85-24</a>
          <a href="mailto:info@labneo.ru">info@labneo.ru</a>
          <p>пн-пт, 9:00 — 18:00</p>
        </div>

        <div className="ftr__col">
          <h4>Адрес</h4>
          <p>188663, Ленинградская обл.,<br/>ГП Кузьмоловский,<br/>ул. Заводская, д. 3,<br/>корп. 245, ком. 4.25</p>
        </div>
      </div>

      <div className="ftr__bottom">
        <div className="ftr__legal">
          <p>ООО "ЛабНео" | ИНН 4706053555 | КПП 470601001 | ОКВЭД 62.01</p>
        </div>
        <p className="ftr__copy">&copy; {new Date().getFullYear()} LabNeo. Все права защищены.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
