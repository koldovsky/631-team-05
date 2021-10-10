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
    
    //update html
    
    document.querySelector('.countdown-speakers .day').innerText = textDay;
    document.querySelector('.countdown-speakers .hour').innerText = textHour;
    document.querySelector('.countdown-speakers .minute').innerText = textMinute;
    };
    
    setInterval(countdown, 1000);



})();   