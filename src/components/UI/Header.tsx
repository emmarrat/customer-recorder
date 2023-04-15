import React from 'react';
import {Link} from 'react-router-dom';
import './UI.css';
import '../../App.css';
import {useAppSelector} from "../../app/hooks";
import {selectBookedDatetime, selectBookedServices} from "../../features/services/servicesSlice";
import { BsBagHeart } from "react-icons/bs";


const Header = () => {
  const selectedServices = useAppSelector(selectBookedServices);
  const selectedDatetime = useAppSelector(selectBookedDatetime);

  return (
    <div className="header">
      <div className="container header__wrapper">
        <div className="logo"><Link to="/">Aijana brows</Link></div>
        <div className="header__links">
          <Link className="header__link" to="/my-works">Мои работы</Link>
          {!selectedDatetime && <Link className="header__link" to="/book-date">Выбрать день и время</Link> }
          {(selectedDatetime && selectedServices.length > 0) && <Link className="header__link" to="/book-customer">Оформить запись</Link>}
          {selectedServices.length === 0 && <Link className="header__link"  to="/">Выбрать услуги</Link>}
        </div>
      </div>
      {(selectedServices.length > 0 || selectedDatetime) &&
          <div className="header__cart">
              <div className="divider"></div>
              <div className="container header__down">
                  <Link to="/cart" className="header__link header__link_cart" style={{display: 'flex', alignItems: 'center'}}>
                      Выбранные процедуры
                      <BsBagHeart style={{margin: '0 5px 0 10px'}}/>
                      <span className="badge">{selectedServices.length}</span>
                  </Link>
              </div>
          </div>
      }
    </div>

  );
};

export default Header;