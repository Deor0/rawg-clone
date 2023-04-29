import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatForms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre();
  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);

  const { data: platforms } = usePlatForms();
  const selectedPlatform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const heading = `${selectedPlatform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading marginY={5} as="h1" fontSize="6xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
