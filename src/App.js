import React from 'react';
import '@fontsource/open-sans/800.css'
import {
  Box,
  Link,
  Avatar,
  Text,
  Divider,
  Stack,
  Flex,
  Spacer,
  Button,
  Heading,
  Highlight,
  useColorModeValue,
  Container
} from '@chakra-ui/react';
import {LinkIcon} from '@chakra-ui/icons';
import me from './image/me.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faStrava, faTelegram } from '@fortawesome/free-brands-svg-icons';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { motion } from 'framer-motion'


function App() {
  const bc = useColorModeValue('whiteAlpha.900','whiteAlpha.200')
  const hc = useColorModeValue('purple.500','orange.200')
  const thc = useColorModeValue('#f0e7db','#202023')

  return (
    <Container align='center'>
      <Navbar/> 
      <Box mt={5}>
        <Avatar src={me} alt='Simone Acuti'size='2xl' border='2px #fff solid' mt='1em'/>
        <Divider width='250px' mt='1.5em'/>
        <Heading fontSize='30px' mt='1em' variant='title'>
          <Highlight query='Links:' styles={{ px: '3', py: '1', rounded: 'full', bg:hc, color:thc}}>
            My Links:
          </Highlight>
        </Heading>
        <Stack spacing={4} direction='column'  mt='4em' mb='80px'>
          <Link href='https://simosite.web.app/' isExternal>
          <Button size='lg' bg={bc} variant='main-button' leftIcon={<LinkIcon size='lg'/>}>
            Website
          </Button>
          </Link>
          <Link href='https://github.com/acuti03' isExternal>
          <Button size='lg' bg={bc} variant='main-button' leftIcon={<FontAwesomeIcon icon={faGithub} size='lg'/>}>
            Github
          </Button>
          </Link>
          <Link href='https://www.strava.com/athletes/13589822' isExternal>
          <Button size='lg' bg={bc} variant='main-button' leftIcon={<FontAwesomeIcon icon={faStrava} size='lg'/>}>
            Strava
          </Button>
          </Link>
          <Link href='https://t.me/simoacu' isExternal>
          <Button size='lg' bg={bc} variant='main-button' leftIcon={<FontAwesomeIcon icon={faTelegram} size='lg'/>}>
            Telegram
          </Button>
          </Link>
        </Stack>
      </Box>
      <Footer/>
    </Container>
  );
}

export default App;
