import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material';

const Splash = () => {
    return (
        <StyledDiv>
        <Typography variant='h2'>Splash</Typography>
        </StyledDiv>
    );
}

const StyledDiv = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Splash;