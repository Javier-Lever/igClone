import "./globals.css";

export const metadata = {
  title: "Instagram Clone",
  description: "An Instagram clone built with Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}