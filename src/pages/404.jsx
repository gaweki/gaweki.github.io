import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO 
        title="404: Page Not Found"
        description="The page you're looking for doesn't exist."
      />
      
      <div className="container mx-auto px-4 py-20 text-center min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-9xl font-bold mb-4 animate-fade-in">404</h1>
        <h2 className="text-3xl font-bold mb-4 animate-fade-in">Page Not Found</h2>
        <p className="text-xl text-text-secondary mb-8 max-w-md animate-fade-in">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-block px-8 py-3 bg-accent-cyan text-dark-bg rounded-lg hover:bg-accent-blue hover:shadow-glow-cyan transition-all font-medium animate-fade-in"
        >
          Go Back Home
        </a>
      </div>
    </Layout>
  );
}

export function Head() {
  return <SEO />;
}
