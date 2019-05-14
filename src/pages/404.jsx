import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';

const Section = styled.section``;

const Container = styled.div``;

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Section>
      <Container>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </Section>
  </>
);

export default NotFoundPage;
