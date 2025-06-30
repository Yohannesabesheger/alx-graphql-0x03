import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorProneComponent from '@/components/rrorProneComponent';

const Home: React.FC = () => {
  return (
    <ErrorBoundary>
      <ErrorProneComponent />
    </ErrorBoundary>
  );
};

export default Home;