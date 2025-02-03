import { Container } from "@mui/material";
import Header from "./Header";
import { ThemeProvider } from '@mui/material/styles'
import { lightTheme, darkTheme } from "./Theme";
import styled from '@emotion/styled'
import { Outlet } from "react-router";
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect } from "react";
import { getuser } from "../api/authenticationApi";
import { useUser } from "../context/UserContext";

const Layout = ({ token, removeToken }) => {

    const { loginUser } = useUser();
    useEffect(() => {
        const getUser = async () => {
            if (token) {
                const user = await getuser(token);
                console.log(user)
                loginUser(user.data.data.user);
            }
        }

        getUser();
    }, [token])

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Header token={token} removeToken={removeToken} />
            <StyledContainer>
                <Outlet />
            </StyledContainer>
        </ThemeProvider>
    );
}

const StyledContainer = styled(Container)`
    margin-top: 20px;
`

export default Layout;