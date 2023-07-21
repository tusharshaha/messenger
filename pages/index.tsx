import Layout from '@/components/home/Layout';
import MessageSection from '@/components/home/MessageSection';
import privateRoute from '@/utils/privateRoute';
import React from 'react';

const Home: React.FC = () => {
  return (
    <Layout>
      <MessageSection></MessageSection>
    </Layout>
  );
};

export default privateRoute(Home);
