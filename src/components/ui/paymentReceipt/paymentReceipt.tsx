import React, { useState } from 'react';
import { ReactComponent as Arrow } from '../../../assets/icons/Arrow.svg';
import { ReactComponent as ArrowLeft } from '../../../assets/icons/Arrow-left.svg';
import { ReactComponent as Man } from '../../../assets/icons/Man.svg';

import s from './paymentReceipt.module.scss';
import Clock from '../clock';

export const PaymentReceipt = () => {
  const [isTitleCheck, setIsTitleCheck] = useState('Стоимость покупок');
  const [isInteger, setIsInteger] = useState('820')
  const [isDecimal, setIsDecimal] = useState(',95')
  const [isCurrency, setIsCurrency] = useState('₽')

	return (
    <div className={s.wrapper_receipt}>
      <div className={s.receipt_inner}>
        <div className={s.header}>
          <Clock />
          <span>Касса #1</span>
        </div>
        <div className={s.wrapper_check}>
          <div className={s.check_header}>
            <h2 className={s.check_title}>{isTitleCheck}</h2>
            <div className={s.price_block}>
              <h2 className={s.integer}>{isInteger}</h2>
              <h2 className={s.decimal}>{isDecimal}</h2>
              <h2 className={s.currency}>{isCurrency}</h2>
            </div>
          </div>
            <h2 className={s.check_footer}>
              Приложите<br/>или прокатайте карту
            </h2>
        </div>
        <div className={s.arrow}>
          <Arrow />
        </div>
      </div>
      <div className={s.wrapper_buttons}>
        <button className={s.arrow_left}>
          <ArrowLeft/>
        </button>
        <button className={s.arrow_right}>
          <Man />
          <span className={s.call_person}>Вызов сотрудника</span>
        </button>
      </div>
    </div>
	);
};

