import Meta from '@/components/Meta';
import { ReactNode } from 'react'
import Footer from './Footer';

type Props = {
	children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
		<div className="container">
      <Meta />
			{children}
      <Footer />
    </div>
  );
};

export default Layout;
