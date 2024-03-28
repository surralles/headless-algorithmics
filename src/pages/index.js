import * as React from 'react';

import SliderTop from '../components/SliderTop/SliderTop';

import Layout from '../components/Layout/Layout';

import { ThemeProvider } from '@mui/material/styles';

import { theme } from '../components/Material/MaterialTheme';
import IndexGsap from './GsapScript';
import App from '../components/ScrollStarter/App';

const IndexPage = ({ data }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <SliderTop />
          <IndexGsap />
          <App />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
