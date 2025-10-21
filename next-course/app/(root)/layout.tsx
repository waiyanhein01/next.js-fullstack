export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-200 text-neutral-950">
      <h1 className="bg-neutral-950 p-3 text-neutral-50">Header</h1>
      {children}
      <h1 className="bg-neutral-950 p-3 text-neutral-50">Footer</h1>
    </div>
  );
}
