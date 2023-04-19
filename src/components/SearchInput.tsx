import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MdLocationSearching } from "react-icons/md";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<MdLocationSearching />} />
      <Input
        borderRadius={20}
        placeholder={"Search games..."}
        size="md"
        variant="filled"
        fontFamily="monospace"
      />
    </InputGroup>
  );
};

export default SearchInput;
