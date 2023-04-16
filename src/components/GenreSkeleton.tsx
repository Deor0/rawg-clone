import { Card, HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <Card>
      <HStack>
        <SkeletonCircle />
        <SkeletonText />
      </HStack>
    </Card>
  );
};

export default GenreSkeleton;
