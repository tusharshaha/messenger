import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const privateRoute = <P extends object>(Component: React.ComponentType<P>) => {
  const AuthComponent: React.FC<P> = (props) => {
    const router = useRouter();
    const user = useSelector((state: RootState) => state.auth.user);

    useEffect(() => {
      if (!user.name) {
        router.replace('/signup');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return user.name ? <Component {...props} /> : <></>;
  };

  return AuthComponent;
};

export default privateRoute;
