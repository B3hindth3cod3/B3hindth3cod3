import React from 'react';
import ReactDOM from 'react-dom';
import emailjs from 'emailjs-com';
import './index.css';
import logo from './images/heroimage.jpg';
import landing from './images/landing.png';
import login from './images/login.jpg';
import mobile from './images/mobile.jpg';
import dash from './images/dash.png';
import {FaGithub, FaEnvelope, FaInstagram, FaLinkedin, FaSketch, FaLaptopCode, FaMobileAlt} from "react-icons/fa";

function Webpage () {  

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_ii8bo3v', e.target,'user_hnYzAD6AXUQMaqTW36RMN')
    .then((res) => {
      console.log("form working");
    }, (error) => {
      console.log(error.text);
    });
    e.target.reset()
  }

  return <div>
    <div class="intro">
      <h1 class="header">Behind the Code</h1>  
        <img class="avatar" src={logo} alt="AK"/>
        <h2>- Alan Kapota -</h2>
      <div class="intro-content">                
        <p class="descr"> I am a,</p>
        <div class="extra">
          <span>Mechanical Engineer </span>
          <span>Web Developer </span>
          <span>Software Developer </span>
          <span>Python Developer </span>
          <span>Mobile App Developer </span>
        </div>
      </div>
      <div class="media">
        <ul class="social">
          <li><a href="https://www.instagram.com/behind.the_code/"><FaInstagram /></a></li>
          <li><a href="https://github.com/kapotaalan"><FaGithub /> </a></li>
          <li><a href="https://github.com/kapotaalan"><FaLinkedin /> </a></li>
          <li><a href="mailto:behindthecodeza@gmail.com"><FaEnvelope/> </a></li>
        </ul>
      </div>
    </div>

  {/*About Me*/}
  <div class="about">
    <h1 class="me">About Me</h1>    
    
    <p>I am Alan Kapota, I studied Mechanical Engineering
    and happened to fall in love with coding.</p>

    <p>Working at the sweet spot between Engineering and 
      Programming to answer design problems with honest 
      solutions. Join me on my journey in becoming a Full 
      Stack Developer. </p>
  </div>

    {/*My Services*/}
    <div>
      <div class="services">
        <h1>Services</h1>
        <div class="sgrid">

          <div class="cards">
            <FaLaptopCode size={90}/>
            <p>Web Development</p>     
            <p>Using different languages and frameworks 
              to produce stunning websites
              and web applications</p>       
          </div>
                    
          <div class="cards">          
            <FaMobileAlt size={90}/>
            <p>Mobile App Development</p>        
            <p>With the use of mobile phones becoming the main 
              source of interaction, mobile applications have 
              become a necessity</p>
          </div>
          
          <div class="cards">
            <FaSketch size={90}/>   
            <p>Web & Mobile Design</p> 
            <p>Ensuring the best web designs for a modern feel
              and optimized user experience</p>          
          </div>

        </div>
      </div>      
    </div>

    {/*My Work*/}
    <div>
      <div class="work">
        <h1>Work</h1>
        <div class="wgrid">

          <div class="card">
            <img src={login} alt="loginpages"/>            
              <p>Login pages</p>              
          </div>

          <div class="card">
            <img src={landing} alt="landingpages"/>            
              <p>Landing pages</p>
          </div>

          <div class="card">
            <img src={dash} alt="dashboards"/>  
              <p>Dashboards</p> 
          </div> 

          <div class="card">
            <img src={mobile} alt="mobileapps"/>  
              <p>Mobile Apps</p> 
          </div> 

        </div>        
      </div>      
    </div>

    {/*Contact Us*/}
    <form onSubmit={sendEmail}>
      <h1>Say Hello</h1>
      <input type="text" placeholder="Name" name="from_name" required />
      <input type="text" placeholder="Last Name" name="Lastname" required />
      <input type="email" placeholder="Email" name="email" required />      
      <textarea placeholder=" Message" name="message" cols="30" rows="10" required/>
      <button>Submit</button>
    </form>

    {/*Footer*/}
    <footer>
      <p>Created by Alan Kapota.&copy; 2021</p>        
    </footer>
</div>
}


ReactDOM.render(<Webpage/>,document.getElementById('root'));
