import React from 'react'
import $ from 'jquery' 


let x;
let y;
let a;
let b;
let day =0;
let calendar=0;
let distance;
let name1;
let country1;
export let lat = a;
export let lon = b;
export let arrayEmp =[]
let d=0

function inc() {
for(let i=0;i<8;i++) {
d=d+1;
arrayEmp.push(d)
console.log(arrayEmp[i])
}
}
inc()

    let array = [];
    export let arrayArc=[];
    array.push(a)
    array.push(b)
      console.log(array)
      console.log(arrayArc)

      function nextValue(){
        lat = Number.parseFloat(lat)+ x;
        x=0
        if (lat<-90&&lon>-180&&lon<0) {
         lat =-180-lat;
         lon = 180+lon
         alert("Вы достигли полюса")
        }
       if (lat>90&&lon>0&&lon<180) {
       lat=180-lat;
       lon=lon-180
       alert("Вы достигли полюса")
        }
       let latToString = `|${lat.toString()},`
       array.push(latToString)
       arrayArc.push(lat)
       lon = Number.parseFloat(lon)+ y;
       y=0
       if (lon<-180) {
       lon =lon+360;
       alert("Вы пересекли нулевой меридиан")
       }
       if (lon>180) {
       lon=lon-360;
       alert("Вы пересекли нулевой меридиан")
       }
       let lonToString = `${lon.toString()}`
       array.push(lonToString)
       arrayArc.push(lon)
       
       let res= array.join('')
       console.log(x,y)
       console.log(day)
       return [res, arrayArc,calendar]
       }

       function go(deg, speed) {
        if(deg>0&&deg<45) {
            x = -Number(speed*Math.cos(deg*Math.PI/180)*86.4/111).toFixed(4);
            y = -Number(speed*Math.sin(deg*Math.PI/180)*86.4/111).toFixed(4)
        } else 
        if(deg>45&&deg<90) {
          x = -Number(speed*Math.cos(deg*Math.PI/180)*86.4/111).toFixed(4)
          y = -Number(speed*Math.sin(deg*Math.PI/180)*86.4/(111.2*Math.cos(lat*Math.PI/180))).toFixed(4)
        } else
        if(deg>90&&deg<135) {
          x = -(speed*Math.cos(deg*Math.PI/180)*86.4/111).toFixed(4);
          y = -(speed*Math.sin(deg*Math.PI/180)*86.4/111).toFixed(4)
        } else
        if(deg>135&&deg<180) {
          x = -(speed*Math.cos(deg*Math.PI/180)*86.4/111).toFixed(4);
          y = -(speed*Math.sin(deg*Math.PI/180)*86.4/111).toFixed(4)
          } else
        if(deg>180&&deg<215) {
          x = -(speed*Math.cos(deg*Math.PI/180)*86.4/111).toFixed(4);
          y = -(speed*Math.sin(deg*Math.PI/180)*86.4/111).toFixed(4)
        }else
        if(deg>215&&deg<270) {
          x = -(speed*Math.cos(deg*Math.PI/180)*86.4/111).toFixed(4);
          y = -(speed*Math.sin(deg*Math.PI/180)*86.4/111).toFixed(4)
        } else
        if(deg>270&&deg<315) {
          x = -(speed*Math.cos(deg*Math.PI/180)*86.4/111).toFixed(4);
          y = -(speed*Math.sin(deg*Math.PI/180)*86.4/111).toFixed(4)
        } else
        if(deg>315&&deg<360) {
          x = -(speed*Math.cos(deg*Math.PI/180)*86.4/111).toFixed(4);
          y = -(speed*Math.sin(deg*Math.PI/180)*86.4/111).toFixed(4)
        } else
        if(deg===0) {
        x = -(speed*Math.cos(deg*Math.PI/180)*86.4/111).toFixed(4);
        y=0
        }else
        if(deg===90) {
        x=0
        y = -(speed*Math.sin(deg*Math.PI/180)*86.4/111).toFixed(4)
        } else
        if(deg===180) {
        x = -(speed*Math.cos(deg*Math.PI/180)*86.4/111).toFixed(4);
        y=0
        } else
        if(deg===270) {
          x=0
        y = -(speed*Math.sin(deg*Math.PI/180)*86.4/111).toFixed(4)
        } else
        if(deg===360) {
        x = -(speed*Math.cos(deg*Math.PI/180)*86.4/111).toFixed(4);
        y=0
        }
        distance=(speed*86.4).toFixed(1)
        
        return [x,y,distance]
       }
    
 async function fetchWind() {
    try {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d7a3cd7e559b16d15b8a101ab388aad6`)
    let data = await response.json()
    console.log(data)
    return data
    }
    catch(err){
    alert(err)
    }
}

async function line() { 
for (let i=2;i<arrayArc.length; i+=2) {
  if (arrayArc[i]===arrayArc[i-2]&&arrayArc[i+1]===arrayArc[i-1]) {
 arrayArc.splice(i,2)}
  }
 let res1=nextValue()
        try {
        let response = await fetch(`https://www.mapquestapi.com/staticmap/v5/map?key=dDGK8sCXjbWcbowd7oVsGzyptmQpGLi4&shape=${res1[0]}&size=950,450@2x`)
        let blob = await response.blob()
        let img = document.createElement('img')
        //document.body.append(img)
        img.src = URL.createObjectURL(blob)
        img.id='imgLine'
        $(".ramka1").append(img)            
        } catch (err){
        alert(err)
    }
    document.getElementById('cartina').style.backgroundImage='none'
    document.getElementById('mesto').style.backgroundImage='linear-gradient(to right,white,lightgreen)'
    for(let i =2;i<arrayArc.length-1; i+=2) {
      if(arrayArc[i]===arrayArc[i-2]&&arrayArc[i+1]===arrayArc[i-1]){
        arrayArc.splice(i,2)}
        console.log(calendar)
      }
      day=(arrayArc.length-2)/2
      console.log(arrayArc)   
      console.log(day)
}


