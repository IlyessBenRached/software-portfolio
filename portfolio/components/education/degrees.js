import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import ComputerIcon from '@mui/icons-material/Computer';
import { ProgressBar } from 'react-bootstrap'; 

import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info';
import { styled } from '@mui/material/styles';

// Import your icons
import PythonIcon from '../icons/4375050_logo_python_icon.svg';
import SeleniumIcon from '../icons/icons8-selenium-144.svg';
import FastAPIIcon from '../icons/fastapi-1.svg';
import MongoDBIcon from '../icons/1012822_code_development_logo_mongodb_programming_icon.svg';
import ReactJSIcon from '../icons/7423887_react_react native_icon.svg';
import HTMLIcon from '../icons/294678_html5_icon.svg';
import CSSIcon from '../icons/317756_badge_css_css3_achievement_award_icon.svg';
import JavaScriptIcon from '../icons/282802_javascript_js_icon.svg';
import DjangoIcon from '../icons/django.svg';
import MySQLIcon from '../icons/4691303_mysql_icon.svg';
import PostgreSQLIcon from '../icons/4691328_postgresql_icon.svg';
import BootstrapIcon from '../icons/bootstrap.svg';

const DemoPaper = styled(Paper)(({ theme, isClicked }) => ({
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

const papers = [
  {
    type: "Education",
    title: "Higher Institute of Applied and Technological Sciences of Mateur",
    subTitle: "Bachelor's degree in Networks and Telecommunications",
    date: "2018 - 2023",
    card_desc: "Explore my education background, specialty, and the subjects I've studied. Click to delve into my expertise in software engineering, networking systems, and more.",
    desc_1: "I have studied basic software engineering subjects like DS, Algorithms, Routers, networks",
    desc_2: "I also have studied basic networking systems subjects like Routers, networks, adsl, 4g ...",
    desc_3: "Apart from this, As a self-taught developer, I've explored Full Stack Web Development, data Science, Web Scraping, and NLP",
  },
  {
    title: "Skills & Services",
    type: "Skills",
    card_desc: "Discover my proficiency in various programming languages, frameworks, and tools. Click to explore my skills in web development, data science, and more.",
    services: [
      {
        name: 'Full Stack Development',
        skills: [
        { name: 'HTML', progress: 80 },
        { name: 'CSS', progress: 60 },
        { name: 'JavaScript', progress: 60 },
        { name: 'TypeScript', progress: 50 },
        { name: 'Django', progress: 80 },
        { name: 'Python', progress: 80 },
        { name: 'FastAPI', progress: 80 },
        { name: 'MongoDB', progress: 80 },
        { name: 'MySQL', progress: 70 },
        { name: 'PostgreSQL', progress: 70 },
      ],
        icons: ['../icons/294678_html5_icon.svg', '../icons/317756_badge_css_css3_achievement_award_icon.svg', '../icons/282802_javascript_js_icon.svg', '../icons/282802_javascript_js_icon.svg', '../icons/django.svg', '../icons/4375050_logo_python_icon.svg', '../icons/fastapi-1.svg', '../icons/1012822_code_development_logo_mongodb_programming_icon.svg', '../icons/4691303_mysql_icon.svg', '../icons/4691328_postgresql_icon.svg'],
      },
      {
        name: 'Web Scraping',
        skills: [
                { name: 'Python', progress: 80 },
                { name: 'Selenium', progress: 80 },
                { name: 'JavaScript', progress: 60 },
                ],
        icons: ['../icons/4375050_logo_python_icon.svg', '../icons/icons8-selenium-144.svg', '../icons/fastapi-1.svg'],
      },
      {
        name: 'Frontend Development',
        skills: [
          { name: 'HTML', progress: 80 },
          { name: 'CSS', progress: 60 },
          { name: 'JavaScript', progress: 60 },
          { name: 'TypeScript', progress: 50 },
          { name: 'ReactJS', progress: 80  },
          { name: 'Material-UI', progress: 80 },
          { name: 'Bootstrap', progress: 80 },
                ],
        icons: ['../icons/294678_html5_icon.svg', '../icons/317756_badge_css_css3_achievement_award_icon.svg', '../icons/282802_javascript_js_icon.svg', '../icons/282802_javascript_js_icon.svg', '../icons/7423887_react_react native_icon.svg', '../icons/bootstrap.svg'],
      },
      {
        name: 'Backend Development',
        skills: [
          { name: 'Django', progress: 80 },
          { name: 'Python', progress: 80 },
          { name: 'FastAPI', progress: 80 },
          { name: 'MongoDB', progress: 80 },
          { name: 'MySQL', progress: 70 },
          { name: 'PostgreSQL', progress: 70 },
                ],
        icons: ['../icons/django.svg', '../icons/4375050_logo_python_icon.svg', '../icons/fastapi-1.svg', '../icons/1012822_code_development_logo_mongodb_programming_icon.svg', '../icons/4691303_mysql_icon.svg', '../icons/4691328_postgresql_icon.svg'],
      },
      {
        name: 'Machine Learning',
        skills: [
                { name: 'Natural Language Processing (NLP)', progress: 70 },
                { name: 'Topic Modeling', progress: 70 },
               ],
        icons: ['../icons/topic_modeling.png','../icons/artificial-intelligence-ai-icon.svg'], // Use InfoIcon as a placeholder for now
      },
    ],
  },
];

const SkillService = ({ service }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const handleToggleSkills = () => {
    setIsExpanded(!isExpanded);
  };

  React.useEffect(() => {
    let timer;

    const animateProgress = (targetProgress) => {
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < targetProgress) {
            return prevProgress + 1;
          } else {
            clearInterval(timer);
            return prevProgress;
          }
        });
      }, 20);
    };

    if (isExpanded) {
      setProgress(0); // Reset progress to 0 when expanding
      service.skills.forEach((skill) => {
        animateProgress(skill.progress);
      });
    }

    return () => {
      clearInterval(timer); // Cleanup the timer on component unmount
    };
  }, [isExpanded, service.skills]);

  return (
    <div>
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontWeight: 'bold',
          fontSize: '1rem',
          fontFamily: 'Diphylleia, serif',
          margin: '2rem',
          cursor: 'pointer',
        }}
        onClick={handleToggleSkills}
      >
        {service.name}
      </Typography>
      {isExpanded && (
        <div>
          {service.skills.map((skill, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '1rem' }}>
              {service.icons[index] ? (
                <img src={service.icons[index]} alt={skill.name} style={{ width: '20px', marginRight: '5px' }} />
              ) : null}
              <Typography sx={{ fontSize: '0.9rem', marginLeft: '0.5rem', fontFamily: 'Diphylleia, serif' }}>{skill.name}</Typography>

              {/* Progress Bar */}
              <div
                className="progress"
                role="progressbar"
                aria-label={`Skill progress: ${progress}%`}
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ marginLeft: '1rem', width: '100px' }}
              >
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


const PaperContent = ({ paper }) => {
  const renderContent = () => {
    switch (paper.type) {
      case "Education":
        return (
          <>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: '1rem', fontFamily: 'Diphylleia, serif', margin: '2rem' }}>
              {paper.type}
            </Typography>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: '1rem', fontFamily: 'Diphylleia, serif', margin: '2rem' }}>
              {paper.title}
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '1rem', margin: '2rem', fontFamily: 'Diphylleia, serif' }}>
              <SchoolIcon sx={{ marginRight: '5px' }} />
              {paper.subTitle}
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '0.9rem', margin: '2rem', fontFamily: 'Diphylleia, serif' }}>
              <ComputerIcon sx={{ marginRight: '8px' }} />
              {paper.date}
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '0.9rem', margin: '3rem', fontFamily: 'Diphylleia, serif' }}>
              <InfoIcon sx={{ marginRight: '8px' }} />
              {paper.desc_1}
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '0.9rem', margin: '3rem', fontFamily: 'Diphylleia, serif' }}>
              <InfoIcon sx={{ marginRight: '8px' }} />
              {paper.desc_2}
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '0.9rem', margin: '3rem', fontFamily: 'Diphylleia, serif' }}>
              <InfoIcon sx={{ marginRight: '8px' }} />
              {paper.desc_3}
            </Typography>
          </>
        );
      case "Skills":
        return (
          <>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: '1rem', fontFamily: 'Diphylleia, serif', margin: '2rem' }}>
              {paper.type}
            </Typography>
            {paper.services.map((service, index) => (
              <SkillService key={index} service={service} />
            ))}
          </>
        );
      default:
        return null;
    }
  };

  return renderContent();
};

