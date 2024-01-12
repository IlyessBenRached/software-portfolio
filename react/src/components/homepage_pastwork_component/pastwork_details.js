import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: '100%', height: 500, flexDirection: { xs: 'column', md: 'row' } }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div"></ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{ textAlign: 'center' }}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
                href={item.link}
                target="_blank"
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}


const itemData = [
  {
    img: '/images/Orange Outline Social Media Marketing Instagram Post.png',
    title: 'Reputation Tracker',
    author: '@Ilyes Ben Rached',
    rows: 2,
    cols: 2,
    featured: true,
    link: 'blog/reputation-tracker',
  },
  {
    img: '/images/trends.jpg',
    title: 'Tech Trends',
    author: '@Ilyes Ben Rached',
    link: 'blog/techtrends',
  },
  
  
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@Ilyes Ben Rached',
    rows: 2,
    cols: 2,
    featured: true,
    link: 'blog/reputation-tracker',
  },
  
  
  {
    img: '/images/Recomendation.png',
    title: 'recomendation-system',
    author: '@Ilyes Ben Rached',
    rows: 2,
    cols: 2,
    link: 'blog/recomendation-system',
  },
  
  
  
];