import {useState} from 'react';

function App() {

  const table = ["Heater 1", "Heater 2", "Heater 3", "Heater 4", "Clap", "Open HH", "Kick n' Hat", "Kick", "Closed HH"];
  const tableBank=["Chord 1", "Chord 2", "Chord 3", "Shaker", "Open HH", "Closed HH", "Punchy Kick", "Side Stick", "Snare"];
  const [blind,setBlind] = useState('');
  const [power,setPower] = useState('OFF');
  const [float,setFloat] = useState('left');
  const [volume,setVolume] = useState(1);

  const playIT = (url) => {
    const audios= new Audio(url)
    audios.volume = volume;
    audios.play()
  }
  
  const deactivate = function(){
    if(power =='ON')  {setPower('OFF');  setBlind('')}
    if(power =='OFF') setPower('ON')
  }

  const changevolume = (amount) => {
    setVolume(amount.target.value)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="keywords">
          { power=='ON' ?
            float=='left'?
          <>
          <div className="q on"  value="q" onClick={()=>{setBlind(table[0]); playIT('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')}}>Q</div>
          <div className="w on" value="w" onClick={()=>{setBlind(table[1]);playIT('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')}}>W</div>
          <div className="e on" value="e" onClick={()=>{setBlind(table[2]);playIT('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3')}}>E</div>
          <div className="a on" value="a" onClick={()=>{setBlind(table[3]);playIT('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3')}}>A</div>
          <div className="s on" value="s" onClick={()=>{setBlind(table[4]);playIT('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3')}}>S</div>
          <div className="d on" value="d" onClick={()=>{setBlind(table[5]);playIT('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3')}}>D</div>
          <div className="z on" value="z" onClick={()=>{setBlind(table[6]);playIT('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3')}}>Z</div>
          <div className="x on" value="x" onClick={()=>{setBlind(table[7]);playIT('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3')}}>X</div>
          <div className="c on" value="c" onClick={()=>{setBlind(table[8]);playIT('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3')}}>C</div>
         </> :
           <>
             <div className="q on"  value="q" onClick={()=>{setBlind(tableBank[0]); playIT('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3')}}>Q</div>
<div className="w on" value="w" onClick={()=>{setBlind(tableBank[1]);playIT('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3')}}>W</div>
<div className="e on" value="e" onClick={()=>{setBlind(tableBank[2]);playIT('https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3')}}>E</div>
<div className="a on" value="a" onClick={()=>{setBlind(tableBank[3]);playIT('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3')}}>A</div>
<div className="s on" value="s" onClick={()=>{setBlind(tableBank[4]);playIT('https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3')}}>S</div>
<div className="d on" value="d" onClick={()=>{setBlind(tableBank[5]);playIT('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3')}}>D</div>
<div className="z on" value="z" onClick={()=>{setBlind(tableBank[6]);playIT('https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3')}}>Z</div>
<div className="x on" value="x" onClick={()=>{setBlind(tableBank[7]);playIT('https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3')}}>X</div>
<div className="c on" value="c" onClick={()=>{setBlind(tableBank[8]);playIT('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3')}}>C</div>
         </>:
        <>
         <div className="q" value="q">Q</div>
         <div className="w" value="w">W</div>
         <div className="e" value="e">E</div>
         <div className="a" value="a">A</div>
         <div className="s" value="s">S</div>
         <div className="d" value="d">D</div>
         <div className="z" value="z">Z</div>
         <div className="x" value="x">X</div>
         <div className="c" value="c">C</div>
         </>
         }
        </div>
        <div className="others">
          <div className="one">
            <div className="Power">Power</div>
            <div className="shalter1"  onClick={()=>{deactivate()}}>
              {power}
            </div>
          </div>
            <div className="keywordname">{blind}</div>
            <div className="volume-slider">
              <input id='myinput' type="range" step='0.01' min='0' max='1' onChange={(e)=>changevolume(e)} ></input>
            </div>
            <div className="four">
              <div className="Bank">Bank Modus</div>
              <div className="shalter2"><div className="blue2" style={{float}} onClick={()=>{float=='left'?setFloat('right'):setFloat('left')}}></div></div>
            </div>
        </div>
      </div>
     
    </div>
  );}
  
         

export default App;










// <div className="q on"  value="q" onClick={()=>{setBlind(tableBank[0]); playIT('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3')}}>Q</div>
// <div className="w on" value="w" onClick={()=>{setBlind(tableBank[1]);playIT('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3')}}>W</div>
// <div className="e on" value="e" onClick={()=>{setBlind(tableBank[2]);playIT('https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3')}}>E</div>
// <div className="a on" value="a" onClick={()=>{setBlind(tableBank[3]);playIT('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3')}}>A</div>
// <div className="s on" value="s" onClick={()=>{setBlind(tableBank[4]);playIT('https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3')}}>S</div>
// <div className="d on" value="d" onClick={()=>{setBlind(tableBank[5]);playIT('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3')}}>D</div>
// <div className="z on" value="z" onClick={()=>{setBlind(tableBank[6]);playIT('https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3')}}>Z</div>
// <div className="x on" value="x" onClick={()=>{setBlind(tableBank[7]);playIT('https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3')}}>X</div>
// <div className="c on" value="c" onClick={()=>{setBlind(tableBank[8]);playIT('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3')}}>C</div>