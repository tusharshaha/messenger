import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const privateRoute = <P extends object>(Component: React.ComponentType<P>) => {
  return function Protected(props:any) {
    const router = useRouter();
    const user = useSelector((state: RootState) => state.auth.user);

    if (!user.name) {
      router.replace('/signup')
      return <h2>Loading...</h2>
    }
    return <Component {...props} />
  }
}
export default privateRoute;
