import { useState } from "react";
import heroImg from "./assets/hero-photo.jpg";
import aboutImg from "./assets/about-photo.jpg";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="container header__content">

          <button
            className="mobile-menu-button"
            type="button"
            aria-label="Открыть меню"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className="nav">
            <a href="#approach">Подход</a>
            <a href="#about">Обо мне</a>
            <a href="#contact">Контакты</a>
          </nav>

          <nav
            className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
            id="mobile-menu"
            aria-label="Мобильная навигация"
          >
            <a href="#approach" onClick={closeMenu}>
              Подход
            </a>
            <a href="#about" onClick={closeMenu}>
              Обо мне
            </a>
            <a href="#contact" onClick={closeMenu}>
              Контакты
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__photo-wrap">
              <img
                className="hero__photo"
                src={heroImg}
                alt="Владислав Едигарев — психоаналитик и клинический психолог"
              />
            </div>

            <div className="hero__content">
              <p className="eyebrow">Онлайн и очно · конфиденциально</p>

              <h1>
                Психоаналитик,
                <br />
                клинический психолог
                <br />
                Владислав Едигарев
              </h1>



              <div className="hero__actions">
                <a className="button button--dark" href="#contact">
                  Записаться на встречу
                </a>

                <a className="button button--outline" href="#approach">
                  О психоанализе
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="approach" id="approach">
          <div className="container approach__content">
            <p className="eyebrow">О подходе</p>

            <h2>Психоанализ — это точка абсолютной свободы</h2>

            <p>
              Всё человеческое в человеке основано на языке, и потому
              исследование собственной речи не только позволяет создать нечто
              новое внутри себя, но и освобождает саму натуру.
              <br />
              <br />
              На этом построен психоанализ. И это выражено его основным
              правилом: «Вам необходимо говорить абсолютно всё, что приходит в
              вашу голову».
              <br />
              <br />
              Это такой вид взаимоотношений, где в течение часа вы
              разворачиваете свой внутренний мир, а собеседник сопровождает вас
              и вместе с вами ищет в нём новые, зачастую неожиданные
              пространства, которые в основном недоступны нам в повседневной
              жизни.
              <br />
              <br />
              Это путешествие, такое же уникальное и трудное, как и сама жизнь.
              В одни моменты мы, как археологи, по крупицам обнаруживаем и
              воссоздаём ваше давно забытое прошлое. В другие — исследуем,
              какие неочевидные мысли скрывают слова, которые вы сейчас
              говорите. В третьи — обсуждаем наше взаимодействие, его детали и
              атмосферу. В четвёртые — говорим о смыслах, которые вы порождаете,
              и их переплетениях с вашей жизнью.
              <br />
              <br />
              Эта безграничная многогранность стала фундаментом многообразия
              современной психотерапии, большая часть методов которой произошла
              из психоанализа.
              <br />
              <br />
              Всё человеческое в человеке — это результат познания. Поэтому
              высшая точка человеческого бытия — это познание самого себя. Об
              этом знали ещё древние греки. Это доступно и нам.
            </p>
          </div>
        </section>

        <section className="intro" id="about">
          <div className="container intro__grid">
            <div className="intro__side">
              <p className="eyebrow">О специалисте</p>

              <div className="about-photo-wrap">
                <img
                  className="about-photo"
                  src={aboutImg}
                  alt="Владислав Едигарев, психоаналитик и клинический психолог"
                />
              </div>
            </div>

            <div>
              <h2>Приглашаю вас на сеанс</h2>

              <p>
                Я психоаналитик, по образованию клинический психолог.
                По основной специализации проходил практическую подготовку в государственной психиатрической больнице.
                Повышал квалификацию по психоанализу на дополнительных годичных курсах при университете.

              </p>

              <p>
                Два года веду частную практику онлайн и в очном формате (в городе Ростов-на-Дону).
                Помимо этого четыре года подряд читаю краткий курс лекций по Фрейдовскому психоанализу в Донском государственном техническом университете, а также в частном порядке руковожу кружком чтения психоаналитической литературы.

              </p>

              <p>
                 Собственный анализ продолжается шесть лет. Работаю под регулярной супервизией.
              </p>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact__content">
            <p className="eyebrow">Запись на встречу</p>

            <h2>Можно начать с первого разговора</h2>

            <p>
              Напишите, чтобы уточнить формат, доступное время и задать интересующие вас вопросы.

            </p>

            <a
              className="button button--contact"
              href="https://t.me/EdigarevVladislav"
              target="_blank"
              rel="noreferrer"
            >
              Написать в Telegram
            </a>

            <p className="contact-email">
              Электронная почта:{" "}
              <a href="mailto:edigarevvladislav@gmail.com">
                edigarevvladislav@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;