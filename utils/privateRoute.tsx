import { useRouter } from 'next/router';
import { useEffect } from 'react';

const privateRoute = <P extends object>(Component: React.ComponentType<P>) => {
  const AuthComponent: React.FC<P> = (props) => {
    const router = useRouter();
    const isAuthenticated = true;

    useEffect(() => {
      if (!isAuthenticated) {
        router.replace('/login');
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return isAuthenticated ? <Component {...props} /> : <></>;
  };

  return AuthComponent;
};

export default privateRoute;
