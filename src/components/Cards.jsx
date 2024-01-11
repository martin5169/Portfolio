import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack, Chip, Button, Box } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import MyVerticallyCenteredModal from "./ModalForImages";
import SP1 from "/SP1.png"
import SP2 from "/SP2.png"
import SP3 from "/SP3.png"
import SP4 from "/SP4.png"
import SP5 from "/SP5.png"

function Cards() {
  const selectedLanguage = useSelector((state) => state.language);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const goToPage = (url) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const [modalShow, setModalShow] = React.useState(false);

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
        <Card
          sx={{ maxWidth: 250 }}
          style={{
            backgroundColor: "whitesmoke",
            fontFamily: " font-family: 'Tektur', sans-serif",
          }}
          className="card-zoom"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/library.jpg"
              alt="Library"
            />
            <Stack direction="row" spacing={1} gap={1} className="tecnologias">
              <Chip
                label="React"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                fontFamily="'Tektur', sans-serif"
                backgroundColor="red"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />
              <Chip
                label="JavaScript"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />

              <Chip
                label="CSS"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />

              <Chip
                label="Bootstrap"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />

              <Chip
                label="Material UI"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />
            </Stack>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              >
                Library
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              >
                {selectedLanguage === "es"
                  ? " Aplicación web que permite a los usuarios crear y gestionar sus listas de lectura, con persistencia."
                  : " Web application that allows users to create and manage their reading lists, with persistence."}
              </Typography>
              <Button
                style={{ marginTop: "75px" }}
                variant="outlined"
                onClick={() => {
                  goToPage("https://react-library-tau.vercel.app/");
                }}
              >
                {selectedLanguage === "es" ? "WEB" : "WEB"}
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{ maxWidth: 250 }}
          style={{ backgroundColor: "whitesmoke" }}
          className="card-zoom"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/todo-list.jpg"
              alt="Library"
            />
            <Stack direction="row" spacing={1} gap={1} className="tecnologias">
              <Chip
                label="React"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />
              <Chip
                label="JavaScript"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />
              <Chip
                label="CSS"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />

              <Chip
                label="Tailwind CSS"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />

              <Chip
                label="Material UI"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />
            </Stack>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              >
                ToDoList
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              >
                {selectedLanguage === "es"
                  ? "   Aplicación web que permite crear una lista de tareas, con la posibilidad de ser filtradas por estados."
                  : " Web application that allows you to create a list of tasks, with the possibility of filtering them by status."}
              </Typography>
              <Button
                style={{ marginTop: "55px" }}
                variant="outlined"
                onClick={() => {
                  goToPage("https://todo-list-4bhu.vercel.app/");
                }}
              >
                {selectedLanguage === "es" ? "WEB" : "WEB"}
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{ maxWidth: 250 }}
          style={{ backgroundColor: "whitesmoke" }}
          className="card-zoom"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/pptijera.jpg"
              alt="pptijera"
            />
            <Stack direction="row" spacing={1} gap={1} className="tecnologias">
              <Chip
                label="React"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />
              <Chip
                label="JavaScript"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />
              <Chip
                label="CSS"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />
              <Chip
                label="Bootstrap"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />
            </Stack>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              >
                {selectedLanguage === "es"
                  ? "Piedra, papel o tijera"
                  : "Rock, Paper, Scissors "}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              >
                {selectedLanguage === "es"
                  ? "Pequeña recreación online del clásico juego."
                  : "Small online recreation of the classic game."}
              </Typography>
              <div>
                <Button
                  style={{ marginTop: "95px" }}
                  variant="outlined"
                  onClick={() => {
                    goToPage("https://piedra-papel-tijera-kohl.vercel.app/");
                  }}
                >
                  {selectedLanguage === "es" ? "WEB" : "WEB"}
                </Button>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{ maxWidth: 250 }}
          style={{ backgroundColor: "whitesmoke" }}
          className="card-zoom"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/rick&morti.jpg"
              alt="pptijera"
            />
            <Stack direction="row" spacing={1} gap={1} className="tecnologias">
              <Chip
                label="React"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />
              <Chip
                label="TypeScript"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />
              <Chip
                label="CSS"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />
              <Chip
                label="Material UI"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />
            </Stack>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              >
                {selectedLanguage === "es" ? "Rick & Morty" : "Rick & Morty"}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              >
                {selectedLanguage === "es"
                  ? " Página web que expone todos los personajes de la serie animada, consumiendo la API desarrollada por Axel Fuhrmann."
                  : " Website that exposes all the characters of the animated series, consuming the API developed by Axel Fuhrmann."}
              </Typography>

              <Button
                style={{ marginTop: "55px" }}
                variant="outlined"
                onClick={() => {
                  goToPage("https://rick-morty-tau-mauve.vercel.app/");
                }}
              >
                {selectedLanguage === "es" ? "WEB" : "WEB"}
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{ maxWidth: 250 }}
          style={{ backgroundColor: "whitesmoke" }}
          className="card-zoom"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/ortMedic.jpeg"
              alt="Library"
            />
            <Stack direction="row" spacing={1} gap={1} className="tecnologias">
              <Chip
                label="VueJS"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />
              <Chip
                label="JavaScript"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />
              <Chip
                label="NodeJS"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />

              <Chip
                label="CSS"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />

              <Chip
                label="Bootstrap"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />

              <Chip
                label="MongoDB"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />
            </Stack>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              >
                ORTMedic
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              >
                {selectedLanguage === "es"
                  ? " Página web desarrollada para una clinica médica, con registro de usuarios y medicos, brinda agenda para asignacion de turnos en ambos perfiles."
                  : " Website developed for a medical clinic, with registration of users and doctors, provides schedule for assigning shifts in both profiles"}
              </Typography>
              <Button
                style={{ marginTop: "35px" }}
                variant="outlined"
                onClick={() => {
                  goToPage("https://github.com/martin5169/proyectoTP2");
                }}
              >
                {selectedLanguage === "es" ? "GITHUB" : "GITHUB"}
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{ maxWidth: 250 }}
          style={{ backgroundColor: "whitesmoke" }}
          className="card-zoom"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/logoSafePet.jpeg"
              alt="SP"
            />
            <Stack direction="row" spacing={1} gap={1} className="tecnologias">
              <Chip
                label="Kotlin"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />

              <Chip
                label="Firebase"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              />
            </Stack>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              >
                SafePet
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ fontFamily: "'Tektur', sans-serif" }}
              >
                {selectedLanguage === "es"
                  ? " Aplicacion móvil, para el paseo inteligente de mascotas, permitiendo registrar usuarios y paseadores, con localización en vivo, utilizando los servicios de Google."
                  : " Mobile application, for the intelligent walking of pets, allowing users and walkers to register, with live location, using Google services."}
              </Typography>
              <Button
                style={{
                  marginTop: "35px",
                  marginRight: "5px",
                  fontFamily: "'Tektur', sans-serif",
                }}
                variant="outlined"
                onClick={() => setModalShow(true)}
              >
                {selectedLanguage === "es" ? "IMÁGENES" : "IMAGES"}
              </Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                title = {"SafePet"}
                images = {[SP1,SP2,SP3,SP4,SP5]}
                onHide={() => setModalShow(false)}
              />
              <Button
                style={{ marginTop: "35px", marginRight: "5px" }}
                variant="outlined"
                onClick={() => {
                  goToPage("https://github.com/martin5169/SafePet");
                }}
              >
                {selectedLanguage === "es" ? "Github" : "GO"}
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}

export default Cards;
