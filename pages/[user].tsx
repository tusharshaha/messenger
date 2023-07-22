import Layout from '@/components/home/Layout';
import MessageSection from '@/components/home/MessageSection';
import privateRoute from '@/utils/privateRoute';
import { useRouter } from 'next/router';
import React from 'react';

const User = () => {
  const router = useRouter();
  console.log(router.query.user)
  return (
    <Layout>
      <MessageSection></MessageSection>
    </Layout>
  );
};

export default privateRoute(User);