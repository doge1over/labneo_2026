import React from 'react';
import './TeamPage.css';

const TeamPage: React.FC = () => (
  <>
    <section className="team-hero">
      <div className="container">
        <div className="team-hero__row">
          <div className="team-hero__text">
            <div className="team-hero__badge">О компании</div>
            <h1>Наша команда</h1>
          </div>
          <div className="team-hero__img">
            <img src="/images/team.png" alt="Команда LabNeo" />
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="team-content">
          <div className="team-block">
            <div className="team-block__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h2>Экспертиза</h2>
            <p>Мы — компания, основанная на знаниях, с высококвалифицированным персоналом. Мы гордимся своей способностью понимать и общаться с вами по поводу сложностей ваших проектов, а также использовать наши устоявшиеся процессы и технологии для удовлетворения ваших конкретных потребностей.</p>
          </div>
          <div className="team-block">
            <div className="team-block__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.8 7.1 18.2l.9-5.5-4-3.9 5.5-.8L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2>Научная составляющая</h2>
            <p>Благодаря тесным связям с ведущими учеными институтов и научных организаций России и дружественных стран мы разрабатываем продукт с высокой научной составляющей, и с учетом регуляторных требований в области обращения лекарственных средств.</p>
          </div>
        </div>
        <div className="team-stats">
          <div className="team-stat"><span className="team-stat__num">62.01</span><span className="team-stat__label">Код ОКВЭД</span></div>
          <div className="team-stat"><span className="team-stat__num">IT</span><span className="team-stat__label">Разработка ПО</span></div>
          <div className="team-stat"><span className="team-stat__num">GxP</span><span className="team-stat__label">Соответствие стандартам</span></div>
        </div>
      </div>
    </section>
  </>
);

export default TeamPage;
