import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 70 ? "green" : score > 50 ? "yello" : "red";

  return (
    <Badge colorScheme={color} fontSize="15px" paddingX={2} borderRadius="5px">
      {score}
    </Badge>
  );
};

export default CriticScore;
