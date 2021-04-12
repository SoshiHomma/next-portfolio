import NextLink from "next/link"
import { Badge, Box, Image } from "@chakra-ui/react"
import React from "react"

export function WorkCard() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "テストプロジェクト",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
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
        <Image src={property.imageUrl} alt={property.imageAlt} />

        <Box p="6" bg="white">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" mr="2" colorScheme="teal">
              Next.js
          </Badge>
            <Badge borderRadius="full" px="2" mr="2" colorScheme="teal">
              React.js
          </Badge>
            <Badge borderRadius="full" px="2" mr="2" colorScheme="teal">
              Typescript
          </Badge>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {property.title}
          </Box>
        </Box>
      </Box>
    </NextLink>
  )
}
