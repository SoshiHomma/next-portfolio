import { Box, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Footer } from './Footer'

type LayoutProps = {
  children: ReactNode;
}

export const Layout = ({
  children,
}: LayoutProps) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
    >
      {children}
      <Footer />
    </Flex>
  )
}
