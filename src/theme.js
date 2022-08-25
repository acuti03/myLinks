import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#f0e7db', '#202023')(props)
        }
    })
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
}

const components = {
    Heading:{
        variants:{
            'title':{
                letterSpacing: 1,
            }
        }
    },
    Button:{
        variants:{
            'main-button':{
                height:'50px' ,
                width:'200px',
            }
        }
    }
}

const theme = extendTheme({styles, fonts, components})
export default theme