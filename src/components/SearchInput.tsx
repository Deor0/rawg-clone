import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { MdLocationSearching } from "react-icons/md";

interface Props {
  onSearch: (searchValue: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
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
