import {
  IconFileDownload,
} from "@tabler/icons-react";
import { Button, Tooltip } from "@mui/material";
import Navbar from "react-bootstrap/Navbar";
import "aos/dist/aos.css";
import Container from "react-bootstrap/Container";
import {
  IconBrandLinkedin,
  IconBrandGithubFilled,
  IconBrandGmail
} from "@tabler/icons-react";
import { useSelector } from 'react-redux';

function Body() {
  const selectedLanguage = useSelector((state) => state.language);

  const handleEmailClick = () => {
    window.location.href = 'mailto:ignaciomartincommisso@gmail.com';
  };


  return (
    <div className="name">
      <div className="intro">
      <h1>{selectedLanguage === 'es' ? "Ignacio Martin Commisso" : "Ignacio Martin Commisso" }</h1>
      <h3>{selectedLanguage === 'es' ? 'Analista de Sistemas' : "Systems Analyst"}</h3>
      <Container className="iconos">
        <Navbar.Brand href="https://www.linkedin.com/in/ignacio-martin-commisso-b9675b278/" title="Linkedin">
          <IconBrandLinkedin size={40}></IconBrandLinkedin>
        </Navbar.Brand>
        <Navbar.Brand href="https://github.com/martin5169" title="GitHub">
          <IconBrandGithubFilled size={40}></IconBrandGithubFilled>
        </Navbar.Brand>
        <Navbar.Brand title="Gmail">
          <IconBrandGmail size={40}
            color="white"
            style={{ cursor: 'pointer' }}
            onClick={handleEmailClick} ></IconBrandGmail>
        </Navbar.Brand>
      </Container>
      <div className="imagen">
        <img src="/pc.png" alt="pc" />
      </div>
      </div>
      
      <div className="aboutMe">
      <h2>{selectedLanguage === 'es' ? 'Sobre mí' : "About me"}</h2>
        <p className="aboutText">
          {selectedLanguage=="es"?
          "Soy un graduado en Análisis de Sistemas de la Universidad ORT Argentina, entusiasmado por comenzar mi carrera en el campo de la tecnología. Disfruto resolviendo problemas y enfrentando nuevos desafíos. Mi enfoque es proactivo, demostrando perseverancia y capacidad de adaptación." :
          "I am a Systems Analysis graduate from the University ORT Argentina, eager to take my first steps in the IT world. I love solving problems and tackling new challenges. I am proactive, persevering, and adaptable."}
        </p>
        <p className="aboutText">
          {selectedLanguage=="es"?"A lo largo de mis estudios, participé en diversos proyectos web y móviles, aplicando metodologías ágiles. Esta experiencia me ha permitido mejorar procesos y habilidades de estimación, contribuyendo al desarrollo efectivo de proyectos." :
          "Throughout my academic studies, I have been involved in various web and mobile projects, utilizing agile methodologies. This experience has allowed me to gain expertise, enabling me to enhance different processes and estimations effectively."}
        </p>
        
        
        <Button
          variant="outlined"
          color="inherit"
          href="https://drive.google.com/file/d/1xugWJ5BOa0hF-tIwjfw-oX1MrlR4XpZ-/view?usp=sharing"
          startIcon={<IconFileDownload size={30} />}
        >
          {selectedLanguage === 'es' ? 'VER CV' : "VIEW RESUME"}
        </Button>
      </div>

      <div className="skills">
        <h2>{selectedLanguage === 'es' ? 'Habilidades' : "Skills"}</h2>
        <Tooltip title="HTML5">
        <img src="./html5.svg" width={64} height={64} style={{ margin: 10 }}/>
        </Tooltip>
        <Tooltip title="CSS">
        <img src="./css.svg" width={64} height={64} style={{ margin: 10 }}/>
        </Tooltip>
        <Tooltip title="Tailwind">
        <img src="./tailwindcss.svg" width={64} height={64} style={{ margin: 10 }}/>
        </Tooltip>
        <Tooltip title="Javascript">
          <img src="./javascript.svg" width={64} height={64} style={{ margin: 10 }}/>
        </Tooltip>
        <Tooltip title="NodeJs">
        <img src="./nodejs.svg" width={64} height={64} style={{ margin: 10 }}/>
        </Tooltip>
        <Tooltip title="React">
        <img src="./react.svg" width={64} height={64} style={{ margin: 10 }}/>
        </Tooltip>
        <Tooltip title="Vue.js">
        <img src="./vue.svg" width={64} height={64} style={{ margin: 10 }}/>
        </Tooltip>
        <Tooltip title="JAVA">
          <img src="./java.svg" width={64} height={64} style={{ margin: 10 }}/>
        </Tooltip>
        <Tooltip title="Kotlin">
          <img src="./kotlin.svg" width={64} height={64} style={{ margin: 10 }}/>
        </Tooltip>
        <Tooltip title="MySql">
          <img src="./mysql.svg" width={64} height={64} style={{ margin: 10 }}/>
        </Tooltip>
        <Tooltip title="SQLserver">
          <img src="./sql-server.svg" width={64} height={64} style={{ margin: 10 }}/>
        </Tooltip>
        <Tooltip title="MongoDB">
          <img src="./mongodb.svg" width={64} height={64} style={{ margin: 10 }}/>
        </Tooltip>
        <Tooltip title="Firebase">
          <img src="./firebase.svg" width={64} height={64} style={{ margin: 10 }}/>
        </Tooltip>
      </div>
    </div>
  );
}

export default Body;
