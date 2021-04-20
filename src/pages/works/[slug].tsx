

import { motion, useAnimation } from 'framer-motion'
import { Box, Flex, Grid, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import React from 'react'
import { Container } from '../../components/Container'
import { getAllWorks, getWorkBySlug, Work } from '../../store/works'
import { GetStaticPaths, NextPage } from 'next'

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
}) => {
  return (
    <Container
      bg="gray.200"
      minHeight="100%"
    >
      {slug}
    </Container>
  )
}

export default WorkPage;
