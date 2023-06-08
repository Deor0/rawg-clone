import { HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const name = "RAWG";
  return (
    <HStack padding="10px 20px">
      <a href="/">
        <HStack fontWeight="800" cursor="pointer" fontSize={"lg"}>
          {name.split("").map((char) => (
            <span key={name.indexOf(char)}>{char}</span>
          ))}
        </HStack>
      </a>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
