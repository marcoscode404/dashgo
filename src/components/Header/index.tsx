import { Flex } from "@chakra-ui/react";

import { Logo } from "./logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";


export function Header() {
    return (
        <Flex 
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            {/* Component da logo */}
            <Logo />

            {/* Component de Busca */}
            <SearchBox />

            <Flex align="center" ml="auto">
                
                {/* Component de notifações  */}
                <NotificationsNav />

                {/* Components de perfil */}
                <Profile />    
            
            </Flex>
        
        </Flex>
    )
}
