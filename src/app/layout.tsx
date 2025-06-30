import "./globals.css";

export default function RootLayout({
  children,
  members,
  comments,
}: Readonly<{
  children: React.ReactNode;
  comments: React.ReactNode;
  members: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1> {children}</h1>
        <div className="flex">
          {comments}
          {members}
        </div>
      </body>
    </html>
  );
}
