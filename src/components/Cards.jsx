import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack, Chip, Button, Box } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";

function Cards() {
  const selectedLanguage = useSelector((state) => state.language);
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
          style={{ backgroundColor: "whitesmoke" }}
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
              />
              <Chip
                label="JavaScript"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
              />

              <Chip
                label="CSS"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
              />

              <Chip
                label="Bootstrap"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
              />

              <Chip
                label="Material UI"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
              />
            </Stack>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Library
              </Typography>
              <Typography variant="body2" color="text.secondary">
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
                {selectedLanguage === "es" ? "IR" : "GO"}
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
              />
              <Chip
                label="JavaScript"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
              />
              <Chip
                label="CSS"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
              />

              <Chip
                label="Tailwind CSS"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
              />

              <Chip
                label="Material UI"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
              />
            </Stack>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ToDoList
              </Typography>
              <Typography variant="body2" color="text.secondary">
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
                {selectedLanguage === "es" ? "IR" : "GO"}
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
              />
              <Chip
                label="JavaScript"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
              />
              <Chip
                label="CSS"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
              />
              <Chip
                label="Bootstrap"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
              />
            </Stack>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {selectedLanguage === "es"
                  ? "Piedra, papel o tijera"
                  : "Rock, Paper, Scissors "}
              </Typography>
              <Typography variant="body2" color="text.secondary">
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
                  {selectedLanguage === "es" ? "IR" : "GO"}
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
              />
              <Chip
                label="TypeScript"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
              />
              <Chip
                label="CSS"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
              />
              <Chip
                label="Material UI"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
              />
            </Stack>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {selectedLanguage === "es"
                  ? "Rick & Morty API"
                  : "Rick & Morty API"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
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
                {selectedLanguage === "es" ? "IR" : "GO"}
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
              />
              <Chip
                label="JavaScript"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
              />
              <Chip
                label="NodeJS"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
              />

              <Chip
                label="CSS"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
              />

              <Chip
                label="Bootstrap"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
              />

              <Chip
                label="MongoDB"
                color="primary"
                variant="outlined"
                size="small"
                className="pillTecnologias"
              />
            </Stack>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ORTMedic
              </Typography>
              <Typography variant="body2" color="text.secondary">
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
                {selectedLanguage === "es" ? "IR" : "GO"}
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}

export default Cards;
