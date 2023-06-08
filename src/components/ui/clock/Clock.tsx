import React, { useEffect, useState } from 'react'
import getTime from '../../uttils/getTime';
import s from './Clock.module.scss';

export const Clock = () => {
  const { date, time } = getTime();
  const [currentTime, setCurrentTime] = useState(time);


  useEffect(() => {
   const timer = setInterval(() => {
    let current_time = getTime();
    setCurrentTime(current_time.time)
    }, 1000);
    return () => clearInterval(timer);
  },[])
  
  return (
    <>
    <div>
      <span>
        {date}
      </span>
      <span className={s.current_time}>
        {currentTime}
      </span>
    </div>
    </>
  )
}
