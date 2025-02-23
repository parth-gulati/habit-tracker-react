import { ResponsiveCalendar } from '@nivo/calendar'
import CalendarGraph from '../components/CalendarGraph';
import facepaint from 'facepaint';
import { breakpoints } from '../helpers/breakpoints';
import CenteredTabs from '../common/Tabs';
import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { Box } from '@mui/system';
import { useState } from 'react';
import MyResponsiveTimeRange from '../components/TimeRange';
import WeekGraph from '../components/WeekGraph';

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const ViewMetrics = () => {
    const [tab, setTab] = useState("Day");
    
    return (
        <>
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
                {
                    tab=='Day' &&
                    <WeekGraph/>
                }
            </StyledDiv>
            </>
    )
}

export default ViewMetrics


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

