function MyFallbackComponent({ error, resetErrorBoundary } :{error: any, resetErrorBoundary: () => void}) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    )
  }

  export default MyFallbackComponent;