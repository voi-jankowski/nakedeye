// src/components/Projects.tsx
import { Flex } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

interface ProjectProps {
  name: string;
  image: string;
  link: string;
}

const projects: ProjectProps[] = [
  {
    name: "Project 1",
    image:
      "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
    link: "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
  },
  {
    name: "Project 2",
    image:
      "https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o",
    link: "https://example.com/project2",
  },
  {
    name: "Project 3",
    image:
      "https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g",
    link: "https://example.com/project3",
  },
];

const Projects = () => (
  <Flex
    height="100%"
    justifyContent="space-around"
    alignItems="center"
    wrap="wrap"
    p={4}
    bg="transparent"
  >
    {projects.map((project) => (
      <ProjectCard
        name={project.name}
        image={project.image}
        link={project.link}
      />
    ))}
  </Flex>
);

export default Projects;
