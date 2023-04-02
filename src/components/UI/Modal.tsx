import React, {ReactElement, useEffect} from 'react';
import { BsXCircle } from "react-icons/bs";


interface Props {
  visible: boolean
  content: ReactElement | string
  onClose: () => void
}

const Modal: React.FC <Props> = ({visible, content, onClose}) => {

  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        onClose()
        break
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', onKeydown)
    return () => document.removeEventListener('keydown', onKeydown)
  }, [onKeydown]);

  if (!visible) return null


  return (
    <div className='modal' onClick={onClose}>
      <div className='modal-dialog' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h3 className='modal-title'>Внимание!</h3>
          <span className='modal-close' onClick={onClose}>
          <BsXCircle fontSize={20}/>
          </span>
        </div>
        <div className='modal-body'>
          <div className='modal-content'>{content}</div>
        </div>
       <div className='modal-footer'>
         <button className="button" onClick={onClose}>Закрыть</button>
       </div>
      </div>
    </div>
  );
};

export default Modal;