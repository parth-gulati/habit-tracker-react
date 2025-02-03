import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { Container, Typography, Box } from '@mui/material';
import { ResponsiveCalendar } from '@nivo/calendar'
import CalendarGraph from '../common/CalendarGraph';
import facepaint from 'facepaint';
import { breakpoints } from '../helpers/breakpoints';
import CenteredTabs from '../common/Tabs';
import { useState } from 'react';
import MyResponsiveTimeRange from '../common/TimeRange';

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const Dashboard = () => {
    const [tab, setTab] = useState("Day");
    return (
        <StyledContainer>
            <Typography variant='h4'>Dashboard</Typography>
            <CenteredTabs tab={tab} setTab={setTab} style={{ paddingTop: 10 }} />
            <StyledDiv>
                {
                    tab=='Year' &&
                    <CalendarGraph />
                }
                {
                    tab=='Month' &&
                    <MyResponsiveTimeRange/>
                }
            </StyledDiv>
        </StyledContainer>
    );
}

const StyledDiv = styled(Box)`
    ${mq({
    height: [300, 300, 300, 300],
    minWidth: ['100%', '100%', '80%', '60%']
})};
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledContainer = styled(Container)`
    display: flex;
    min-height: 60vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default Dashboard;