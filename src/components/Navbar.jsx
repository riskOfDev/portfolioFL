import { Flex } from '@chakra-ui/react'
import React from 'react'
import ChakraNextImage from './ChakraNextImage'
import NavbarLinkScroll from './NavbarLinkScroll'

const Navbar = () => {
  return (
    <Flex 
        bg="green"
        w="100%"
        minH="100px"
        align="center"
        justify="space-between"
        px="16"
    >
        <ChakraNextImage 
            src="/images/logo.png"
            alt="logo"
            w="34px"
            h="46px"
        />
        <Flex gap="14"> 
            <NavbarLinkScroll path='about' text='About' />
            <NavbarLinkScroll path='proyects' text='Proyects' />
            <NavbarLinkScroll path='contact' text='Contact' />
        </Flex>
    </Flex>
  )
}

export default Navbar