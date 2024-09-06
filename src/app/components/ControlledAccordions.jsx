'use client';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1e88e5', // Bluish tint
      },
      background: {
        default: '#000', // Black background
        paper: '#111', // Darker background for paper components
      },
      text: {
        primary: '#fff', // White text
        secondary: '#90caf9', // Lighter text for secondary elements
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Some Info About Me
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>My dream</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              My dream is to become an Full-Stack Developer and visit Japan someday in the future.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* Repeat Accordion components for other panels */}
      </div>
    </ThemeProvider>
  );
}
