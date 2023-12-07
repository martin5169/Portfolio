import React from "react";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack, Chip, Button, Box } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";

function Cards() {
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
      <h2>Projects</h2>
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
              image="./src/assets/library.jpg"
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
                Aplicación web que permite a los usuarios crear y gestionar sus
                listas de lectura, con persistencia.
              </Typography>
              <Button
                style={{ marginTop: "35px" }}
                variant="outlined"
                href="#outlined-buttons"
                onClick={() => {
                  goToPage("https://react-library-tau.vercel.app/");
                }}
              >
                Visitar
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
              image="./src/assets/todo-list.jpg"
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
                Aplicación web que permite utilizar una lista de tareas, con la posibilidad de ser filtradas por estados.
              </Typography>
              <Button
                style={{ marginTop: "15px" }}
                variant="outlined"
                href="#outlined-buttons"
                onClick={() => {
                  goToPage("https://todo-list-4bhu.vercel.app/");
                }}
              >
                Visitar
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>

      </div>
    </>
  );
}

export default Cards;
