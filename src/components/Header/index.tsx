import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { Logo } from "./logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";


export function Header() {
    
// breakpoints para dispositivos de tamanhos de talas diferentes
// hoock do chakra UI
    const isWideVersion = useBreakpointValue({
        base:false,
        lg: true,
    })

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
            
            { isWideVersion && <SearchBox /> }

            <Flex align="center" ml="auto">
                
                {/* Component de notifações  */}
                <NotificationsNav />

                {/* Components de perfil */}
                <Profile showProfileData={isWideVersion} />    
            
            </Flex>
        
        </Flex>
    )
}
