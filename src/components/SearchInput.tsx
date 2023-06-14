import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { MdLocationSearching } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<MdLocationSearching />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder={"Search games..."}
          size="md"
          variant="filled"
          fontFamily="monospace"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
