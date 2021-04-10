
import { Container } from '../components/Container'
import { motion, useAnimation } from 'framer-motion'
import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/react"
import React, { useEffect } from 'react'

const Index = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      transform: ["translateY(0px)", "translateY(20px)", "translateY(0px)"],
      transition: { delay: i * 0.2, ease: "easeInOut", repeat: Infinity, duration: 3, times: [0, 0.5, 1] },
    }))
  }, [])

  const AnimateText = ({ text, idx }: { text: string, idx: number }) => {
    return (
      <motion.p
        custom={idx}
        animate={controls}
      >
        <Text margin="8px" fontSize={96} fontWeight="bold" color="white">
          {text}
        </Text>
      </motion.p>
    )
  }

  return (
    <Container height="100vh" bgGradient="linear(75deg, rgba(176,61,184,1) 30%, rgba(6,123,167,1) 71%, rgba(0,212,255,1) 100%)">
      <Flex>
        {"HI.".split("").map((text, idx) =>
          <AnimateText key={idx} text={text} idx={idx} />
        )}
      </Flex>
      <Stack justify="center" align="center">
        <Text fontSize="24" color="white" fontWeight="bold">
          I am Soshi Homma.
        </Text>
        <Text fontSize="24" color="white" fontWeight="bold" background="rgba(255, 255, 255, 0.1)">
          I develop Technology. System. Anything else.
        </Text>
        <Text fontSize="24" color="white" fontWeight="bold" background="rgba(255, 255, 255, 0.1)">
          I learn hard all the time to do anything.
        </Text>
      </Stack>
      <Stack mt={16}>
        <Text fontSize="32" color="white" fontWeight="bold" background="rgba(255, 255, 255, 0.2)" p={2}>
          Works
        </Text>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <Text fontSize="32" color="white" fontWeight="bold" background="rgba(255, 255, 255, 0.2)" p={2}>
            Gaming site
        </Text>
          <Text fontSize="32" color="white" fontWeight="bold" background="rgba(255, 255, 255, 0.2)" p={2}>
            Another is coming soon...
        </Text>
        </Grid>
      </Stack>
    </Container>
  )
}

export default Index
