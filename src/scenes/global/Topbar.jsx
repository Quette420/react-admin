import {Box, IconButton, useTheme} from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from '../../theme';
import InputBase from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/LightModeOutlined';


const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return ( <Box display="flex" justifyContent="space-between" p={2}>
        {/* search bar */}
        <Box 
            display="flex" 
            backgroundColor={colors.primary[400]} 
            borderRadius='3px'>
            <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search" />
            <IconButton type="button" sx= {{p: 1}}>
                <SearchIcon />
            </IconButton>
        </Box>
        <IconButton></IconButton>
    </Box>)
}

export default Topbar;