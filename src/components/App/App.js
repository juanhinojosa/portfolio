import { useEffect, useState,useCallback, useRef } from 'react';
import Chart  from '../Utility/Chart';
import { useAlert } from "react-alert";
import '../../css/glitch-text.css';
import './App.css';
import '../../css/override.css'

import ReactFullpage from "@fullpage/react-fullpage";
import emailjs from 'emailjs-com';

const iconData={
  reactJs:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
  fullpage:'https://raw.githubusercontent.com/alvarotrigo/fullPage.js/master/examples/imgs/intro.png',
  recharts:'https://shkarina.me/Recharts.png',
}

const sectionAvaileble=[
  'header',
  'front-end-experience',
  'back-end-experience',
  'database-experience',
  'integration-experience'
];

function App() {

  const alert = useAlert();
  const refHeader = useRef(null);  
  const refExp1 =useRef(null);
  const [y, setY] = useState(window.scrollY);
  const [lastDirection,setLastDirection] = useState();
  
  const [formData, updateFormData] = useState({
    fname:'',
    fmail:'',
    fmessage:''
  });

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

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

  function submitContact(e){
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_MAIL_SERVICE,
      process.env.REACT_APP_MAIL_TEMPLATE,
      e.target,
      process.env.REACT_APP_MAIL_USER)
    .then(res  =>{
      // console.log(res);
      if(res.status === 200){
        alert.success("Mensaje enviado correctamente");
        // clean form 
        formData.fname='';
        formData.fmail='';
        formData.fmessage='';
        updateFormData({
          ...formData
        });
      }else{
        alert.error("Error al enviar mensaje, "+res.text)
      }

    }).catch(error => {
      console.log(error);
      alert.error("Error al enviar mensaje, "+error)
    });
    /*for test without send email*/
    // var res ={
    //   "status": 200,
    //   "text": "OK"
    // }

    // if(res.status === 200){
    //   alert.success("Mensaje enviado correctamente");
    //   // clean form 
    //   formData.fname='';
    //   formData.fmail='';
    //   formData.fmessage='';
    //   updateFormData({
    //     ...formData
    //   });
    // }else{
    //   alert.error("Error al enviar mensaje, "+res.text)
    // }
    e.target.reset();

  }

  // useEffect(()=>{

  // },[formData]);


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
              <div className='slide '>
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
              </div>
              <div className='slide slide-company-worked'>
                  <h3>DUOC UC</h3>
                  <span className='span-city'>
                    <label className='label-detail'>2014 </label>
                    - Melipilla RM, Chile.
                  </span>
                  <span className='span-charge'>Desarrollador</span>
                  
                  <ul className='item-list-company-experience'>
                    <li>                      
                      Software de Reclutamiento para área de Personal - CITT en conjunto con <label className='label-detail'>Ariztia</label></li>
                    <li>
                      Ayudantía para alumnos de primer, segundo semestre en la carrera - Melipilla, <label className='label-detail'> Duoc UC </label>
                    </li>
                  </ul>
              </div>
              <div className='slide slide-company-worked'>
                  <h3>Ingemax ltda</h3>
                  <span className='span-city'>
                    <label className='label-detail'>2015 </label>
                    - Providencia RM, Chile.
                  </span>
                  <span className='span-charge'>Desarrollador</span>
                  
                  <ul className='item-list-company-experience'>
                    <li>                      
                      Elaboracion de pagina web para visualizacion de facturas de software interno en <label className='label-detail'>Ingemax</label></li>
                    <li>
                      Modifacion de modulos de reporte en Software de facturacion
                    </li>
                    <li>
                      Practica profesional realizando querys para reportes BI software <label className='label-detail'> QUANTRIX </label>
                    </li>
                  </ul>
              </div>
              <div className='slide slide-company-worked'>
                  <h3>Agrosistemas LTDA.</h3>
                  <span className='span-city'>
                    <label className='label-detail'>2015 - 2018 </label>
                    - Ariztia, Melipilla RM, Chile.
                  </span>
                  <span className='span-charge'>Desarrollador</span>
                  
                  <ul className='item-list-company-experience'>
                    <li>                      
                      Proyecto de integracion y automatizacion traspaso de datos 
                      a empresa externa de <label className='label-detail'>Sistema pedidos</label> vendedores</li>
                    <li>
                      Mantencion a proyectos <label className='label-detail'>WEB</label> de proveedores externos TI
                    </li>
                    <li>
                      Creacion de procesos automatizados para registrar documentos XML a Base de Datos para <label className='label-detail'> Business Analytics</label>
                    </li>
                    <li>
                      Sistema ingreso datos detenciones maquinaria de plantas de Ariztia 
                    </li>
                    <li>
                      Paso de Software Escritorio/UNIX a <label className='label-detail'>Sitio Web</label> de sistemas de uso interno en diferentes departamentos de la empresa
                    </li>
                    <li>
                      Creacion y modificacion en programas inter-empresa con <label className='label-detail'> Informix 4GL </label>
                    </li>
                  </ul>
              </div>
              <div className='slide slide-company-worked'>
                  <h3>Borealis SPA</h3>
                  <span className='span-city'>
                    <label className='label-detail'>2019-2020 </label>
                    - Las Condes RM, Chile.
                  </span>
                  <span className='span-charge'>Desarrollador</span>
                  
                  <ul className='item-list-company-experience'>

                    <li>                      
                      Proyecto <label className='label-detail'>Exportaciones</label> para Ariztia, 
                      en la que se maneja desde la administracion de la toma de pedidos hasta integraciones
                      con <label className='label-detail'>Aduana</label> externas para generacion de documentos legales </li>
                    <li>
                      Correccion de errores en proyecto de <label className='label-detail'>CORFO</label> 
                    </li>
                    <li>
                      Agrega modulo a Proyecto de empresa para manejo de facturaciones y procesos automaticos
                    </li>
                    <li>
                      Mantencion a proyectos web en Laravel y <label className='label-detail'> .NET  </label>
                    </li>
                  </ul>
              </div>
              <div className='slide slide-company-worked'>
                  <h3>Freelance </h3>
                  <span className='span-city'>
                    <label className='label-detail'>2020 - COVID - today </label>
                    - Melipilla RM, Chile.
                  </span>
                  <span className='span-charge'>Desarrollador / Soporte</span>
                  
                  <ul className='item-list-company-experience'>
                    <li>
                      Proyecto personal que <label className='label-detail'>genera codigo</label> de manera automatica 
                      basado en un modelo de datos en pseudocodigo personalizado                                                                
                    </li>
                    <li>
                      Creacion de tienda online para <label className='label-detail'> Dropshipping</label> 
                    </li>
                    <li>
                      Maquetacion UI y prototipo app movil con Flutter de proyecto<label className='label-detail'> Red Social - Trabajo</label> para Tatuadores y Clientes
                    </li>
                    <li>
                      Trabajo de <label className='label-detail'>Soporte</label> esporadicamente
                    </li>
                    <li>
                      Ayudante administrativo en empresa familiar
                    </li>
                  </ul>
              </div>
            </section>
            <section className='section fp-noscroll color-contact-form'>
              
              <form className="container-form"  onSubmit={submitContact} >
                <h3 className='experiece-title'>CONTACT ME</h3>
                <label for="fname">YOUR NAME</label>
                <input type="text" name='fname' id="fname" defaultValue={formData.fname}  onChange={handleChange} className="firstname" placeholder="Your name.." />

                <label for="fmail">MAIL</label>
                <input type="email" name='fmail' id="fmail" defaultValue={formData.fmail} onChange={handleChange} className="lastname" placeholder="example@uwu.cl" />

                <label for="subject">MESSAGE</label>
                <textarea id="subject" name='fmessage'  defaultValue={formData.fmessage}  onChange={handleChange} className="subject" placeholder="Write something.." rows={10} ></textarea>

                <input type="submit" value="Send"/>
              </form>
            </section>   
            <section className='section color-section-5 website-utiliced'>
              <h3>This website was made with </h3>
              
              <div className='row'>
                <div className='col'>
                  <img src={iconData.reactJs} width='50px' height='50px' alt='reactjslogo' />
                  <br></br>
                  <a href='https://reactjs.org/' target='_blank'  rel='noreferrer'>
                    React Js
                  </a>
                </div>
                <div className='col'>
                  <img src={iconData.fullpage} height='50px' alt='fullpagelogo' />
                  <br></br>
                  <a href='https://alvarotrigo.com/fullPage/' target='_blank'rel='noreferrer' >
                    fullpage.js
                  </a>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <img src={iconData.recharts} height='40px' alt='rechartLogo'></img>
                  <br></br>
                  <a href='https://recharts.org/' target='_blank' rel='noreferrer'>
                    recharts.js
                  </a>
                </div>
                <div className='col'>
                  <div className='glitch-example-icon'>
                    <h2>GLITCH</h2>
                    <h2>GLITCH</h2>
                    <h2>GLITCH</h2>
                  </div>
                  <br></br>
                  <a href='https://codepen.io/FelixRilling/pen/vNJoMy' target='_blank' rel='noreferrer'>
                    Glitch effect by Felix Rilling 
                  </a>
                </div>
              </div>
            </section>
          </ReactFullpage.Wrapper>
        );
      }}
    ></ReactFullpage>
    </>
  );
}

export default App;