async function line2(a,b) {
        try {
        let response = await fetch(`https://www.mapquestapi.com/staticmap/v5/map?locations=${a},${b}&zoom=4&size=@2x&defaultMarker=marker-md-3B5998-22407F&key=dDGK8sCXjbWcbowd7oVsGzyptmQpGLi4`)
        let blob = await response.blob()
        let img = document.createElement('img')
        //document.body.append(img)
        img.src = URL.createObjectURL(blob)
        img.id='imgLine2'
        $(".ramka1").append(img)
        } catch (err){
        alert(err)
    }
    document.getElementById('veter').style.backgroundImage='linear-gradient(to right,white,lightgreen)'
    document.getElementById('cartina').style.backgroundImage='none'
  }

 
  async function line3() {
        try {
          let response = await fetch(`https://www.mapquestapi.com/staticmap/v5/map?locations=${lat},${lon}&zoom=6&size=@2x&defaultMarker=marker-md-3B5998-22407F&key=dDGK8sCXjbWcbowd7oVsGzyptmQpGLi4`)
        let blob = await response.blob()
        document.getElementById('ramka2').style.opacity='1'
        let img = document.createElement('img')
        img.id = 'imgLine3'
        //document.body.append(img)
        $(".ramka2").append(img)
        img.src = URL.createObjectURL(blob);
        } catch (err){
        alert(err)
      }
        document.getElementById('mesto').style.backgroundImage='none'
        document.getElementById('veter').style.backgroundImage='linear-gradient(to right,white,lightgreen)'}
  
 
  let cloud;
  async function line4(z) {
        try {
        let response = await fetch(`https://www.mapquestapi.com/staticmap/v5/map?locations=${lat},${lon}&zoom=${z}&size=@2x&defaultMarker=marker-md-3B5998-22407F&key=dDGK8sCXjbWcbowd7oVsGzyptmQpGLi4`)
        let blob =await response.blob()
        let img = document.createElement('img')
        //document.body.append(img)
        img.src = URL.createObjectURL(blob)
        img.id = 'imgLine4'
        $(".ramka3").append(img)
        console.log(lat, lon)
        } catch (err){
        alert(err)
    }
  }

  async function line5(place,z) {
        try {
        let response = await fetch(`https://www.mapquestapi.com/staticmap/v5/map?key=dDGK8sCXjbWcbowd7oVsGzyptmQpGLi4&center=${place}&size=@2x&zoom=${z}`)
        let blob = await response.blob()
        let img = document.createElement('img')
        //document.body.append(img)
        img.src = URL.createObjectURL(blob)
        img.id='imgLine5'
        $(".ramka4").append(img)
        console.log(lat, lon)
        } catch (err){
        alert(err)
    }
  }
  
  async function line7(gt) {
        try {
        let response = await fetch(`https://www.mapquestapi.com/staticmap/v5/map?locations=${arrayArc[0]},${arrayArc[1]}|marker-start||${arrayArc[gt*2]},${arrayArc[gt*2+1]}|marker-end&size=550,550@2x&key=dDGK8sCXjbWcbowd7oVsGzyptmQpGLi4`)
        let blob = await response.blob()
        let img = document.createElement('img')
        //document.body.append(img)
        img.src = URL.createObjectURL(blob)
        img.id='imgLine7'
        $(".ramka5").append(img)
        console.log(arrayArc)
        console.log(arrayArc[gt*2-2],arrayArc[gt*2-1])
        } catch (err){
        alert(err)
    }
  }
  function calculate(gt) {
    let lt1, lt2, ln1, ln2
    lt1=arrayArc[0]
    ln1=arrayArc[1]
    lt2=arrayArc[gt*2]
    ln2=arrayArc[gt*2+1]

    let lat1 = lt1*Math.PI/180
    let lat2 = lt2*Math.PI/180  
    let lon1 = ln1*Math.PI/180
    let lon2 = ln2*Math.PI/180;

  let clt1 = Math.cos(lat1)
  let clt2 = Math.cos(lat2)
  let slt1 = Math.sin(lat1)
  let slt2 = Math.sin(lat2)
  let delta = lon2-lon1
  let cdelta = Math.cos(delta)
  let sdelta = Math.sin(delta);

  let y = Math.sqrt(Math.pow(clt2*sdelta,2)+Math.pow((clt1*slt2*cdelta-slt1*clt2*cdelta),2))
  let x = slt1*slt2+clt1*clt2*cdelta;
  let ad = Math.atan2(y,x)
  let dist = (ad*6372.795).toFixed(1)
  console.log(dist, delta)
  return dist
  }
 
  
  const AddPoint = ({onNewPoint=f=>f, onFirstPlace=f=>f})=> {
    let _lt, _ln
    const submit = e => {
    e.preventDefault()
    onNewPoint(_lt.value,_ln.value)
    document.getElementById('add').disabled=true
    }

 return (
   <form id = "formAddPoint" onSubmit = {submit}>
    <input ref = {input =>_lt=input}
    type="number" min="-90" max="90" step="0.0001"
          placeholder = "Широта -90...90" required
          pattern="\d+(\.\{2}?"/>
    <input ref = {input =>_ln=input}
    type="number" min="-180" max="180" step="0.0001"
    placeholder = "Долгота -180...180" required
    pattern="\d+(\.\{2}?"/>
    <button id='add'> Старт </button>
    </form>
 )
}

