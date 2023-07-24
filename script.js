var days= ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'];
var months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
const apikey=window.env.API_KEY;
    var now=new Date();
    var month=months[now.getMonth()].slice(0,3).toUpperCase();
    var day=days[now.getDay()].slice(0,3).toUpperCase();
    var minute=now.getMinutes();
    if(minute<10){
        minute='0'+minute;
    }
    var hours=now.getHours();
    var bg=document.getElementById('container');
    var date=document.getElementById('date');
    var AIQ=document.getElementById('aiq');
    var title=document.getElementById('title');
    var city=document.getElementById('location');
    var map=document.getElementById('icon');

    var co=document.getElementById('co');
    var no=document.getElementById('no');
    var no2=document.getElementById('no2');
    var o3=document.getElementById('o3');
    var so2=document.getElementById('so2');
    var nh3=document.getElementById('nh3');

    var inputElement = document.getElementById('cities');
    inputElement.style.color='white';
    var searchButton=document.getElementById('search');
    var Cities='Cuttack';

    if((hours>=18 && hours<=24)||(hours>=0 && hours<=5)){
        bg.style.backgroundImage ='url("images/night.webp")'
        date.style.color='white';
        title.style.color='white';
        city.style.color='white';
        map.style.filter='hue-rotate(90deg)';
    }
    else{
        bg.style.backgroundImage ='url("images/day.webp")'
        date.style.color='black';
        title.style.color='black';
        city.style.color='black';
    }
    if(hours>=12 && hours<=24){
        hours=hours-12;
    }
    if(hours<10){
        hours='0'+hours;
    }
    var time=hours+':'+minute;
    if(now.getHours()>=12 && now.getHours()<=24){
        time=time+'PM';
    }
    else{
        time=time+'AM';
    }

    const image=document.getElementById('weathercondn');
    image.src='images/fresh-air.webp';

    document.getElementById('date').textContent=day+" | "+month+" "+now.getDate()+" | "+time;
    console.log(day+" | "+month+" "+now.getDate()+" | "+time);
    var lat=0;
    var lon=0;

    searchButton.addEventListener('click',()=>{
        Cities=inputElement.value;
        console.log(Cities);
            fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${Cities},IN&appid=${apikey}`)
            .then((res)=>res.json())
            .then((data) => {
              const location = data[0].name + ', ' + data[0].country;
              console.log(location);
              const locationElement = document.getElementById('location');
              locationElement.textContent = location;
              lat=data[0].lat;
              lon=data[0].lon;
              fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apikey}`)
              .then((res)=>res.json())
              .then((data)=>{
                const AIQ=document.getElementById('aiq');
                let air=data.list[0].main.aqi;
                AIQ.textContent=air;
                let component=data.list[0].components;
                co.textContent="CO: "+component.co + " μg/m3";
                no.textContent="NO: "+component.no + " μg/m3";
                no2.textContent="NO2: "+component.no2 + " μg/m3";
                nh3.textContent="NH3: "+component.nh3 + " μg/m3";
                o3.textContent="O3: "+component.o3 + " μg/m3";
                so2.textContent="SO2: "+component.so2 + " μg/m3";
    
                if(air<=5 && air>3){
                    image.src='images/air-pollution.webp';
                    AIQ.style.color='red';
                }
                else if(air==3){
                    image.src='images/medium.webp';
                    AIQ.style.color='yellow';
                }
                else{
                    image.src='images/low.webp';
                    AIQ.style.color='green';
                }
              })
            })
    });