export default function Variants() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedPaperIndex, setSelectedPaperIndex] = React.useState(null);

  const handlePaperClick = (index) => {
    setSelectedPaperIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPaperIndex(null);
  };

  return (
    <Stack direction="row" spacing={3} sx={{ margin: "5rem", display: 'flex' }}>
      {papers.map((paper, index) => (
        <DemoPaper
              key={index}
              elevation={5}
              variant="elevation"
              onClick={() => handlePaperClick(index)}
              sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '3rem',
                fontFamily: 'Diphylleia, serif',
                fontWeight: 'bold',
                fontSize: '1rem',

                '@media (max-width: 600px)': {
                    fontSize: '0.8rem',
                },
              }}
        >
          {paper.card_desc}
        </DemoPaper>
      ))}

      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        fullWidth
        maxWidth="md"
        sx={{
          '& .MuiDialog-paper': {
            width: '80%',
            height: '500px',
          },
        }}
      >
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleCloseModal}
          sx={{ position: 'absolute', top: 0, right: 0, margin: '1rem' }}
        >
          <CloseIcon />
        </IconButton>
        {selectedPaperIndex !== null && (
          <div>
            <PaperContent paper={papers[selectedPaperIndex]} />
          </div>
        )}
      </Dialog>
    </Stack>
  );
}
