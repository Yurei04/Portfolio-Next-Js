'use client';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage() {
  const darkTheme = React.useMemo(() => createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1e88e5', // Bluish tint for primary elements
      },
      background: {
        default: '#121212', // Dark background
        paper: '#1d1d1d', // Slightly lighter dark background for paper components
      },
      text: {
        primary: '#ffffff', // White text for better contrast
        secondary: '#b0bec5', // Lighter text for secondary elements
      },
    },
  }), []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Full Name
          </AccordionSummary>
          <AccordionDetails>
            James Yuri R. Avila
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Basic Info
          </AccordionSummary>
          <AccordionDetails>
          <ul>
            <li>Age: 19</li>
            <li>From: Bauang, La Union</li>
            <li>Currently Residing in Poliwes, Baguio City</li>
          </ul>

          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Why UC and IT?
          </AccordionSummary>
          <AccordionDetails>
                I chose university of Cordilleras since the university was awarded by the comission of hihger education 
                for excellence in information technology.
                As well as the recommendation of my brother to pursue Bachelors in science in information technology 
                with the regards of the accomplishments of the univeristy.
          </AccordionDetails>
        </Accordion>
      </div>
    </ThemeProvider>
  );
}
