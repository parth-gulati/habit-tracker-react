import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs({tab, setTab}) {

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ width: '100%', marginTop: '20px', marginBottom: 0}}>
      <Tabs indicatorColor='secondary' textColor='secondary' value={tab} onChange={handleChange} centered>
        <Tab label="Day" value="Day" />
        <Tab label="Month" value="Month" />
        <Tab label="Year" value="Year" />
      </Tabs>
    </Box>
  );
}