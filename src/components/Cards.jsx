import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack, Chip, Button, Box } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import MyVerticallyCenteredModal from "./ModalForImages";

import SP1 from "/SP1.png";
import SP2 from "/SP2.png";
import SP3 from "/SP3.png";
import SP4 from "/SP4.png";
import SP5 from "/SP5.png";

function Cards() {
  const selectedLanguage = useSelector((state) => state.language);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const projects = [
    {
      titleEs: "Librería",
      titleEn: "Bookstore",
      image: "/library.jpg",
      technologies: ["React", "JavaScript", "CSS", "Boostrap", "Material UI"],
      descriptionEs:
        "Página web que permite a los usuarios crear y gestionar sus listas de lectura, con listado de favoritos.",
      descriptionEn:
        "Website that allows users to create and manage their reading lists, with list of favorites.",
      url: "https://react-library-tau.vercel.app/",
    },
    {
      titleEs: "Lista de tareas",
      titleEn: "To Do List",
      image: "/todo-list.jpg",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "Tailwind CSS",
        "Material UI",
      ],
      descriptionEs:
        "Aplicación web que permite crear una lista de tareas, con la posibilidad de ser filtradas por estados.",
      descriptionEn:
        "Web application that allows you to create a list of tasks, with the possibility of filtering them by status.",
      url: "https://todo-list-4bhu.vercel.app/",
    },
    {
      titleEs: "Rick & Morty",
      titleEn: "Rick & Morty",
      image: "/rick&morti.jpg",
      technologies: ["React", "TypeScript", "CSS", "Material UI"],
      descriptionEs:
        "Página web que expone todos los personajes de la serie animada, consumiendo la API desarrollada por Axel Fuhrmann.",
      descriptionEn:
        "Website that exposes all the characters of the animated series, consuming the API developed by Axel Fuhrmann.",
      url: "https://rick-morty-tau-mauve.vercel.app/",
    },
    {
      titleEs: "TaTeTi",
      titleEn: "TicTacToe",
      image: "/ticTac.jpg",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Boostrap"],
      descriptionEs: "Recreación online del clásico juego.",
      descriptionEn: "Online recreation of the classic game.",
      url: "https://tic-tac-toe-theta-roan.vercel.app/",
    },
    {
      titleEs: "ORTMedic",
      titleEn: "ORTMedic",
      image: "/ortMedic.jpeg",
      technologies: [
        "VueJS",
        "JavaScript",
        "NodeJS",
        "CSS",
        "Boostrap",
        "MongoDB",
      ],
      descriptionEs:
        "Página web desarrollada para una clínica médica, con registro de usuarios y médicos, brinda agenda para asignación de turnos en ambos perfiles.",
      descriptionEn:
        "Website developed for a medical clinic, with registration of users and doctors, provides schedule for assigning shifts in both profiles.",
      url: "https://github.com/martin5169/proyectoTP2",
    },
    {
      titleEs: "SafePet",
      titleEn: "SafePet",
      image: "/logoSafePet.jpeg",
      technologies: ["Kotlin", "Firebase"],
      descriptionEs:
        "Aplicación móvil, para el paseo inteligente de mascotas, permitiendo registrar usuarios y paseadores, con localización en vivo, utilizando los servicios de Google.",
      descriptionEn:
        "Mobile application, for the intelligent walking of pets, allowing users and walkers to register, with live location, using Google services.",
      url: "https://github.com/martin5169/SafePet",
      images: [SP1, SP2, SP3, SP4, SP5],
    },
    {
      titleEs: "Piedra, papel o tijera",
      titleEn: "Rock, paper  or scissors",
      image: "/pptijera.jpg",
      technologies: ["React", "JavaScript", "CSS", "Boostrap"],
      descriptionEs: "Pequeña recreación online del clásico juego.",
      descriptionEn: "Online recreation of the classic game.",
      url: "https://piedra-papel-tijera-kohl.vercel.app/",
    },
  ];

  const goToPage = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <h2>{selectedLanguage === "es" ? "Proyectos" : "Projects"}</h2>
      <div
        className="projects"
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{ maxWidth: 280 }}
            style={{ backgroundColor: "white", cursor: "pointer" }}
            className="card-zoom"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image={project.image}
                alt={project.titleEn}
              />
              <Stack
                direction="row"
                spacing={1}
                gap={1}
                className="tecnologias"
              >
                {project.technologies.map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech}
                    color="primary"
                    variant="outlined"
                    size="small"
                    className="pillTecnologias"
                    style={{ fontFamily: "'Tektur', sans-serif" }}
                  />
                ))}
              </Stack>
            </CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              >
                {selectedLanguage == "es" ? project.titleEs : project.titleEn}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontFamily: "'Tektur'", minHeight: "120px" }}
              >
                {selectedLanguage === "es"
                  ? project.descriptionEs
                  : project.descriptionEn}
              </Typography>
            </CardContent>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Button
                variant="outlined"
                onClick={() => {
                  goToPage(project.url);
                }}
              >
                {project.titleEs === "ORTMedic" ||
                project.titleEn === "ORTMedic" ||
                project.titleEs === "SafePet" ||
                project.titleEn === "SafePet"
                  ? "GitHub"
                  : "WEB"}
              </Button>
            </Box>
            {/* Renderizo el boton de imagenes solo para el proyecto de SafePet*/}
            {(project.titleEs === "SafePet" ||
              project.titleEn === "SafePet") && (
              <Button
                style={{ marginTop: "px" }}
                variant="outlined"
                onClick={() => setModalShow(true)}
              >
                {selectedLanguage === "es" ? "IMÁGENES" : "IMAGES"}
              </Button>
            )}
            {/* Renderizar el modal de imagenes solo para SafePet */}
            {(project.titleEs === "SafePet" ||
              project.titleEn === "SafePet") && (
              <MyVerticallyCenteredModal
                show={modalShow}
                title = "APP SafePet"
                images={project.images}
                onHide={() => setModalShow(false)}
              />
            )}
          </Card>
        ))}
      </div>
    </>
  );
}

export default Cards;
