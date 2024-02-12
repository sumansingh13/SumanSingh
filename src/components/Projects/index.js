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
          {toggle === "e commerce" ? (
            <ToggleButton
              active
              value="e commerce"
              onClick={() => setToggle("e commerce")}
            >
              E-COMMERCE
            </ToggleButton>
          ) : (
            <ToggleButton
              value="e commerce"
              onClick={() => setToggle("e commerce")}
            >
              E-COMMERCE
            </ToggleButton>
          )}
          <Divider />
          {toggle === "portfolio" ? (
            <ToggleButton
              active
              value="portfolio"
              onClick={() => setToggle("portfolio")}
            >
              PORTFOLIO
            </ToggleButton>
          ) : (
            <ToggleButton
              value="portfolio"
              onClick={() => setToggle("portfolio")}
            >
              PORTFOLIO
            </ToggleButton>
          )}
          <Divider />

          {toggle === "other" ? (
            <ToggleButton
              active
              value="other"
              onClick={() => setToggle("other")}
            >
              CHAT APP
            </ToggleButton>
          ) : (
            <ToggleButton value="other" onClick={() => setToggle("other")}>
              CHAT APP
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
            .filter((item) => item.category == toggle)
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
