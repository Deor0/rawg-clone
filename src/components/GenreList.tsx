import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImage from "../services/imageUrl";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenre();
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize="32px"
                borderRadius="50%"
                src={getCroppedImage(genre.image_background)}
              />
              <Button
                textDecoration={
                  genre.id === selectedGenre?.id ? "underline" : "none"
                }
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
                whiteSpace={"normal"}
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
