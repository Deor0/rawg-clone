import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  const name = "RAWG";
  return (
    <HStack justifyContent="space-between" padding="10px 20px">
      {/* <Image src={"https://rawg.io/assets/en/share-vk.png?v=4"} boxSize="60px" /> */}
      <a href="/">
        <HStack fontWeight="800" cursor="pointer" fontSize={"lg"}>
          {name.split("").map((char) => (
            <span key={name.indexOf(char)}>{char}</span>
          ))}
        </HStack>
      </a>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
