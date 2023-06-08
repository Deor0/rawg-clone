import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreID = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreID);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(platformId);

  const heading = `${selectedPlatform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading marginY={5} as="h1" fontSize="6xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