const Zoom = ({onNewSize})=> {
 let _z
   const submit = e => {
   e.preventDefault()
   onNewSize(_z.value)
   return _z
 }
 return (
   <form onSubmit = {submit}>
    <input type="number" min = "2" max = "20" step = "1" ref = {input =>_z=input}
    placeholder = "Zoom:4-20" required/>
    <button>Zoom</button>
    </form>
 )
}

const Place = ({onNewPlace})=> {
 let _place, _z, _lo
   const submit = e => {
   e.preventDefault()
   onNewPlace(_place.value, _z.value, _lo)
   return [_place, _z, _lo]
 }
 return (
   <form onSubmit = {submit}>
    <input ref = {input =>_place=input}
          placeholder = "Place/coords" required/>
    <input type="number" min = "2" max = "20" step = "1" ref = {input =>_z=input}
          placeholder = "Zoom" required/>    
    <button>Zoom</button>
    </form>
 )
}

    export const Day = ({day, country, name, distance, index})=> 
   (
     <div >
     <div className ='day'>{day}</div>
     <div className = 'place'>{country}, {name}</div>
     <div className = 'distance'>{distance}</div>
     </div>
   )
 

 export const Diary = ({days})=> {
  return(
     <div className ='diary'>
     <div className = "day1">День</div><div className = "point">Пункт прибытия</div><div className="distance1">Расстояние</div>
    {days.map((day,index)=>
    <Day key = {index}{...day}/>
    )}
   </div>)
    }
    
  export const Calendar = ({days})=> {
    let calendar;
    for (let i = 0;i<days.length; i++) {
    calendar=days[i].day
  }
  return(<div className="calendar"> {calendar}</div>)
  }

  export const Average = ({days})=>{
    let d=0;let v=0;let j;
    
     for (let i = 0;i<days.length; i++) {
      d=d+parseFloat(days[i].distance)
    }
      for (let i = 0;i<days.length; i++) {
      v = d/parseFloat(days[i].day)
    }
      for (let i = 0;i<days.length; i++) {
      j = days[i].day
    }
      return (
        <div>
          <div> Всего расстояние: {d}</div>
          <div>Всего дней: {j}</div>
          <div>Среднедневной перелет: {v}</div>
      </div>)
}
   
  export const Shylda = ({days}) => {
    for (let i = 0;i<days.length; i++) {
  name1 = days[i].name;
  country1 = days[i].country }
  return (
  <div> {country1}   {name1} </div>)
  }

