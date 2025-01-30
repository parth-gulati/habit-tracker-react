import { Typography, Container, Paper, Box, TextField, Button } from "@mui/material";
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import facepaint from 'facepaint'
import { Link } from "react-router";
const breakpoints = [480, 768, 1024, 1440];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));
import Typewriter from 'typewriter-effect'
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
    return (
        <StyledContainer maxWidth="sm">
            <StyledPaper elevation={3}>
                <AnimatedDiv>
                    <StyledHeader style={{ color: 'primary' }} variant="h5">Sign Up</StyledHeader>
                </AnimatedDiv>
                <Box style={{ flex: 0.5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <StyledDescription variant="body2">Sign up to start logging&nbsp;</StyledDescription>

                        <StyledTypeWriter
                            options={{
                                cursor: '&#128173;',
                                strings: ['success. ', 'wins. ', 'goals. ', 'life. '],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 100,
                                delay: 150,
                            }}
                        />
                    </Box>
                </Box>
                <Box style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>

                    <SignUpForm/>
                    <Box style={{ width: '100%' }}>
                        <Typography style={{ textAlign: 'left', fontSize: '0.8rem' }} color="secondary" variant="body2" component={Link} to="/signin">Already a user? click here</Typography>
                    </Box>
                </Box>
            </StyledPaper>
        </StyledContainer>
    );


};

const InputBox = styled(Box)`
    padding: 5px;  
    width: 85%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

`

const StyledDescription = styled(Typography)`
    font-size: 1rem;
`

const StyledPaper = styled(Paper)`
    padding: 1rem;
    margin: 1rem;
    ${mq({
    minHeight: ['450x', '425px', '400px', '450px'], // Varying heights for breakpoints
    margin: ['0.5rem', '1rem', '1.5rem', '2rem'],
    minWidth: ['90vw', '330px', '400px', '500px']
})};
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledHeader = styled(Typography)`
    text-align: center;
    padding-top: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
font-family: "Quicksand", serif;
      font-weight: 400;
  font-style: normal;
`

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
`


const bounce = keyframes`
  from, 0% to {
    transform: translate3d(0, -20px, 0);
  }

  50% {
    transform: translate3d(0, 20px, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const AnimatedDiv = styled.div`
  animation: ${bounce} 2s ease-in-out infinite;
  display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  min-height: 90px;
  flex: 1;
  aspect-ratio: 1.8;
    --g: radial-gradient(50% 50%, #000 98%, #0000) no-repeat;
    mask: var(--g) 100% 100%/30% 60%,var(--g) 70% 0/50% 100%,var(--g) 0 100%/36% 68%,var(--g) 27% 18%/26% 40%,linear-gradient(#000 0 0) bottom/67% 58% no-repeat;
    background:rgb(211, 211, 211, 0.2);
`;

const StyledTypeWriter = styled(Typewriter)`
    font-size: 1rem;
`

export default SignUp;
