import { Avatar, Box, Flex, Text } from "@chakra-ui/react";


interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile( { showProfileData = true }: ProfileProps ) {
    return (
        
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Marcos Vini</Text>
                    <Text color="gray.300" fontSize="small">
                        viniciusmg99@outlook.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Marcos Vini" src="https://github.com/marcoscode404.png"/>


    </Flex>
    );
};