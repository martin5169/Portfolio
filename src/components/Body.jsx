import {
  IconBrandHtml5,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
  IconFileDownload,
} from "@tabler/icons-react";
import { Button, Tooltip } from "@mui/material";
import Navbar from "react-bootstrap/Navbar";
import "aos/dist/aos.css";
import Container from "react-bootstrap/Container";
import {
  IconBrandMysql,
  IconBrandKotlin,
  IconBrandJavascript,
  IconBrandCss3,
  IconBrandLinkedin,
  IconBrandGithubFilled,
  IconBrandVue,
} from "@tabler/icons-react";
import { useSelector } from 'react-redux';

function Body() {
  const selectedLanguage = useSelector((state) => state.language);

  return (
    <div className="name">
      <h1>{selectedLanguage === 'es' ? "Hola, soy Ignacio Martin Commisso" : "Hi, I'm Ignacio Martin Commisso" }</h1>
      <h3>{selectedLanguage === 'es' ? 'Analista de Sistemas' : "Systems Analyst"}</h3>
      <Container className="iconos">
        <Navbar.Brand href="https://www.linkedin.com/in/ignacio-martin-commisso-b9675b278/">
          <IconBrandLinkedin size={40}></IconBrandLinkedin>
        </Navbar.Brand>
        <Navbar.Brand href="https://github.com/martin5169">
          <IconBrandGithubFilled size={40}></IconBrandGithubFilled>
        </Navbar.Brand>
      </Container>
      <div className="imagen">
        <img src="/pc.png" alt="pc" />
      </div>

      <div className="aboutMe">
      <h2>{selectedLanguage === 'es' ? 'Sobre mí' : "About me"}</h2>
        <p className="aboutText">
          {selectedLanguage=="es"?"Analista de sistemas recién graduado en la universidad ORT Argentina,con muchas ganas de dar mis primeros pasos en el mundo IT. Me encanta resolver problemas y afrontar nuevos retos. Soy proactivo,perseverante y adaptable." :
          "Systems analyst recently graduated from the ORT University in Argentina, eager to take my first steps in the IT world. I love solving problems and taking on new challenges. I am proactive, persevering and adaptable."}
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
          <IconBrandHtml5 width={64} height={64} color="currentColor" />
        </Tooltip>
        <Tooltip title="CSS">
          <IconBrandCss3 width={64} height={64} />
        </Tooltip>
        <Tooltip title="JavaScript">
          <IconBrandJavascript width={64} height={64} />
        </Tooltip>
        <Tooltip title="React">
          <IconBrandReact width={64} height={64} />
        </Tooltip>
        <Tooltip title="Vue.js">
          <IconBrandVue width={64} height={64} />
        </Tooltip>
        <Tooltip title="MySQL">
          <IconBrandMysql width={64} height={64} />
        </Tooltip>
         <Tooltip title="Tailwind">
          <IconBrandTailwind width={64} height={64} />
        </Tooltip>
        <Tooltip title="NodeJs">
          <IconBrandNodejs width={64} height={64} />
        </Tooltip>
        <Tooltip title="Kotlin">
          <IconBrandKotlin width={64} height={64} />
        </Tooltip>
      </div>
    </div>
  );
}

export default Body;
