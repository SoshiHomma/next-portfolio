

import { motion, useAnimation } from 'framer-motion'
import { Box, Flex, Grid, HStack, SimpleGrid, Stack, Text, Image, VStack, Badge, GridItem, Link } from "@chakra-ui/react"
import React from 'react'
import { Container } from '../../components/Container'
import { getAllWorks, getWorkBySlug, Work } from '../../store/works'
import { GetStaticPaths, NextPage } from 'next'
import { Layout } from '../../components/Layout'
import { FiGithub } from 'react-icons/fi'
import Zoom from 'react-medium-image-zoom'

type WorkPageProps = Work & {
}

type Params = {
  params: {
    slug: string;
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllWorks().map(work => ({ params: { slug: work.slug } }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params;
  const work = getWorkBySlug(slug);

  return {
    props: { ...work },
  }
}

const WorkPage: NextPage<WorkPageProps> = ({
  slug,
  title,
  description,
  imageUrl,
  imageAlt,
  technologyStack,
  images,
  links,
}) => {
  const Tag = ({ name }: { name: string }) => {
    return (
      <Badge borderRadius="full" px="2" mr="2" colorScheme="teal" letterSpacing="wider">
        {name}
      </Badge>
    )
  }

  return (
    <Layout>
      <Container
        bg="gray.200"
        width="100%"
        minHeight="100%"
      >
        <Flex flexDirection="column" mt={32} mb={48}>
          <Grid templateColumns="repeat(5, 1fr)" justifyContent="center" mb={32} maxW="container.xl">
            <GridItem colSpan={3}>
              <Image src={imageUrl ?? ""} alt={imageAlt ?? ""} boxShadow="2xl" borderRadius={12} />
            </GridItem>

            <GridItem colSpan={2}>
              <Flex flexDirection="column" alignItems="flex-start" mx={12} my={8}>
                <Text fontSize="5xl" style={{ fontFamily: "Noto Sans JP" }}>{title}</Text>
                <Text mb={2}>{description}</Text>
                <HStack mb={6}>
                  {technologyStack.map((tech, idx) =>
                    <Tag key={idx} name={tech} />
                  )}
                </HStack>
                <Flex flexDirection="column">
                  {links.github && (
                    <HStack alignItems="center">
                      <FiGithub style={{ marginTop: "2px" }} />
                      <Link href={links.github} isExternal>
                        {links.github}
                      </Link>
                    </HStack>
                  )}

                </Flex>
              </Flex>
            </GridItem>
          </Grid>

          <Flex flexDirection="column">
            <Text
              fontSize="4xl"
              pb={2}
              my={8}
              color="gray.800"
              style={{ fontFamily: "Noto Sans JP" }}
              borderBottom="1px"
              borderColor="gray.400"
            >
              Gallery
            </Text>

            <SimpleGrid columns={3} justifyContent="center">
              {images?.map(url =>
                <Zoom wrapStyle={{ height: "300px" }}>
                  <Image objectFit="cover" height="100%" width="100%" src={url} />
                </Zoom>
              )}
            </SimpleGrid>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  )
}

export default WorkPage;
