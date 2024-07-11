// src/components/ProjectCard.tsx
import {
  Box,
  Center,
  Heading,
  LinkBox,
  LinkOverlay,
  Image,
} from "@chakra-ui/react";

interface ProjectCardProps {
  name: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, image, link }) => (
  <Center py={12}>
    <LinkBox
      as="article"
      role={"group"}
      p={6}
      maxW={"330px"}
      w={"full"}
      bg={"white"}
      boxShadow={"2xl"}
      pos={"relative"}
      zIndex={1}
    >
      <LinkOverlay href={link} isExternal>
        <Image
          rounded={0}
          height={230}
          width={"282"}
          objectFit={"cover"}
          src={image}
          alt="#"
        />

        <Box mt={-12} pos={"relative"} height={"47px"}>
          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={500}
            color={"white"}
            pl={4}
          >
            {name}
          </Heading>
        </Box>
      </LinkOverlay>
    </LinkBox>
  </Center>
);

export default ProjectCard;
