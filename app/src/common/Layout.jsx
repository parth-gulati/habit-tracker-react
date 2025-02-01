import { Container } from "@mui/material";
import Header from "./Header";
import {  ThemeProvider } from '@mui/material/styles'
import { lightTheme, darkTheme } from "./Theme";
import styled from '@emotion/styled'
import { Outlet } from "react-router";
import CssBaseline from '@mui/material/CssBaseline';

const Layout = ({token, removeToken}) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
        <Header token={token} removeToken={removeToken} />
        <StyledContainer maxWidth="l">
        <Outlet/>
        </StyledContainer>
        </ThemeProvider>
    );
}

const StyledContainer = styled(Container)`

`

export default Layout;