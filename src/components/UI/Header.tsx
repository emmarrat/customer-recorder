import React from 'react';
import {Link} from 'react-router-dom';
import './UI.css';
import '../../App.css';
import {useAppSelector} from "../../app/hooks";
import {selectedItems} from "../../features/services/servicesSlice";
import {HandySvg} from 'handy-svg';
import icon from '../../assets/icons/shopping-bag.svg';


const Header = () => {
  const selectedServices = useAppSelector(selectedItems);

  return (
    <div className="header">
      <div className="container header__wrapper">
        <div className="logo"><Link to="/">Aijana brows</Link></div>
        <div className="header__links">
          <Link to="/my-works">Мои работы</Link>
          <Link className="header__service-link" to="/book-place">
            Записаться на процедуру
            <HandySvg
              src={icon}
              className="icon"
              width="20"
              height="20"
            />
            <span className="badge">{selectedServices.length}</span>
          </Link>

        </div>
      </div>
    </div>

  );
};

export default Header;