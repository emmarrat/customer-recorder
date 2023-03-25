import React, {useState} from 'react';
import {PostData} from "../../../../types";
import './CustomerForm.css';
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {selectBookedDatetime, selectBookedServices} from "../../servicesSlice";
import {useNavigate} from "react-router-dom";
import PhoneInput from 'react-phone-input-2'
import {createAppointment} from "../../servicesThunks";
import Modal from "../../../../components/UI/Modal";


const CustomerForm = () => {
  const dispatch = useAppDispatch();
  const services = useAppSelector(selectBookedServices);
  const date = useAppSelector(selectBookedDatetime);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('')
  const [isModal, setModal] = useState(false);

  const onClose = () => setModal(false);

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    if (phoneNumber.slice(0, 3) !== "996") {
      return false;
    }
    return phoneNumber.length === 12;
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (services.length === 0 || !date) {
      return setModal(true);
    }
    const validatedNumber = validatePhoneNumber(phone);

    if (!validatedNumber) {
      return setModal(true);
    }

    const obj: PostData = {
      customer_full_name: name,
      customer_phone: '+' + phone,
      business_hour: date.id,
      services: services.map(service => service.id),
    }
    try {
      await dispatch(createAppointment(obj));
      setName('');
      setPhone('');
      navigate('/congrats');
    } catch (e) {
      setModal(true);
      return (
        <Modal
          visible={isModal}
          content={<p> Произошла ошибка! Попробуйте занова :)</p>}
          onClose={onClose}
        />
      )
    }

  };

  return (
    <>
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
                required
              />
            </div>
            <div className="form__item">
              <PhoneInput
                country={'kg'}
                value={phone}
                onChange={setPhone}
                placeholder="+996 XXX XXX XXX"
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: true
                }}
              />
            </div>

            <div className="form__item">
              <button type="submit" className="button">Записаться на процедуру</button>
            </div>
          </div>
        </fieldset>
      </form>
      <Modal
        visible={isModal}
        content={
          <p>{services.length === 0 || !date ? 'Пожалуйста, выберите желаемую процедуру и удобное время для посещения' : `Укажите телефонный номер в правильном формате "+996 XXX XXX XXX" `}</p>}
        onClose={onClose}
      />
    </>
  )
};

export default CustomerForm;