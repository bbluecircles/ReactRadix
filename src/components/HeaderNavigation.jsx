import React from 'react';
import {
    Grid,
    Box,
    Button,
    Heading,
    TextField,
    Flex,
    Card,
    Link,
    Label,
    TextInput,
    Container,
    Checkbox,
    Text
} from '@radix-ui/themes';
import Logo from '../../public/assets/images/Intellimed Logo_9.2019_small.png';
const HeaderNavigation = () => {
    return (
        <Box width="100%" px="4" py="4" style={{background: 'white'}}>
            <Flex direction="row" justify="between" align="center">
                <img src={Logo} alt="Logo" style={{width: '100px'}} />
                <Link>Login</Link>
            </Flex>
        </Box>
    )
}

export default HeaderNavigation;