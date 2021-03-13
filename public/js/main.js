console.log('This is main');
day_date();
//search bar
let searchBtn=document.getElementById('searchBtn');
async function checkCityName(error)
{
    error.preventDefault();
    console.log('check');
    let searchCityName=document.getElementById('searchCityName');
    if(searchCityName.value.length==0)
    {
        let cityName=document.getElementById('cityName');
        cityName.innerText=`Please, Write the name before search.`;
        let tempDiv=document.getElementById('tempDiv');
        tempDiv.style.display="none";
    }
    else
    {
        try {
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${searchCityName.value}&appid=b5845d66bfdc30b0960e95f1ee26e910`;
            let respo=await fetch(url);
                let data=await respo.json();
                let dataInArray= [data];
                console.log(dataInArray);

                let cityName=document.getElementById('cityName');
                let tempDiv=document.getElementById('tempDiv');
                tempDiv.style.display="block";
                let maxminTemp=document.getElementById('maxminTemp');
                let supHtml=`<sup>o</sup>`;
                let tempIcon;
                console.log(dataInArray[0].weather[0].main);
                if(dataInArray[0].weather[0].main==='Clouds')
                {
                    tempIcon=`<i class="fas fa-cloud-showers-heavy "  style="color: rgb(122, 168, 255);" id="tempIcon"></i>`;
                }
                else if(dataInArray[0].weather[0].main==='Clear')
                {
                    tempIcon=`<i class="fas fa-sun "  style="color: yellow;" id="tempIcon"></i>`;
                }
                else
                {
                    tempIcon=`<i class="fas fa-cloud-sun "  style="color: rgb(221, 236, 78);" id="tempIcon"></i>`;
                }

                let tempValue=(Math.round((dataInArray[0].main.temp-273.15) * 100) / 100);
                let maxTempValue=(Math.round((dataInArray[0].main.temp_max-273.15) * 100) / 100);
                let minTempValue=(Math.round((dataInArray[0].main.temp_min-273.15) * 100) / 100);

                cityName.innerText=`${dataInArray[0].name} | ${dataInArray[0].sys.country}`;
                tempDiv.innerHTML=`<span id="temp">${tempValue} ${supHtml} C</span>
                  ${tempIcon}
                  <h5 class="my-2" id="maxminTemp">MIN ${minTempValue} | MAX ${maxTempValue} </h5>`;
                
            
        } catch (error) {
            console.log('Not found')
            cityName.innerText=`Please, Enter Valid City Name.`;
            tempDiv.style.display="none";
        }

    }
    resetForm();
}
searchBtn.addEventListener('click' , checkCityName);

//reset form
function resetForm()
{
    let myForm=document.getElementById('myForm');
    myForm.reset();
}

//show day and date

function day_date(){
    let date=new Date();
    let allMonths=['Jan' ,'Feb' , 'March' , 'April' , 'May' , 'June' , 'July' ,'Aug' , 'Sept' , 'Oct' ,'Nov', 'Dec'];
    let allDays=[ 'Sunday','Monday' ,'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' ,];

    let nowdate=date.getDate();
    let nowmonth=allMonths[date.getMonth()];
    let nowday=allDays[date.getDay()];
    console.log(nowdate,nowmonth,nowday);

    let currentDate=document.getElementById('currentDate');
    let currentDay=document.getElementById('currentDay');
    currentDate.innerText=`${nowdate}, ${nowmonth}`
    currentDay.innerText= `${nowday}`;
}