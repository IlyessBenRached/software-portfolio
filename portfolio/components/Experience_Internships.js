import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';
import InfoIcon from '@mui/icons-material/Info';

const Item = styled(Paper)(({ theme }) => ({
  width: 300,
  height: 300,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const data = [
  {
    type: 'Experience',
    title: 'Software Engineer at Branper',
    card_desc: 'discover in details my journey as a Software Engineer at Branper',
    description: 'Working on various projects such as developing a web applications.',
    projects: [
      {
        name: 'Reputation Tracker',
        desc: "Developed an application to track the reputation of company's in social media platforms.",
        technologies: ['Django', 'FastAPI', 'Selenium', 'MongoDB', 'NLP'],
        link: 'COMMING SOON',
        tasks: [
          'Spearheaded a project to track and analyze the company’s online reputation.',
          'Conducted advanced Facebook data scraping to obtain pertinent reputation metrics',
          'Analyzed data to identify key references and sentiment regarding the company',
          'Applied NLP for name detection and sentiment analysis using machine learning',
          'Utilized Selenium for web scraping and MongoDB for data storage',
          'Programmed the entire analytical workflow in Python',
        ],
      },
    ],
  },
  {
    type: 'Experience',
    title: 'Software Engineer at Branper',
    card_desc: 'discover in details my journey as a Software Engineer at Branper',
    description: 'Working on various projects such as developing a web applications.',
    projects: [
      {
        name: 'Tech Trends',
        desc: 'built a project that detects emerging trends in technology field from various sources from the web',
        technologies: ['Django', 'FastAPI', 'Selenium', 'MongoDB', 'Machine Learning', 'NLP', 'Topic Modeling(LDA)'],
        link: 'COMMING SOON',
        tasks: [
          'Launched and oversaw ‘Tech Trends’ project, tracking technology advancements based on user queries .',
          'Crafted a system to capture user interests for focused article scraping.',
          'Performed advanced web scraping to compile a relevant article dataset.',
          'Conducted data cleanup to ensure content accuracy and relevance.',
          'Utilized criteria and algorithms to filter for article pertinence.',
          'Applied LDA for topic modeling to extract and categorize main themes.',
        ],
      },
    ],
  },
  {
    type: 'Internship',
    card_desc: 'discover in details my journey as an intern at branper',
    title: 'End Of Studies intern at Branper',
    description: 'Gained hands-on experience working with agile methodology, collaborating with professionals building innovative machine learning projects ',
    projects: [
      {
        name: 'Recomendation System',
        desc: 'Built a recommendation system based on collaborative filtering with K-nearest neighbors',
        technologies: ['Django', 'Machine learning', 'Python', 'Cosine Similarity', 'Descion Tree', 'MongoDB', 'FastAPI', 'ReactJS', 'Selenium'],
        link: 'COMMING SOON',
        tasks: [
          'Built a Recommendation System for product selection.',
          'Utilized Selenium for web scraping of product data from AliExpress.',
          'Developed a machine learning model using the Decision Tree algorithm.',
          'Trained the model with a dataset of products scraped from AliExpress.',
          'Implemented a web application using Django for the backend and ReactJS for the frontend.',
        ],
      },
    ],
  },
];

const ExperienceDetail = ({ experience, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose} sx={{
      '& .MuiDialog-paper': {
        width: '80%',
        height: '500px',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'opacity 0.5s ease-in-out',
      },
    }}>
      <IconButton edge="end" color="inherit" onClick={onClose} sx={{ position: 'absolute', top: 0, right: 0, margin: '1rem' }}>
        <CloseIcon />
      </IconButton>

      <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'Diphylleia, serif', margin: '2rem' }}>
        {experience.title}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1.2rem', margin: '0 2rem 2rem 2rem', fontFamily: 'Diphylleia, serif' }}>
        {experience.description}
      </Typography>

      {/* Render projects */}
      {experience.projects.map((project, index) => (
        <div key={index}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'Diphylleia, serif', margin: '2rem' }}>
            {project.name}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', marginLeft: '2rem', fontFamily: 'Diphylleia, serif' }}>
            {project.desc}
          </Typography>

          {/* Technologies */}
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1.3rem', fontFamily: 'Diphylleia, serif', margin: '2rem' }}>
            Technologies:
          </Typography>
          <div sx={{ display: 'flex', flexDirection: 'column', marginLeft: '2rem' }}>
            {project.technologies.map((tech, techIndex) => (
              <Typography key={techIndex} sx={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', fontFamily: 'Diphylleia, serif', marginBottom: '0.5rem' }}>
                <InfoIcon sx={{ margin: '1.5rem' }} />
                {tech}
              </Typography>
            ))}
          </div>

          {/* Link */}
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1.3rem', fontFamily: 'Diphylleia, serif', margin: '2rem' }}>
            Link:
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', marginLeft: '2rem', fontFamily: 'Diphylleia, serif' }}>
            {project.link}
          </Typography>

          {/* Tasks */}
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1.3rem', fontFamily: 'Diphylleia, serif', margin: '2rem' }}>
            Tasks:
          </Typography>
          <div sx={{ display: 'flex', flexDirection: 'column', marginLeft: '2rem' }}>
            {project.tasks.map((task, taskIndex) => (
              <Typography key={taskIndex} sx={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', fontFamily: 'Diphylleia, serif', margin: '1rem' }}>
                <InfoIcon sx={{ margin: '1.5rem' }} />
                {task}
              </Typography>
            ))}
          </div>
        </div>
      ))}
    </Dialog>
  );
};

export default function ResponsiveStack() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  
  const handleItemClick = (experience) => {
    setSelectedExperience(experience);
  };

  const handleCloseDetail = () => {
    setSelectedExperience(null);
  };

  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 6 }} padding='3rem' justifyContent='space-evenly'>
      {data.map((item, index) => (
        
        <Item
          key={index}
          sx={{
            fontWeight: 'bold',
            fontSize: '1rem',
            fontFamily: 'Diphylleia, serif',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            
          }}
          onClick={() => handleItemClick(item)}
        >
          {item.card_desc}
        </Item>
      ))}

      {selectedExperience && <ExperienceDetail experience={selectedExperience} onClose={handleCloseDetail} />}
    </Stack>
  );
}