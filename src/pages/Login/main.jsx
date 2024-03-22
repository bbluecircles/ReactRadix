import React, { useState } from "react";
import {
    Grid,
    Box,
    Button,
    Heading,
    TextField,
    Flex,
    Card,
    Label,
    TextInput
} from '@radix-ui/themes';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <Card style={{ maxWidth: 350 }}>
                <Box>
                    <Heading as="h3">Intellimarket Explorer Login</Heading>
                </Box>
                <Box>
                    <Flex direction="column" gap="3">
                        <TextField.Input size="2" placeholder="Username" />
                        <TextField.Input size="2" placeholder="Password" />
                    </Flex>
                </Box>
                <Box></Box>
            </Card>
        </>
    )
}

export default Login;