import React from 'react';
import {Link} from 'react-router-dom';
import './UI.css';
import '../../App.css';
import {useAppSelector} from "../../app/hooks";
import {selectBookedDatetime, selectBookedServices} from "../../features/services/servicesSlice";
import {HandySvg} from 'handy-svg';
import icon from '../../assets/icons/shopping-bag.svg';


const Header = () => {
  const selectedServices = useAppSelector(selectBookedServices);
  const selectedDatetime = useAppSelector(selectBookedDatetime);

  return (
    <div className="header">
      <div className="container header__wrapper">
        <div className="logo"><Link to="/">Aijana brows</Link></div>
        <div className="header__links">
          <Link className="header__link" to="/my-works">Мои работы</Link>
          <Link className="header__link" to="/book-date">
            {selectedDatetime === null || selectedServices.length === 0 ? 'Выбрать день и время' : 'Оформить запись'}
          </Link>
        </div>
      </div>
      {selectedServices.length > 0 &&
          <>
              <div className="divider"></div>
              <div className="container header__down">
                  <Link to="/cart" className="header__link header__link_cart">
                      Выбранные процедуры
                      <HandySvg
                          src={icon}
                          className="icon"
                          width="20"
                          height="20"
                      />
                      <span className="badge">{selectedServices.length}</span>
                  </Link>
              </div>
          </>
      }
    </div>

  );
};

export default Header;