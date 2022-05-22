import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

import { Logo } from "./logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";


export function Header() {
    const { onOpen } = useSidebarDrawer();
    
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

            {/* craindo menu responsivo quando estiver no mobile */}
            { !isWideVersion && (
                <IconButton
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                >

                </IconButton>
            )}



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
