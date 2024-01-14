import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import styles from '../components/footer.module.css';

const ContactStack = () => {
  return (
    <Stack className={styles.contact_stack} direction={{ xs: 'column', sm: 'row' }} spacing={2} >
      {/* Contact Information */}
      <Stack className={styles.contact_info} alignItems={{ xs: 'center', sm: 'flex-start' }} spacing={2} >
        <Typography>Email: ilyesbenrached013@gmail.com</Typography>
        <Typography>Phone: +216 29 832 810</Typography>
      </Stack>

      {/* Links of the Website */}
      <Stack className={styles.website_links} alignItems={{ xs: 'center', sm: 'center' }} spacing={4}>
        <Typography>Home</Typography>
        <Typography>Education</Typography>
        <Typography>Experience</Typography>
        <Typography>Projects</Typography>
        <Typography>Contact me</Typography>
        <Typography>About Me</Typography>
      </Stack>

      {/* Social Icons */}
      <Stack className={styles.social_icons} alignItems={{ xs: 'center', sm: 'flex-end' }} spacing={4}>
        <div className={styles.social_icon}>
          <a href="https://www.facebook.com/ilyes.b.rached/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/facebook-3-2.svg" alt="Facebook" />
          </a>
        </div>
        <div className={styles.social_icon}>
          <a href="https://www.instagram.com/ilyesbenrached/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram-2016-5.svg" alt="Instagram" />
          </a>
        </div>
        <div className={styles.social_icon}>
          <a href="https://www.linkedin.com/in/ilyes-ben-rached-88a7851a7/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin-icon-2.svg" alt="LinkedIn" />
          </a>
        </div>
      </Stack>
    </Stack>
  );
};

export default ContactStack;
