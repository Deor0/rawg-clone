import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImage from "../services/imageUrl";
import CriticScore from "./CriticScore";
import PlatfromIcons from "./PlatfromIcons";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatfromIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
