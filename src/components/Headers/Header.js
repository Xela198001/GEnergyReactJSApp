/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

// import logo from './logo.svg';
//  import Ap from'../../App';

function Header() {
  return (
    <div className="header">
            <div className="header__top">
              <div className="header__top__button">
                <a href="№" className="header__top__button__link" target="_blank" rel="noopener noreferrer">Получите
                            подарок</a>
              </div>
              <div className="header__top__search">
                <form action="">
                  <input type="text" name="search" id="search" />
                </form>
              </div>
              <div className="header__top__lang">
                <ul>
                  <li>
                    <a href="/" className="country"></a>
                    <a href="" className="country"></a>
                    <a href="" className="country"></a>
                    <a href="" className="country"></a>
                    <a href="" className="country"></a>
                  </li>
                </ul>

              </div>
              <div className="header__top__social">
                <div className="header__top__social__facebook">
                  <a href="" className="header__top__social__facebook__link"></a>
                </div>
                <div className="header__top__social__youtube">
                  <a href="" className="header__top__social__youtube__link"></a>
                </div>

              </div>
              <div className="header__top__email">
                <div className="header__top__email__icon">
                  <a href="" className="header__top__email__icon__link">напишите нам</a>
                </div>

              </div>
            </div>
            <div className="navigation">
              <div className="nav">
                <ul>
                  <li className="menu__item"><a href="/" className="menu__item__link link__first" title="главная"><img
                    src="img/home.svg" alt="" /></a></li>
                  <li className="menu__item"><a href="" className="menu__item__link">о бренде</a></li>
                  <li className="menu__item"><a href="" className="menu__item__link">продукция</a></li>
                  <li className="menu__item"><a href="" className="menu__item__link">подбор масла</a></li>
                  <li className="menu__item"><a href="" className="menu__item__link">где купить</a></li>
                  <li className="menu__item"><a href="" className="menu__item__link">G-Energy Service</a></li>
                  <li className="menu__item"><a href="" className="menu__item__link">новости</a></li>
                </ul>
              </div>
              <div className="navigation__logo">
                <img src="img/logo.svg" alt="" />
              </div>

            </div>
          </div>
          
    );
}

export default Header;