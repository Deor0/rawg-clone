import { Flex, Heading, Image } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Flex
        paddingTop="1rem"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap="1rem"
      >
        <Heading>
          {isRouteErrorResponse(error)
            ? "404 NOT FOUND"
            : "Sorry, an unexpected error has occurred."}
        </Heading>
        <Image
          borderRadius="2xl"
          height="2xl"
          src="https://content.swncdn.com/godvine/pics/GV-Article/cat-hero3.jpg"
        />
      </Flex>
    </>
  );
};

export default ErrorPage;
