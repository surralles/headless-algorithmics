import React from 'react';
import {
  FooterWrapper,
  Wrapper,
  LinksFooter,
  FirstColumn,
  StyledImg,
  Adress,
} from './Footer.styles';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import { Link } from 'gatsby';
import { whiteButton } from '../Material/MaterialTheme';
import { ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { getImage } from 'gatsby-plugin-image';
import { useMapQuery } from '../../hooks/useMapQuery';

const Footer = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    textTransform: 'lowercase',
    '&:hover': {},
  }));

  const samplePageLinks = [
    {
      text: 'Diferencias Ecommerce',
      url: '/diferencias-ecommerce',
      badge: false,
      description: 'Diferencias de tecnología Ecommerce',
    },
    {
      text: 'Sobre Shopify',
      url: '/sobre-shopify',
      badge: false,
      description: 'Ventajas y desventajas de Shopify',
    },
    {
      text: 'Desarrollo Headless',
      url: '/desarrollo-headless',
      badge: false,
      description: 'Ecommerce con desarrollo componible sin cabeza',
    },
    {
      text: 'Universo Jamstack',
      url: '/universo-jamstack-comercio-online',
      badge: false,
      description: 'Qué es Jamastack o arquitectura componible web',
    },
    {
      text: 'Emprender con WooCommerce',
      url: '/caratcteristicas-clave-woocommerce-emprendedores',
      badge: false,
      description: 'Woocommerce para emprendedores',
    },
    {
      text: 'Diseño customizado',
      url: '/diseno-web',
      badge: false,
      description: 'Personalización del diseño web y el branding de la marca',
    },
  ];

  const data = useMapQuery();
  console.log(data);

  const imageData = getImage(data.staticMap.childFile);

  return (
    <>
      <ThemeProvider theme={whiteButton}>
        <Wrapper>
          <FooterWrapper>
            <FirstColumn>
              <h1>Hablamos,</h1>

              <p>
                Cuéntame sobre tu proyecto o tus dudas
                <br />y configuramos un plan viable.
              </p>
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

            <LinksFooter>
              <h3>Información</h3>

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
            </LinksFooter>
            <Adress>
              <h3>Donde</h3>
              <p>
                ALGORITHMICS TERRASSA
                <br />
                Sant Gaietà, 97
                <br />
                08221 Terrassa
                <br />
                Barcelona
              </p>
            </Adress>
            <div>
              <a href='https://maps.app.goo.gl/paiCkhBq1i269KpZ8'>
                <StyledImg
                  image={imageData}
                  alt='Localizacion en Terrassa de Algorithmics Terrassa'
                />
              </a>
            </div>
          </FooterWrapper>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default Footer;
