import styled from '@emotion/styled'
import { Container, Typography, Box, Button} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <StyledContainer>
            <Typography variant='h4'>Dashboard</Typography>
            <StyledContainer2>
                <StyledButton variant='outlined' color='secondary' onClick={()=>{navigate('/new-habit')}}>Add New Habit</StyledButton>
                <StyledButton variant='outlined' color='secondary' onClick={()=>{navigate('/view-metrics')}}>View Metrics</StyledButton>
            </StyledContainer2>
        </StyledContainer>
    );
}

const StyledContainer = styled(Container)`
    display: flex;
    min-height: 60vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledButton = styled(Button)`
    margin: 10px;
`

const StyledContainer2 = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`

export default Dashboard;