export const Jour = ({onJour=f=>f, onDist=f=>f,dist1})=> {
let _jour
   const submit = e => {
   e.preventDefault()
   onJour(_jour.value)
   onDist(_jour.value)
}
  return (
        <div>
          <form onSubmit = {submit}>
    <input ref = {input =>_jour=input}
          type = "number" min = "1" placeholder = "Day" required/>
          <button>Выбрать день</button></form>
          <div id= "direct"> Прямое расстояние {dist1} км</div>
      </div>)
}

class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            wind:{
            speed:null,
            deg:null,
            gust:null
          },
            temp1:null,
            sys: {
            country:null
            },
            clouds: {
             all:null
            },
            days:[],
            name:null,
            dist1:null,
            cloudness:false
        }

        this.changePicture = this.changePicture.bind(this)
        this.getWind = this.getWind.bind(this)
        this.addPoint= this.addPoint.bind(this)
        this.showPicture=this.showPicture.bind(this)
        this.showLargePicture=this.showLargePicture.bind(this)
        this.showPlace=this.showPlace.bind(this)
        this.showJour = this.showJour.bind(this)
        this.showDist = this.showDist.bind(this)
        this.clean = this.clean.bind(this)
        this.withClouds = this.withClouds.bind(this)
        this.choose = this.choose.bind(this)
        }

  async changePicture() {
     line()
  }    

   async getWind() {
   const {wind, main,clouds,sys, name} = await fetchWind()
   const{speed,deg}=wind
   const {temp} = main
   const temp1 = (temp -273.15).toFixed(1)
   go(deg,speed)
   const coords = {
   latt:speed*86.4/111,
   long:speed*86.4/55
   }
   console.log(lat,lon,distance)
   console.log(deg)
   document.getElementById('veter').style.backgroundImage='none'
   document.getElementById('cartina').style.backgroundImage='linear-gradient(to right,white,lightgreen)'
   this.setState({wind})
   this.setState({temp1})
   this.setState({coords})
   this.setState({name})
   this.setState({sys})
   this.setState({clouds})
  }
    
  addPoint(a,b) {
    line2(a,b)
  lat=a
  lon=b
  array.push(`${a},`)
  array.push(b)
  arrayArc.push(parseFloat(a))
  arrayArc.push(parseFloat(b))
  console.log(lat, lon)
  console.log(a,b)
  }
 
   async showPicture() {
      line3()
     const {clouds, sys,name} =  await fetchWind();
     const {country} = sys
     const {all} = clouds
        cloud=all;
        this.withClouds()
           const days = [
        ...this.state.days,
        {
          day,
          country,
          name,
          distance
        }
      ]
      for (let i =1; i<(days.length+1);i++) {
      if (JSON.stringify(days[i])===JSON.stringify(days[i-1])) {
        days.splice(i,1)
      }
    }
      console.log(days)
      console.log(arrayArc[0], lat, lon)
      this.setState({days})
      this.setState({clouds})
 }

   showLargePicture(z) {
      line4(z)
    }

   showPlace(place,z) {
      line5(place,z)
    }

     showJour(gt) {
        line7(gt)
    }

    showDist(gt) {
      const dist1 = calculate(gt)
      console.log(dist1)
      this.setState({dist1})
    }

    clean() {
    for (let i=0; i<100;i++) {
    let tdClean = document.getElementsByTagName('td')[i]}
    for (let i = 0;i<100;i++) {
      document.getElementById(i).style.opacity=0
      }
      let cloudness = false
      this.setState({cloudness})
    }
    
    withClouds() {
      for (let i=0; i<100;i++) {
     let td =  document.getElementsByTagName('td')[i].setAttribute('id',i)
      } 
      for (let i = 0;i<100;i++) {
        document.getElementById(i).style.opacity=0
        document.getElementById(i).style.transitionProperty = 'opacity'
        document.getElementById(i).style.transitionDuration ="3.5s"
        }
      let arr2= [];
      let arr3 = []
        for (let f = 0;f<100;f++) {
        arr2.push(f)
        }
      for (let i=0;i<`${cloud}`;i++) {
          let r = Math.floor(Math.random()*arr2.length)
          arr3.push(arr2[r])
          arr2.splice(r,1)
          console.log(arr3)
          console.log(cloud)
        }
      for (let i=0;i<arr3.length+1;i++) {
        arr3.map(i=>document.getElementById(i).style.opacity='1')
      }
      let cloudness= true
      this.setState({cloudness})
    }
      
       choose() {
         (this.state.cloudness)?
           this.clean():this.withClouds()
         }
         
     render() {
        const {changePicture, getWind, addPoint, showPicture, showLargePicture, showPlace, showJour, showDist, choose}  = this
        const {wind,temp1, clouds, name,sys, days, dist1, } = this.state
    return (
      <div>
      <div id="fon1">
        <div id ="slider">
          <div className ="slideZeroMinus3 slide7a"></div>
          <div className ="slideZeroMinus2 slide7b"></div>
          <div className ="slideZeroMinus1 slide6"></div>
          <div className ="slideZeroMinus slide5"></div>
          <div className ="slideZero slide4"></div>
          <div className ="slideOne slide3"></div>
          <div className ="slideTwo slide2"></div>
          <div className ="slideThree slide1"></div>
        </div>
      </div>
                          
      <div id ='field'> 
          <table id = 'table1'>
            <tbody>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            </tbody>
          </table>

    <div id="coor"><AddPoint onNewPoint = {addPoint}/></div>
    <div id="plan">Общий план</div>
    <div className="buttons">
      <button id = "veter" onClick = {getWind}>Запросить погоду...</button>
      <button id ="cartina" onClick = {changePicture}>Перелет</button>
      <button id = 'mesto' onClick = {showPicture}>Пункт прибытия</button>
      <button id = "withClouds" onClick = {choose}>Облака</button>
    </div>
    <div id="punkt">Пункт прибытия</div>
    <div id ="neighbours">По карте</div>

    <div className = "zoom"><Zoom onNewSize={showLargePicture}/></div>
    <div id="placeWatch"><Place onNewPlace = {showPlace}/></div>
    <div className="coord">Координаты: 
        <span>{lat},{lon}</span>
    </div>
    <div className = {(temp1<-10)?"weather winter":(temp1>-10&&temp1<-5)?"weather autumn":((temp1===-5||temp1>-5)&&(temp1<15||temp1===15))?"weather spring":(temp1>15&&temp1<30)?"weather summer":((temp1===30||temp1>30)&&temp1<40)?"weather thirty_five":((temp1===40||temp1>40)&&temp1<60)?"weather zacuha":"none"} style = {{backgroundRepeat:'no-repeat'}}></div> 
      <div className = 'term'>
      <div className = "scale" style={{marginLeft:'28px', marginBottom:'49px',height:`${(temp1<0)?(64.57+temp1*1.614):(64.57+temp1*1.614)}px`,width:'4px',backgroundColor:'red',  opacity:'0.7', transitionProperty:'height', transitionDuration:'2s'}}></div>
      </div>  
      <div className ="datum" id="datum">
        <div className = "country">Cтрана  {sys.country}</div>
        <div className = "name"> Место  {name}</div>
        <div>Ветер <span className = {(wind.speed>0&&wind.speed<5)?"weak":(wind.speed<10)?"moderate":(wind.speed<18)?"strong":(wind.speed<25)?"storm":(wind.speed>25&&wind.speed<40)?"hurricane":"standart"}> {wind.speed}</span></div>
        <div>Направление {wind.deg}</div>
        <div>Температура <span className = {(temp1<-30)?"ice":(temp1<25)?"froze":(temp1<20)?"very_cold":(temp1<15)?"cold":(temp1<-10||temp1===-10)?"very_cool":(temp1<-5)?"oool":(temp1<0)?"cool":(temp1>0&temp1<5)?"zero":(temp1>5&&temp1<15)?"light_warm":(temp1>15&&temp1<25)?"warm":(temp1>25&&temp1<30)?"hot":(temp1>30&&temp1<58)?"heat":"standart"}>{temp1}</span></div>
      </div>

    <div className="ramka1"><div id = "ramka1"></div></div>
    <div className="ramka2"><div id = "ramka2"></div></div>
    <div className="ramka3"><div id = "ramka3"></div></div>
    <div className="ramka4"><div id = "ramka4"></div></div>
    <div className="ramka5"><div id = "ramka5"></div></div>
    <Calendar days = {days}/>
    <div id="clouds">Облачность:{clouds.all}% </div>  
    <div className = 'shylda'><Shylda days = {days}/></div>
   
    <div id="basket"></div>
    <div className="statistics">
      <Diary days = {days}/>
      <div id ='average'><Average days={days}/></div>
      <div className = 'jour'><Jour onJour = {showJour} onDist ={showDist} dist1 = {dist1}/></div>
    </div>
</div>
</div>)
  }
}

export default Map