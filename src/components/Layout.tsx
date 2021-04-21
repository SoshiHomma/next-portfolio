import { Box, Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { Footer } from './Footer'

type LayoutProps = {
  children: ReactNode;
}

export const Layout = ({
  children,
}: LayoutProps) => {
  return (
    <Flex
      minHeight="100%"
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Box width="100%" height="100%">
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}
