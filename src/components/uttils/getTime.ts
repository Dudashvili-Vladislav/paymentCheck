const getTime = () => {
  let date = new Date();
  let time = [date.getHours(),date.getMinutes(),date.getSeconds()]; 
  return {
    date: [date.getDay(),date.getMonth(),date.getFullYear()].join('.'),
    time: [time[0],time[1],time[2]].join(':'),
  }
}

export default getTime;


