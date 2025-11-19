"use client";

const error = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void & { digest?: string };
}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Cannot find product!</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default error;
