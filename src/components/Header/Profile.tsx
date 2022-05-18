import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        
        <Flex align="center">
        <Box mr="4" textAlign="right">
            <Text>Marcos Vini</Text>
            <Text 
                color="gray.300"
                fontSize="small"
            >
                viniciusmg99@outlook.com</Text>
        </Box>

        <Avatar
            size="md"
            name="Marcos Vini"
            src="https://github.com/marcoscode404.png" 
        />


    </Flex>
    );
};