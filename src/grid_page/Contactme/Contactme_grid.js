import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '../../components/Contactme/button';

const FormContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: 'none',
  boxShadow: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2), // Adds spacing between form elements
}));

const App = () => {
  const [subject, setSubject] = useState('');
  const [projectType, setProjectType] = useState('');
  const [file, setFile] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
    setProjectType('');
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleButtonClick = () => {
    // Handle button click logic

    // Assuming your form submission logic is successful
    // For demonstration purposes, let's simulate a successful submission
    // Replace the following line with your actual submission logic
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            height: '70vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '80px',
          }}
        >
          <Stack direction="row" spacing={2}>
            <FormContainer>
              {formSubmitted ? (
                <Typography variant="h6" component="div" color="primary">
                  Thank you for reaching out! I will get back to you as soon as possible.
                </Typography>
              ) : (
                <>
                  <Typography variant="h4" component="div">
                    Pitch Your Project
                  </Typography>
                  <div style={{ width: '100%' }}>
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                      Name
                    </label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John Doe" style={{ width: '100%' }} />
                  </div>
                  <div style={{ width: '100%' }}>
                    <label htmlFor="exampleFormControlInput2" className="form-label">
                      Email
                    </label>
                    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="john@gmail.com" style={{ width: '100%' }} />
                  </div>
                  <div style={{ width: '100%' }}>
                    <label htmlFor="exampleFormControlSelect1" className="form-label">
                      Subject
                    </label>
                    <select
                      className="form-select"
                      id="exampleFormControlSelect1"
                      value={subject}
                      onChange={handleSubjectChange}
                      style={{ width: '100%' }}
                    >
                      <option>Select an option...</option>
                      <option value="generalInquiry">General Inquiry</option>
                      <option value="projectProposal">Project Proposal</option>
                      <option value="collaborationOpportunity">Collaboration Opportunity</option>
                    </select>
                  </div>

                  {subject === 'projectProposal' && (
                    <div style={{ width: '100%' }}>
                      <label htmlFor="exampleFormControlSelect2" className="form-label">
                        Project Type
                      </label>
                      <select
                        className="form-select"
                        id="exampleFormControlSelect2"
                        value={projectType}
                        onChange={(event) => setProjectType(event.target.value)}
                        style={{ width: '100%' }}
                      >
                        <option>Select a project type...</option>
                        <option value="website">Full Stack Web development</option>
                        <option value="data-scraping">Data Scraping</option>
                        <option value="machine-learning-nlp">Machine learning / NLP</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  )}

                  <div style={{ width: '100%' }}>
                    <label htmlFor="exampleFormControlFile1" className="form-label">
                      Attach File
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="exampleFormControlFile1"
                      onChange={handleFileChange}
                      style={{ width: '100%' }}
                    />
                  </div>
                  <Button onClick={handleButtonClick} style={{ width: '100%' }}>
                    Submit
                  </Button>
                </>
              )}
            </FormContainer>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
