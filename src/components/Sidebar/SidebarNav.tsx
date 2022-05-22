import { Stack } from "@chakra-ui/react";
import React from "react";

import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
    return(
        <Stack spacing="12" alignItems="flex-start">
                <NavSection title="GERAL">
                    
                    <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
                    <NavLink icon={RiContactsLine}>Usuarios</NavLink>

                </NavSection>

                <NavSection title="AUTOMAÇÃO">
                               
                    <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
                    <NavLink icon={RiGitMergeLine}>Automação</NavLink>
                          
                </NavSection>

               

            </Stack>
    );
};