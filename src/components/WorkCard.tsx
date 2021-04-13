import NextLink from "next/link"
import { Badge, Box, Image } from "@chakra-ui/react"
import React from "react"
import { Work } from "../store/works";

type WorkCardProps = Work;

export const WorkCard = ({
  title,
  description,
  technologyStack,
  imageUrl,
  imageAlt,
}: WorkCardProps) => {
  const Tag = ({ name }: { name: string }) => {
    return (
      <Badge borderRadius="full" px="2" mr="2" colorScheme="teal" letterSpacing="wider">
        {name}
      </Badge>
    )
  }

  return (
    <NextLink href={`/works/${1}`}>
      <Box
        maxW="sm"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        cursor="pointer"
        transition="0.2s ease"
        _hover={{ boxShadow: "xl" }}
      >
        <Image src={imageUrl ?? ""} alt={imageAlt ?? ""} />

        <Box p="6" bg="white">
          <Box d="flex" alignItems="baseline">
            {technologyStack.map(name =>
              <Tag name={name} />
            )}
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {title}
          </Box>

          <Box
            mt="1"
            lineHeight="tight"
            fontSize="small"
            color="gray.600"
          >
            {description}
          </Box>
        </Box>
      </Box>
    </NextLink>
  )
}
