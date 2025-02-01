import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { Box, Container, Typography } from '@mui/material';

const Dashboard = () => {
    return (
        <StyledDiv>
        <Typography variant='h2'>Dashboard</Typography>
        </StyledDiv>
    );
}

const StyledDiv = styled(Container)`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
`

export default Dashboard;