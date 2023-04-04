import React from 'react';
import {BsWhatsapp, BsInstagram, BsGithub} from "react-icons/bs";
import {GoLocation} from "react-icons/go";

const Footer = () => {
  return (
      <div className="container footer-wrapper">
        <div className="footer-left">
          <div className="footer-left__inner">
            <span>Адрес:</span>
            <a href="https://go.2gis.com/3gpfa" target="_blank" rel="noreferrer" className="address-link">
              <GoLocation/> ТЦ "Евразия", 4-й этаж, 407 кабинет</a>
          </div>
          <div className="footer-left__inner">
            <span>Свяжитесь со мной:</span>
            <a href="https://wa.me/996995708885" target="_blank" rel="noreferrer"
               className="social-link">
              <BsWhatsapp/>
            </a>
            <a href="https://www.instagram.com/aijanabrows/" target="_blank" rel="noreferrer"
               className="social-link">
              <BsInstagram/>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="authors-block">
            <p className="authors-header">© Данное веб-приложение было создано усилиями: </p>
            <a href="https://github.com/faralost" target="_blank" rel="noreferrer" className="authors-link">
              <BsGithub/> Back-end: Farkhatzhan Makhmudov
            </a>
            <a href="https://github.com/emmarrat" target="_blank" rel="noreferrer" className="authors-link">
              <BsGithub/> Front-end: Emir Marat
            </a>
          </div>
        </div>
      </div>
  );
};

export default Footer;