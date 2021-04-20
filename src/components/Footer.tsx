import { Box, Button, Flex, FlexProps, Text } from '@chakra-ui/react'
import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';

export const Footer = (props: FlexProps) => {
  const [heartLighten, setHeartLighten] = useState<boolean>(false)
  return (
    <Flex
      justifyContent="flex-end"
      bg="gray.300"
      color="gray.800"
      as="footer"
      py="1rem"
      px={8}
      width="100%"
      {...props}
    >
      <Box d="flex" alignItems="center">
        <Text mr={1}>This site is made by Soshi Homma with</Text>
        <Button
          variant="unstyled"
          minWidth={0}
          height="auto"
          color={heartLighten ? "red.500" : ""}
          _focus={{ boxShadow: "none" }}
          onClick={() => setHeartLighten(state => !state)}
        >
          <FiHeart
            style={{ transitionDuration: "200ms" }}
            fill={heartLighten ? "var(--chakra-colors-red-500)" : "transparent"}
            color={heartLighten ? "red.500" : ""}
          />
        </Button>
      </Box>
    </Flex>
  )
}

