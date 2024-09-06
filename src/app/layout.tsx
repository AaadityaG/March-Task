import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" text-black font-sans bg-blue-300">
        <main>{children}</main>
      </body>
    </html>
  );
}
