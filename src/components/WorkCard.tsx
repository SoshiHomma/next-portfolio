import NextLink from "next/link"
import { Badge, Box, Image } from "@chakra-ui/react"
import React from "react"
import { Work } from "../store/works";

type WorkCardProps = Work;

export const WorkCard = ({
  slug,
  title,
  description,
  technologyStack,
  imageUrl,
  imageAlt,
}: WorkCardProps) => {
  const getTruncatedTags = () => {
    const truncatedTags: string[] = [];
    let letterCount: number = 0;
    let moreTagCount: number = 0;

    technologyStack.forEach(tech => {
      // TODO: これスマホのデザインにも対応できるか検討
      if (letterCount < 15) {
        truncatedTags.push(tech);
        letterCount += tech.length;
      } else {
        moreTagCount++;
      }
    })

    return moreTagCount > 0 ? truncatedTags.concat(`+${moreTagCount} more tags`) : truncatedTags;
  }

  const Tag = ({ name }: { name: string }) => {
    if (name.includes("more tags")) { // TODO: これあんま良くないので治す
      return (
        <Badge borderRadius="full" px="2" mr="2" colorScheme="teal" letterSpacing="wider" textColor="teal.500">
          {name}
        </Badge>
      )
    }

    return (
      <Badge borderRadius="full" px="2" mr="2" colorScheme="teal" letterSpacing="wider">
        {name}
      </Badge>
    )
  }

  return (
    <NextLink href={`/works/${slug}`}>
      <Box
        alignSelf="start"
        bg="white"
        maxW="sm"
        borderRadius="lg"
        overflow="hidden"
        cursor="pointer"
        transition="0.2s ease"
        boxShadow="md"
        _hover={{ boxShadow: "xl" }}
      >
        <Image width="100%" maxHeight="350px" objectFit="cover" objectPosition="center" src={imageUrl ?? ""} alt={imageAlt ?? ""} />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {getTruncatedTags().map((name, idx) =>
              <Tag key={idx} name={name} />
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
