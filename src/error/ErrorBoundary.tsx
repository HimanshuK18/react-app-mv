import React, { useState, useEffect, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // This hook will run whenever there is an error in the child components
    // It's similar to componentDidCatch in class components
    const handleError = (error: ErrorEvent) => {
      console.error(error); // You can log the error to a service like Sentry here if needed
      setHasError(true);
    };

    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  if (hasError) {
    // You can replace the following div with your custom error page component
    return <div>Something went wrong. Please try again later.</div>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
