import React, {useState} from 'react';
import PhoneInput from "react-phone-input-2";
import '../Form.css';
import {validatePhoneNumber} from "../../../../../constants";
import Modal from "../../../../../components/UI/Modal";
import {useAppDispatch} from "../../../../../app/hooks";
import {cancelAppointment} from "../../../servicesThunks";

const CancelForm = () => {
  const dispatch = useAppDispatch();
  const [cancel, setCancel] = useState({id: '', reason: ''});
  const [phone, setPhone] = useState('');
  const [isModal, setModal] = useState(false);
  const [canceledModal, setCanceledModal] = useState(false);

  const onClose = () => setModal(false);
  const closeCancelModal  = () => setCanceledModal(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCancel(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validatedNumber = validatePhoneNumber(phone);
    if (!validatedNumber) {
      return setModal(true);
    }
    const dataForCancel = {
      id: parseInt(cancel.id),
      cancel: {
        customer_phone: '+' + phone,
        cancel_reason: cancel.reason,
      }
    }
    await dispatch(cancelAppointment(dataForCancel));
    setPhone('');
    setCancel({id: '', reason: ''});
    setCanceledModal(true);
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <fieldset className="form__fieldset">
          <legend>Пожалуйста, заполните форму</legend>
          <div className="form__wrapper">
            <div className="form__item">
              <label>Введите уникальный номер, который был вам выдан при записи</label>
              <input
                type="number"
                id="id"
                name="id"
                value={cancel.id}
                onChange={handleInputChange}
                placeholder="10"
                className="form__input"
                required
              />
            </div>
            <div className="form__item">
              <label>Введите номер телефона указанный при записи</label>
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
              <label>Введите причину отмены записи</label>
              <input
                type="text"
                id="reason"
                name="reason"
                value={cancel.reason}
                onChange={handleInputChange}
                placeholder="Поменялись планы"
                className="form__input"
                required
              />
            </div>
            <div className="form__item">
              <button type="submit" className="button">Отменить запись</button>
            </div>
          </div>
        </fieldset>
      </form>
      <Modal
        visible={isModal}
        content={
          <p>Укажите телефонный номер в правильном формате "+996 XXX XXX XXX" </p>}
        onClose={onClose}
      />
      <Modal
        visible={canceledModal}
        content={
          <p style={{textAlign: 'center'}}>Ваша запись отменена</p>}
        onClose={closeCancelModal}
      />
    </>
  );
};

export default CancelForm;