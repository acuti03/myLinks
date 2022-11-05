import React from "react";
import {
    Spacer,
    Heading,
    Flex,
    Image,
    Link,
    Button
}from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ThemeButton  from './themeButton';
import Logo from '../image/logo.png'
import { motion } from 'framer-motion'

const Navbar = () =>{
    return(
        <Flex mt={3}>
            <motion.div whileHover={{rotate: 20}}>
                <Image src={Logo} height='35px'/>
            </motion.div>
            <Heading letterSpacing={'tighter'} mt={1} fontSize={21}>Simone Acuti</Heading>
            <Spacer/>
            <Link href='https://github.com/acuti03/myLinks' isExternal>
                <Button variant='ghost' leftIcon={<FontAwesomeIcon icon={faGithub} size='lg'/>}>Source</Button>
            </Link>
            <ThemeButton/>
      </Flex>
    )
}

export default Navbar