import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "data cleaning" ? (
            <ToggleButton
              active
              value="data cleaning"
              onClick={() => setToggle("data cleaning")}
            >
             Data Cleaning
            </ToggleButton>
          ) : (
            <ToggleButton
              value="data cleaning"
              onClick={() => setToggle("data cleaning")}
            >
             Data Cleaning
            </ToggleButton>
          )}
          <Divider />
          {toggle === "visualization" ? (
            <ToggleButton
              active
              value="visualization"
              onClick={() => setToggle("visualization")}
            >
              Visualization
            </ToggleButton>
          ) : (
            <ToggleButton
              value="visualization"
              onClick={() => setToggle("visualization")}
            >
              Visualization
            </ToggleButton>
          )}
          <Divider />

          {toggle === "exploration" ? (
            <ToggleButton
              active
              value="exploration"
              onClick={() => setToggle("exploration")}
            >
              Exploration
            </ToggleButton>
          ) : (
            <ToggleButton value="exploration" onClick={() => setToggle("exploration")}>
              Exploration
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
