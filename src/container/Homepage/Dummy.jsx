import React, { useState } from 'react';
import { images, data } from '../../constants';
import { DarkMode, Footer } from '../../components';

const Dummy = () => {
  const [activeTab, setTab] = useState(1);

  const toggleTab = (index) => {
    setTab(index);
  };

  const ProfileHeader = () => {
    return (
      <header className="profile container">
        <DarkMode />

        <div className="profile__container grid">
          <div className="profile__data">
            <div className="profile__border">
              <div className="profile__perfil">
                <img src={images.profile_img} alt="" />
              </div>
            </div>

            <h2 className="profile__name">Akmal Adnan</h2>
            <h3 className="profile__profession">Developer</h3>

            <ul className="profile__social">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="profile__social-link"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="profile__social-link"
              >
                <i className="ri-linkedin-box-line"></i>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                className="profile__social-link"
              >
                <i className="ri-github-line"></i>
              </a>
            </ul>
          </div>

          <div className="profile__info grid">
            <div className="profile__info-group">
              <h3 className="profile__info-number">7</h3>
              <p className="profile__info-description">
                Years of <br /> work
              </p>
            </div>
            <div className="profile__info-group">
              <h3 className="profile__info-number">+124</h3>
              <p className="profile__info-description">
                Completed <br /> projects
              </p>
            </div>
            <div className="profile__info-group">
              <h3 className="profile__info-number">96</h3>
              <p className="profile__info-description">
                Satisfied <br /> customers
              </p>
            </div>
          </div>

          <div className="profile__buttons">
            <a download="" href="assets/pdf/Gianell-Cv.pdf" className="button">
              Download CV <i className="ri-download-line"></i>
            </a>

            <div className="profile__buttons-small">
              <a
                href="https://api.whatsapp.com/send?phone=51123456789&text=Hello, more information!"
                target="_blank"
                className="button button__small button__gray"
              >
                <i className="ri-whatsapp-line"></i>
              </a>

              <a
                href="https://m.me/bedimcode"
                target="_blank"
                className="button button__small button__gray"
              >
                <i className="ri-messenger-line"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  };

  return (
    <>
      <ProfileHeader />
      <main className="main">
        <section className="filters container">
          <ul className="filters__content">
            <button
              className={`filters__button ${
                activeTab === 1 && 'filter-tab-active'
              }`}
              onClick={() => toggleTab(1)}
            >
              Projects
            </button>
            <button
              className={`filters__button ${
                activeTab === 2 && 'filter-tab-active'
              }`}
              onClick={() => toggleTab(2)}
            >
              Skills
            </button>
          </ul>

          <div className="filters__sections">
            <div
              className={`projects__content grid ${
                activeTab === 1 ? 'filters__active' : 'filters__nonactive'
              }`}
              id="projects"
            >
              {data.works.map((item) => {
                return (
                  <article className="projects__card" key={item.id}>
                    {/* <!-- Insert your image in a rectangular format (Ex: 600 x 400, 1000 x 800, 1200 x 1000, etc) --> */}
                    <img src={item.image} alt="" className="projects__img" />

                    <div className="projects__modal">
                      <div>
                        <span className="projects__subtitle">
                          {item.projectType}
                        </span>
                        <h3 className="projects__title">{item.projectName}</h3>
                        <a
                          href={item.linkUrl}
                          className="projects__button button button__small"
                          target="_blank"
                        >
                          <i className="ri-link"></i>
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div
              className={`skills__content grid ${
                activeTab === 2 ? 'filters__active' : 'filters__nonactive'
              }`}
              id="skills"
            >
              <div className="skills__area">
                <h3 className="skills__title">Frontend Developer</h3>

                <div className="skills__box">
                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Basic</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Advanced</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">Bootstrap</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="skills__area">
                <h3 className="skills__title">Backend Developer</h3>

                <div className="skills__box">
                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">Advance</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">Firebase</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills__group">
                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Basic</span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <i className="ri-checkbox-circle-line"></i>

                      <div>
                        <h3 className="skills__name">Node Js</h3>
                        <span className="skills__level">Intermediate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Dummy;
