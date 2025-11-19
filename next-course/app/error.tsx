"use client";

const error = ({ error }: { error: Error & { digest?: string } }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
    </div>
  );
};

export default error;
