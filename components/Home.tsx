"use client";
import React from 'react';
import { useTranslation } from 'react-i18next'
import ListGroup from 'react-bootstrap/ListGroup';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from 'next/image';



// Tipado para las habilidades
interface SkillCategory {
  name: string;
  items: string[];
}


const Home: React.FC = () => {
  const { t } = useTranslation()
  const skills: SkillCategory[] = [
    { name: "Frontend", items: ["React", "Next.js", "HTML5", "CSS3/SASS", "JavaScript/TypeScript"] },
    { name: "Backend", items: ["Node.js", "Express", "Python", "Django", "API RESTful"] },
    { name: t('database'), items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"] },
    { name: t('tools'), items: ["Git", "Docker", "AWS", "CI/CD", "Jest"] },
  ];

  return (
    <>
      {/* Sección principal */}
      <div id="developer" className="container-fluid d-flex justify-content-center align-items-start py-5">
        <div className="row flex-wrap p-4 rounded " style={{ maxWidth: "1300px", width: "100%" }}>
          <div className="col-md-4 img-container text-center mb-3 mb-md-0 ">
            <Image
                alt="Bootstrap Image Preview"
                src="https://raw.githubusercontent.com/JorgeIvan172/Imagenes/refs/heads/master/IvanH.jpg"
                className="rounded-circle img-fluid"
                width={350}
                height={350}
                style={{ height: 'auto' }}
                unoptimized // Esto es necesario para imágenes externas como GitHub
                />

          </div>
          <div className="col-md-8 text-container">
            <h1 style={{ fontSize: '4rem' }}>Iván Herrera</h1>

            <h4>{t('fullstack')}</h4>
            <p>
              {t('descr')} 
            </p>
            <p>
              <a className="btn btn-dark" href="#">
                Contacto
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Experiencia */}
      <div id="experience" className="container-fluid d-flex justify-content-center align-items-center py-4 fondo">
        <div className="row p-4 align-items-center" style={{ maxWidth: "1300px", width: "100%" }}>
          <h3 style={{ marginBottom: "25px" }}><i className="fas fa-briefcase me-2"></i> {t('experience')} </h3>

          <div className="col-md-12  experien border rounded shadow-sm bg-light h-100" style={{ marginTop: "20px" }}>
              <div className="row align-items-center">
                <div className="col-md-4 mb-3 mb-md-0  text-center" >
                  <h3 className="mb-1">Freelancer</h3>
                  <h5 className="text-muted">{t('present')}</h5>
                </div>
                <div className="col-md-8 ">
                  <h4>{t('fullstack')}</h4>
                  <p>
                    {t('dev')}
                  </p>
                </div>
              </div>
            </div>

          <div className="col-md-12  experien border rounded shadow-sm bg-light h-100" style={{ marginTop: "20px" }}>
              <div className="row align-items-center">
                <div className="col-md-4 mb-3 mb-md-0  text-center" >
                  <h3 className="mb-1">Sensata Technologies</h3>
                  <h5 className="text-muted">2021 - 2022</h5>
                </div>
                <div className="col-md-8 ">
                  <h4>{t('machine')}</h4>
                  <p>
                    {t('machinedes')}
                  </p>
                </div>
              </div>
            </div>
          
            <div className="col-md-12  experien border rounded shadow-sm bg-light h-100" style={{ marginTop: "20px" }}>
              <div className="row align-items-center">
                <div className="col-md-4 mb-3 mb-md-0  text-center" >
                  <h3 className="mb-1">Jatco México</h3>
                  <h5 className="text-muted">2018 - 2019</h5>
                </div>
                <div className="col-md-8 ">
                  <h4>{t('intern')}</h4>
                  <p>
                    {t('interdes')}
                  </p>
                </div>
              </div>
            </div>

         
        </div>
      </div>

      {/* Habilidades */}
      <div id="skills" className="container-fluid d-flex justify-content-center align-items-start py-4 home-skills">
        <div className="row bg-white p-4" style={{ maxWidth: "1300px", width: "100%" }}>
          <div className="col">
            <h3 style={{ marginBottom: "25px" }}><i className="fa-solid fa-code"></i>  {t('skills')}</h3>

            <div className="row">
              {skills.map((category, index) => (
                <div key={index} className="col-md-6 col-lg-3 mb-4">
                  <div className="p-3 border rounded shadow-sm bg-light h-100">
                    <h5 className="mb-3">{category.name}</h5>
                    <ul>
                      {category.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     

        {/* Escolaridad */}
     <div id="schooling" className="container-fluid d-flex justify-content-center align-items-center py-4 fondo" style={{paddingBottom:"15px"}}>
        <div className="row p-4 align-items-center" style={{ maxWidth: "1300px", width: "100%",  }}>
            <h3 style={{ marginBottom: "25px" }}><i className="fa-solid fa-graduation-cap"></i>  {t('schooling')}</h3>
            <div  className="col-md-12  experien border rounded shadow-sm bg-light h-100">
              <div className="row align-items-center ">
                <div className="col-md-4 mb-3 mb-md-0 text-center " >
                  <h3 className="mb-1"><i ></i> {t('school')}</h3>
                  <h5 className="text-muted">2024</h5>
                </div>
                <div className="col-md-8 border-start border-black ps-3">
                  <h4 className="mb-1" > {t('graduate')}</h4>
                </div>
              </div>
            </div>
        </div> 
      </div> 


      {/* Contact */}
       <div id="contact" className="container-fluid d-flex justify-content-center align-items-center py-4" style={{paddingBottom:"15px"}}>
        <div className="row p-4 align-items-center" style={{ maxWidth: "1300px", width: "100%",  }}>
            <h3 style={{ marginBottom: "25px" }}><i className="fa-solid fa-phone"></i>  {t('contact')}</h3>
           <ListGroup variant="flush">

            
            <ListGroup.Item variant="secondary" className="custom-item" style={{ fontSize: "1.25rem", padding: "1rem" }}>
              <i className="fa-solid fa-envelope"></i> {t('email')}{' '}
              <span
                className="email-copy"
                onClick={() => navigator.clipboard.writeText("ivan.herrera.g19@gmail.com")}
                title="Haz clic para copiar"
              >
                ivan.herrera.g19@gmail.com
              </span>
            </ListGroup.Item>

            <ListGroup.Item variant="secondary" className="custom-item" style={{ fontSize: "1.25rem", padding: "1rem" }}>
              <i className="fa-solid fa-phone"></i> {t('phone')}{' '}
              <span
                className="email-copy"
                onClick={() => navigator.clipboard.writeText("+52 449 520 47 76")}
                title="Haz clic para copiar"
              >
                +52 449 520 47 76
              </span>
            </ListGroup.Item>

            <ListGroup.Item variant="secondary" className="custom-item" style={{ fontSize: "1.25rem", padding: "1rem" }}>
              <i className="fa-solid fa-phone"></i> Github{' '}
              <span
                className="email-copy"
                onClick={() => navigator.clipboard.writeText("JorgeIvan172")}
                title="Haz clic para copiar"
              >
                JorgeIvan172
              </span>
            </ListGroup.Item>


            <ListGroup.Item variant="secondary" className="custom-item" style={{ fontSize: "1.25rem", padding: "1rem" }}>
              <i className="fa-solid fa-phone"></i> Linkedin{' '}
              <span
                className="email-copy"
                onClick={() => navigator.clipboard.writeText("JorgeIvan172")}
                title="Haz clic para copiar"
              >
                JorgeIvan172
              </span>
            </ListGroup.Item>
          </ListGroup>


        </div> 
      </div> 

      
      
          
<div className="footer">
  <div style={{ textAlign: "center", marginTop: "0rem", fontSize: "0.9rem", opacity: 0.7 }}>
    © {new Date().getFullYear()} Iván Herrera. Todos los derechos reservados.
  </div>
</div>



            
 <div>
    </div>
    </>
  );
};

export default Home;
