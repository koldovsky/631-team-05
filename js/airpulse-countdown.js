(function () {
	const countdown = () => {
        const countDate = new Date ('January 1, 2022 00:00:00').getTime();
        const now = new Date();
        const gap = countDate - now;
    
      //Set up the getTime
    
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
    
    //calculate the time gap
    
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    
    //update html
    
    document.querySelector('.countdown-airpulse-day').innerText = textDay;
    document.querySelector('.countdown-airpulse-hour').innerText = textHour;
    document.querySelector('.countdown-airpulse-minute').innerText = textMinute;
    document.querySelector('.countdown-airpulse-second').innerText = textSecond;
    };
    
    setInterval(countdown, 1000);



})();   