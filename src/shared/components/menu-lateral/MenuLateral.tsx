import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import { Box } from "@mui/system";
import { useDrawerContext } from "../../contexts";

interface IMenuLateralProps {
    children: React.ReactNode
}


export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {

    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(28)} display="flex" alignItems="center" justifyContent="Center">
                    <Avatar 
                        sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                        src="https://yt3.ggpht.com/ytc/AMLnZu_58F58S-f9UP3va54C1hdpEPuVXLfZ2s-awFvoUQ=s88-c-k-c0x00ffffff-no-rj-mo"
                    />
                    </Box>

                    <Divider/>

                        <Box flex={1}>
                            <List component="nav">
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Icon>home</Icon>
                                    </ListItemIcon>
                                    <ListItemText primary="Pagina Inicial" />
                                </ListItemButton>
                            </List>

                        </Box>

                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};