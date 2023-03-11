import React, {useState} from 'react';
import {Customer} from "../../../../types";
import './CustomerForm.css';


const CustomerForm = () => {
  const [customer, setCustomer] = useState<Customer>({
    name: '',
    phone: ''
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setCustomer(prevState => {
      return {...prevState, [name]: value};
    });
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(customer);
  };

  return (
      <form onSubmit={onFormSubmit}>
        <fieldset className="form__fieldset">
          <legend>Пожалуйста, заполните анкету</legend>
        <div className="form__wrapper">
          <div className="form__item">
            <input
              type="text"
              id="name"
              name="name"
              value={customer.name}
              onChange={onChangeHandler}
              placeholder="Ваше имя"
              className="form__input"
            />
          </div>
          <div className="form__item">
            <input
              type="text"
              id="phone"
              name="phone"
              value={customer.phone}
              onChange={onChangeHandler}
              placeholder="Ваш номер телефона"
              className="form__input"
            />
          </div>
          <div className="form__item">
            <button type="submit" className="button">Записаться на процедуру</button>
          </div>
        </div>
        </fieldset>
      </form>
  )
};

export default CustomerForm;