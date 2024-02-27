let email
function submit(){
    email = document.getElementById('mail').value
    localStorage.setItem('email',email)
    
}


var Name;
let age;
let sex;
function details_submit(){
    Name=document.getElementById('name').value
    age=document.getElementById('age').value
    sex=document.getElementById('sex').value
    localStorage.setItem('name',Name)
    
}

let HR
let OS
let hours
let minutes
function measure_click (){
    date_data=new Date()
    hours=date_data.getHours()
    temp_minutes=date_data.getMinutes()
    minutes=temp_minutes.toString().padStart(2, '0');
    const min_heart=80
    const max_heart=100
    let heart_temp=Math.random() * (max_heart-min_heart) + min_heart
    let heart=heart_temp.toPrecision(3)
    const min_spo2=93
    const max_spo2=98
    let spo2_temp=Math.random() * (max_spo2-min_spo2) + min_spo2
    let spo2=spo2_temp.toPrecision(3)
    console.log(heart)
    console.log(spo2)
    HR=heart
    OS=spo2
    
    let innerHtml = `
      
    <div>
    <div class="value">${hours}:${minutes}</div>
    <div class="label">Time</div>
  </div>
  <div>
    <div class="value">${heart}</div>
    <div class="label">Heart Rate</div>
  </div>
  <div>
    <div class="value">${spo2}</div>
    <div class="label">SPO2</div>
  </div>
    `;
    document.querySelector('.output_data').innerHTML = '<div class="label">LOADING...</div>';
    setTimeout(()=>{
        document.querySelector('.output_data').innerHTML = innerHtml;

    },5000)
    
  };

function mail(){
  

    id=localStorage.getItem('email')
    identification=localStorage.getItem('name')
    const mailtoLink = `mailto:${id}?subject=OXYMETER&body=dear ${identification},%0D%0A%0D%0A the time of recording was ${hours}:${minutes}%0D%0A%0D%0Ayour heart rate was ${HR} beats per minute%0D%0A%0D%0Aoxygen saturation was ${OS} percent`;

    window.location.href = mailtoLink;
    
}








