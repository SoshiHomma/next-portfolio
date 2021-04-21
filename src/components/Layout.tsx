import { Flex } from '@chakra-ui/react'
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
      <Flex width="100%" minHeight="100%" flexGrow={1}>
        {children}
      </Flex>
      <Footer />
    </Flex>
  )
}
