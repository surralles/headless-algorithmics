import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import CloseButton from '../../images/close_btn.svg';
import { Overlay } from './OverlayMenu.styles';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import { FirstColumn } from '../Footer/Footer.styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../Material/MaterialTheme';

import { css } from '@emotion/react';
const samplePageLinks = [
  {
    text: 'Shop Webadalona',
    url: '/products',
    badge: false,
    description: 'Demo tienda online de web con arquitectura componible',
  },
];

const OverlayMenu = ({ menuOpen, callback }) => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: '#de3e66',
    textTransform: 'lowercase',

    '&:hover': {},
  }));

  const data = useStaticQuery(graphql`
    query {
      wpMenu(name: { eq: "mainMenu" }) {
        menuItems {
          nodes {
            label
            parentId
            url
            id
            childItems {
              nodes {
                label
                title
                id
                url
              }
            }
          }
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <Overlay menuOpen={menuOpen}>
        <div className='inner-wrap'>
          <div className='inner'>
            <Link to='/'>
              <StaticImage
                src='../../images/logowb.png'
                loading='eager'
                width={80}
                formats={['auto', 'webp', 'avif', 'svg']}
                alt='Logo Webadalona'
                style={{ marginBottom: `var(--space-6)` }}
              />
            </Link>
            <ul className='overlayMenu'>
              <li className='contacto'>SERVICIOS</li>
              {data.wpMenu.menuItems.nodes.map((item) =>
                !item.parentId ? (
                  <li key={item.id}>
                    <Link to={item.url} activeClassName='overlayActive'>
                      {item.label}
                    </Link>
                  </li>
                ) : null
              )}

              <li>
                {' '}
                {samplePageLinks.map((link, i) => (
                  <React.Fragment key={link.url}>
                    <Link to={link.url}>{link.text}</Link>
                    {i !== samplePageLinks.length - 1 && (
                      <>
                        {' '}
                        <br />{' '}
                      </>
                    )}
                  </React.Fragment>
                ))}
              </li>
              <li>
                <Link
                  to='https://webadalona.es/blog/seo'
                  activeClassName='overlayActive'
                >
                  SEO/SEM
                </Link>
              </li>
              <li className='contacto'>
                Contacto
                <a href='mailto:terrassa@alg.academy'> terrassa@alg.academy</a>
              </li>
            </ul>
            <div
              className='closeButton'
              onClick={callback}
              onKeyDown={callback}
              role='button'
              tabIndex='0'
            >
              <img src={CloseButton} alt='close-button' />
            </div>
          </div>

          <div className='inner-contact'>
            <FirstColumn>
              <h1
                syles={css`
      font-size:2em !important;
      margin-bottom="30px"
      `}
              >
                Hablamos,
                <br />
                Cuéntame sobre tu proyecto o tus dudas
                <br />y configuramos un plan viable.
              </h1>

              <p>
                <a href='mailto:terrassa@alg.academy'>
                  <ColorButton
                    variant='outlined'
                    startIcon={<MailIcon />}
                    size='small'
                  >
                    terrassa@alg.academy
                  </ColorButton>
                </a>
              </p>
              <a href='https://www.instagram.com/algorithmics_terrassa/'>
                <InstagramIcon color='primary' sx={{ marginRight: '20px' }} />
              </a>
              <a href='https://twitter.com/JordiSurralles'>
                <TwitterIcon color='primary' sx={{ marginRight: '20px' }} />
              </a>
              <a href='https://www.linkedin.com/in/jsurralles/'>
                <LinkedInIcon color='primary' />
              </a>
            </FirstColumn>
          </div>
        </div>
      </Overlay>
    </ThemeProvider>
  );
};

export default OverlayMenu;
