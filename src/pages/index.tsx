import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('../pages/HomePage'), {
  loading: () => <div>Loading...</div>
});

export default function Home() {
  return <HomePage />;
} 