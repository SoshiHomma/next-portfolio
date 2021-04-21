

import { useAnimation } from 'framer-motion'
import { SimpleGrid, Stack, Text } from "@chakra-ui/react"
import React, { useEffect } from 'react'
import { WorkCard } from '../../components/WorkCard'
import { Container } from '../../components/Container'
import { workList } from '../../store/works'
import { NextPage } from 'next'
import { Layout } from '../../components/Layout'

const WorkIndexPage: NextPage = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      transform: ["translateY(-20px)", "translateY(20px)", "translateY(-20px)"],
      opacity: [0.7, 0.3, 0.7],
      transition: { delay: i * 0.2, ease: "easeInOut", repeat: Infinity, duration: 3, times: [0, 0.5, 1] },
    }))
  }, [])

  return (
    <Layout>
      <Container
        width="100%"
        minHeight="100%"
        bg="gray.200"
      >
        <Stack justifyContent="center" my={32}>
          <Text textAlign="center" fontSize="48" fontWeight="bold" mb={8}>
            Works
          </Text>
          <SimpleGrid columns={3} spacing={10}>
            {workList.map(work =>
              <WorkCard key={work.id} {...work} />
            )}
          </SimpleGrid>
        </Stack>
      </Container>
    </Layout>
  )
}

export default WorkIndexPage;
