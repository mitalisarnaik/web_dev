import {useState, useEffect} from 'react';
import Clock from './pages';

function Usetime(){
    const[time,setTime]=useState(()=>new Date());
    useEffect(()=>{
        const id=setInterval(()=>{setTime(new Date());},1000);
        return()=>clearInterval(id);
    },[]);
    return time;
}

export default function Display()
{
    const time=Usetime();
    const [color,setColor]=useState('lightcoral');
    return(
        <div>
            <p>
                Pick A Color:
                <select value={color} onChange={e=>setColor(e.target.value)}>
                    <option value="lightcoral">lightcoral</option>
                    <option value="midnightblue">midnightblue</option>
                    <option value="rebeccapurple">rebeccapurple</option>
                </select>
            </p>
            <Clock color={color} time={time.toLocaleTimeString()}/>
        </div>
    );
}