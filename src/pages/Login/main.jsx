import React, { useState } from "react";
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
import HeaderNavigation from "../../components/HeaderNavigation";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <main id="login-page">
            <HeaderNavigation />
            <Box px="9" pt="9">
                <Card style={{ minWidth: 350, maxWidth: 500 }} width="4" size="1">
                    <Flex direction="column" gap="4">
                        <Box>
                            <Heading as="h3" size="4" style={{textTransform: 'uppercase', color: 'rgb(39,110,175)' }}>Intellimarket Explorer Login</Heading>
                        </Box>
                        <Box>
                            <Flex direction="column" gap="4">
                                <TextField.Input size="2" placeholder="Username" />
                                <TextField.Input size="2" placeholder="Password" />
                            </Flex>
                        </Box>
                        <Flex direction="column" gap="2" width="50%">
                            <Flex direction="row" gap="2" align="center">
                                <Checkbox size="1" defaultChecked />
                                <Text as="span">Remember me?</Text>
                            </Flex>
                            <Button size="2" variant="solid">Login</Button>
                            <Link weight="regular">Forgot Password?</Link>
                        </Flex>
                    </Flex>
                </Card>
            </Box>
        </main>

    )
}

export default Login;