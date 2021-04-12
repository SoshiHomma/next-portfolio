

import { motion, useAnimation } from 'framer-motion'
import { Box, Flex, Grid, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import React, { useEffect } from 'react'
import { WorkCard } from '../../components/WorkCard'
import { Container } from '../../components/Container'

const Works = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      transform: ["translateY(-20px)", "translateY(20px)", "translateY(-20px)"],
      opacity: [0.7, 0.3, 0.7],
      transition: { delay: i * 0.2, ease: "easeInOut", repeat: Infinity, duration: 3, times: [0, 0.5, 1] },
    }))
  }, [])

  return (
    <Container
      bg="gray.200"
    >
      <Stack justifyContent="center" my={32}>
        <Text textAlign="center" fontSize="48" fontWeight="bold" mb={8}>
          Works
        </Text>
        <SimpleGrid columns={3} spacing={10}>
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </SimpleGrid>
      </Stack>
    </Container>
  )
}

export default Works
