/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

// import logo from './logo.svg';
//  import Ap from'../../App';

function Main() {
  return (
<div className="footer">
            <div className="footer__partner">
              <div className="footer__logo">
                <img src="img/gasprom.svg" alt="" />
              </div>
              <div className="footer__social">
                <div className="facebook">
                  <a href="http://facebook.com" className="facebook__link"></a>
                </div>
                <div className="youtube">
                  <a href="http://youtube.com" className="youtube__link"></a>
                </div>
                <div className="email">
                  <a href="#" className="email__link"></a>
                </div>

              </div>
              <div className="partner__logo">
                <img className="partner__logo__chery" src="img/chery.svg" alt="" />
                <img className="partner__logo__lifan" src="img/lifanMotors.svg" alt="" />
              </div>

            </div>
            <div className="footer__share__like">

              <div className="footer__share__like__like">
                <div className="footer__share__like__like__text">мне нравится</div>
                <div className="footer__share__like__like__facebook">
                  <a href="facebook.com" className="footer__share__like__like__facebook__link"></a>
                </div>
                <div className="footer__share__like__like__vk">
                  <a href="facebook.com" className="footer__share__like__like__vk__link"></a>
                </div>
                <div className="footer__share__like__like__twetter">
                  <a href="facebook.com" className="footer__share__like__like__twetter__link"></a>
                </div>

              </div>
              <div className="footer__share__like__share">
                <div className="footer__share__like__share__text">поделиться</div>
                <div className="footer__share__like__share__facebook">
                  <a href="" className="footer__share__like__share__facebook__link"></a>
                </div>
                <div className="footer__share__like__share__vk">
                  <a href="" className="footer__share__like__share__vk__link"></a>
                </div>
                <div className="footer__share__like__share__ok">
                  <a href="" className="footer__share__like__share__ok__link"></a>
                </div>
                <div className="footer__share__like__share__twetter">
                  <a href="" className="footer__share__like__share__twetter__link"></a>
                </div>

              </div>

            </div>
            <div className="footer__copy">
              <div className="copyright">
                <p>&copy; 009–2014, «Газпромнефть - смазочные материалы», <a className="contact"
                  href="#">Контакты</a></p>
              </div>
              <div className="footer__copy__lang">
                <ul>
                  <li className="footer__item item__first"><a href="" className="footer__item__link first">русский</a>
                  </li>
                  <li className="footer__item"><a href="" className="footer__item__link">english</a></li>
                  <li className="footer__item"><a href="" className="footer__item__link">italian</a></li>
                  <li className="footer__item"><a href="" className="footer__item__link">српски</a></li>
                </ul>
              </div>
              <div className="footer__webstodio">
                <p>Создание сайта – <a href="#" className="link">«Энсайн»</a></p>

              </div>


            </div>

          </div>
  )
}

export default Main;
