import "./globals.css";

export const metadata = {
  title: "Instagram Clone",
  description: "An Instagram clone built with Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-[100vh] flex flex-col justify-between">
          {children}
      </body>
    </html>
  );
}
