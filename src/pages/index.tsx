
import NextLink from "next/link"
import { Container } from '../components/Container'
import { motion, useAnimation } from 'framer-motion'
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react"
import React, { useEffect } from 'react'

const Index = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      transform: ["translateY(-30px)", "translateY(20px)", "translateY(-30px)"],
      opacity: [0.4, 0.1, 0.4],
      transition: { delay: i * 0.2, ease: "easeInOut", repeat: Infinity, duration: 3, times: [0, 0.5, 1] },
    }))
  }, [])

  const AnimatedText = ({ text, idx }: { text: string, idx: number }) => {
    return (
      <motion.div
        custom={idx}
        animate={controls}
      >
        <Text
          fontSize={700}
          fontWeight="bold"
          color="transparent"
          style={{
            "WebkitTextStrokeWidth": 2,
            "WebkitTextStrokeColor": "white",
            "userSelect": "none"
          }}
        >
          {text}
        </Text>
      </motion.div>
    )
  }

  return (
    <Container
      height="100vh"
      bgGradient="linear(75deg, rgba(176,61,184,1) 30%, rgba(6,123,167,1) 71%, rgba(0,212,255,1) 100%)"
    >
      <Box height="100%" width="100%" position="relative" overflow="hidden">
        <Flex
          position="absolute"
          top="50%"
          left="50%"
          transform="translateY(-50%) translateX(-50%)"
        >
          {"HELLO".split("").map((text, idx) =>
            <AnimatedText key={idx} text={text} idx={idx} />
          )}
        </Flex>
        <Box position="relative" height="100%" width="100%" zIndex={2}>
          <Stack justify="center" align="center" m="auto" height="100%">
            <Text fontSize="32" color="white" fontWeight="bold" m={4}>
              I am Soshi Homma.
            </Text>
            <Text fontSize="24" color="white" fontWeight="bold" m={2} p={1} background="rgba(255, 255, 255, 0.1)">
              I develop Technology. System. Anything else.
            </Text>
            <Text fontSize="24" color="white" fontWeight="bold" m={2} p={1} background="rgba(255, 255, 255, 0.1)">
              I learn hard all the time to do anything.
            </Text>
            <Box m={12}>
              <NextLink href="/works">
                <Button
                  colorScheme="whiteAlpha"
                  variant="outline"
                  color="white"
                  fontSize="32"
                  p={12}
                  textTransform="uppercase"
                  fontWeight="bold"
                  _focus={{
                    outline: "none",
                  }}
                >
                  Checkout my works
                </Button>
              </NextLink>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  )
}

export default Index
