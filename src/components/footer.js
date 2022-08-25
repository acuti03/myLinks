import React from "react";
import {
    Box,
    Text,
    Divider,
    useColorModeValue
} from '@chakra-ui/react'

const Footer = () => {
    const fc = useColorModeValue('blackAlpha.500', 'whiteAlpha.500');

    return(
    <Box align='center'>
        <Divider/>
        <Text fontSize={14} color={fc} mt={10}>Made by Simone Acuti with &hearts; </Text>
    </Box>
    )
}

export default Footer