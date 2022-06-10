import { useEffect, useState,useCallback, useRef } from 'react';
import Chart  from '../Utility/Chart';
import './App.css';
import '../../css/glitch-text.css';
import '../../css/override.css'

import ReactFullpage from "@fullpage/react-fullpage";


const sectionAvaileble=[
  'header',
  'front-end-experience',
  'back-end-experience',
  'database-experience',
  'integration-experience'
];

function App() {

  
  const refHeader = useRef(null);  
  const refExp1 =useRef(null);
  const [y, setY] = useState(window.scrollY);
  const [lastDirection,setLastDirection] = useState();

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        console.log("scrolling up");
        setLastDirection("U");
        
      } else if (y < window.scrollY) {
        console.log("scrolling down");
        setLastDirection("D");
        
      }
      setY(window.scrollY);
    },
    [y]
  );
  
  const scrollTo = (ref) => {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(()=>{
    if(lastDirection === 'U'){
      // refHeader.current.scrollIntoView();
      console.log("U");
      scrollTo(refHeader);
    }
    if(lastDirection === 'D'){
      console.log("D");
      refExp1.current.scrollIntoView( { behavior: 'smooth', block: 'start' } );
      // scrollTo(refExp1);
    }

  },[lastDirection]);

  const anchors = ["Myself", "frontEnd", "BackEnd", "DataBase", "Integration"];

  return (
    <>
    <ReactFullpage
      //fullpage options
      //https://github.com/alvarotrigo/fullPage.js/#fullpagejs -> this have custom options 
      licenseKey={''}
      anchors={anchors}
      scrollingSpeed = {500} /* Options here */
      navigation
      navigationTooltips={anchors}
      slidesNavigation={true}
	    slidesNavPosition= 'bottom'
      controlArrows={false}
      dragAndMove={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            
            <section ref={refHeader} id='header' className='section active section-full-page with-glitch-back'>
              {/* Here goes your name, what you do, logo, and could be something else */}
              <div id='my-title' className='center-content my-title'>
                <div id='container'>
                  <h1>JUAN HINOJOSA</h1>
                  <h1>JUAN HINOJOSA</h1>
                  <h1>JUAN HINOJOSA</h1>
                </div>
                <span>FULL STACK DEVELOPER</span>
              </div>
            </section>
            <div className='section'>
              <section id='front-end-experience' className='slide color-section-2 left-text '>
                <h3 className='experiece-title'>FRONT END</h3>
                <div className='float-left'>
                  <ul className='item-list'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>ReactJS</li>
                    <li>VueJS</li>
                    <li>ADOBE XD</li>
                  </ul>
                </div>
                <div className=''>
                  <div className='experience-description '>
                    {/* <h3>This will have a little description of years, </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sapien sed enim facilisis, at pellentesque nisi vulputate. Cras semper lectus eu tempor ultrices. Morbi porttitor vitae ipsum id consequat.</p> */}
                    <Chart option={1}></Chart>
                  </div>
                </div>
              </section>
              <section ref={refExp1} id='back-end-experience' className='slide  color-section-3 right-text'>
                <h3 className='experiece-title'>BACK END</h3>
                <div  className='float-right'>
                  <ul className='item-list float-right'>
                    <li>ASP.NET Core</li>
                    <li>ASP.NET MVC</li>
                    <li>Informix 4GL</li>
                    <li>Java</li>
                    <li>Laravel - PHP</li>
                  </ul>
                </div>
                <div className=''>
                  <div className='experience-description '>
                    {/* <h3>This will have a little description of years, </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sapien sed enim facilisis, at pellentesque nisi vulputate. Cras semper lectus eu tempor ultrices. Morbi porttitor vitae ipsum id consequat.</p> */}
                    <Chart option={2}></Chart>
                  </div>
                </div>
                
              </section>
              <section id='database-experience' className='slide  color-section-4'>
                <h3 className='experiece-title'>DATABASE</h3>
                <div className='float-left'>
                  <ul className='item-list'>
                    <li>SQL Server</li>
                    <li>Mysql</li>
                    <li>PostgreSQL</li>
                    <li>Informix</li>
                  </ul>
                </div>
                <div className=''>
                  <div className='experience-description '>
                    {/* <h3>This will have a little description of years, </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sapien sed enim facilisis, at pellentesque nisi vulputate. Cras semper lectus eu tempor ultrices. Morbi porttitor vitae ipsum id consequat.</p> */}
                    <Chart option={3}></Chart>
                  </div>
                </div>
              </section>
              <section id='integration-experience' className='slide  color-section-4 right-text'>
                <h3 className='experiece-title'>INTEGRATION</h3>
                <div className='flaot-right'>
                  <ul className='item-list float-right'>
                    <li>Pentaho</li>
                    <li>Custom XML Integration App</li>
                    <li>Others</li>
                  </ul>
                </div>
                <div className=''>
                  <div className='experience-description '>
                    {/* <h3>This will have a little description of years, </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sapien sed enim facilisis, at pellentesque nisi vulputate. Cras semper lectus eu tempor ultrices. Morbi porttitor vitae ipsum id consequat.</p> */}
                    <Chart option={4}></Chart>
                  </div>
                </div>
              </section>
            </div>
            <section className='section color-section-5' >
              <ul className='item-list-company'>
                <li>
                  <div class="bullet big">
                    <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><path d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4zm0-4C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0z"></path><circle cx="16" cy="16" r="6"></circle></svg>
                  </div>
                  FREELANCE
                </li>
                <li>
                  <div class="bullet">
                    <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><circle stroke="none" cx="16" cy="16" r="10"></circle></svg>
                  </div>
                  BOREALIS SPA</li>
                <li>
                  <div class="bullet">
                    <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><circle stroke="none" cx="16" cy="16" r="10"></circle></svg>
                  </div>
                  ARIZTIA
                </li>
                <li>
                  <div class="bullet">
                    <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><circle stroke="none" cx="16" cy="16" r="10"></circle></svg>
                  </div>
                  INGEMAX
                </li>
                <li>
                  <div class="bullet">
                    <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><circle stroke="none" cx="16" cy="16" r="10"></circle></svg>
                  </div>
                  DUOC UC
                </li>
              </ul>
            </section>
            <section className='section fp-noscroll color-contact-form'>
              
              <div className="container">
                <h3 className='experiece-title'>CONTACT ME</h3>
                <label for="fname">YOUR NAME</label>
                <input type="text" id="fname" className="firstname" placeholder="Your name.." />

                <label for="lname">MAIL</label>
                <input type="email" id="lname" className="lastname" placeholder="example@uwu.cl" />

                <label for="subject">MESSAGE</label>
                <textarea id="subject" className="subject" placeholder="Write something.." rows={10} ></textarea>

                <input type="submit" value="Send"/>
              </div>
            </section>            
            <section>          
              {/* <a href="https://www.freepik.com/photos/glitch-texture">Glitch texture photo created by rawpixel.com - www.freepik.com</a> */}
            </section>
          </ReactFullpage.Wrapper>
        );
      }}
    ></ReactFullpage>
    </>
  );
}

export default App;
