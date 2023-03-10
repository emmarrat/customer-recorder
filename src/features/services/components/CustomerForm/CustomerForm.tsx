import React, {useState} from 'react';
import {PostData} from "../../../../types";
import './CustomerForm.css';
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {selectBookedDatetime, selectBookedServices} from "../../servicesSlice";
import {useNavigate} from "react-router-dom";
import PhoneInput from 'react-phone-input-2'
import {createAppointment} from "../../servicesThunks";


const CustomerForm = () => {
  const dispatch = useAppDispatch();
  const services = useAppSelector(selectBookedServices);
  const date = useAppSelector(selectBookedDatetime);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('')

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   setName(e.target.value)
  };


  const validatePhoneNumber = (phoneNumber: string) => {
    if (phoneNumber.slice(0, 3) !== "996") {
      return false;
    }

    if (phoneNumber.length !== 12) {
      return false;
    }

    return true;
  };


  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (services.length === 0) {
      return navigate('/book-place');
    }
    if (!date) {
      return navigate('/book-place');
    }

    const validatedNumber = validatePhoneNumber(phone);

    if(!validatedNumber) {
      return alert( `Укажите телефонный номер в прафильном формате "+996 XXX XXX XXX" `)
    }

    const obj: PostData = {
      customer_full_name: name,
      customer_phone: '+'+phone,
      business_hour: date.id,
      services: services.map(service => service.id),
    }
    await dispatch(createAppointment(obj));

    console.log(obj);
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
              value={name}
              onChange={onNameChange}
              placeholder="Ваше имя"
              className="form__input"
            />
          </div>
          <div  className="form__item">
            <PhoneInput
              country={'kg'}
              value={phone}
              onChange={setPhone}
              placeholder="+996 XXX XXX XXX"
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