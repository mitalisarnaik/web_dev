import "./homepage.css";
import ai from "./ai.png";
import ml from "./ml.png";
import webdev from "./webdev.png";
import { useState,useEffect } from "react";
export default function Homepage(time) {
   time=Usetime();
  return (
    <>
    {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
      <div className="topportion">
        <div className="links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Courses</a>
          <a href="#">Elements</a>
          <a href="#">News</a>
          <a href="#">Contact</a>
        </div>
        <div className="phone">+914756823745</div>
      </div>

      <div className="home">
        <h1 className="homeh1">Home</h1>
      </div>
      <h1 className="courses">Popular Courses</h1>
      <div className="offer">
        <div className="item">
          <img src={ai} alt="ai" />
          <h2 className="h2item">Artificial Intelligence</h2>
          <h3 className="description">Beginner's Guide to AI</h3>
        </div>
        <div className="item">
          <img src={ml} alt="ml" />
          <h2 className="h2item">Machine Learning</h2>
          <h3 className="description">In Depth to Machine Learning</h3>
        </div>
        <div className="item">
          <img src={webdev} alt="webdev" />
          <h2 className="h2item">Web Development</h2>
          <h3 className="description">Bootcamp of Web Development</h3>
        </div>
      </div>
      <footer>
        <h2 className="displaytime">{time.toLocaleTimeString()}</h2>
        <div className="footercontainer">
        <div>
              {
                localStorage.getItem('Name') &&(
                <div>
                  <p style={{color:"white"}}>Name: {localStorage.getItem('Name')}</p>
                </div>
                )
              }
               {
                localStorage.getItem('Password') &&(
                  <div>
                    <p style={{color:"white"}}>Password: {localStorage.getItem('Password')}</p>
                  </div>
                )
              }
            </div>

        </div>
      </footer>
    </>
  );
}
export function Usetime(){
    const [time,SetTime]=useState(()=>new Date());
    useEffect(()=>{
        const intervalid= setInterval(()=>{SetTime(new Date());},1000);
        return ()=>clearInterval(intervalid);
    },[])
    
  return time;
    

}
