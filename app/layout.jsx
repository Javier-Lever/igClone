import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Instagram Clone",
  description: "An Instagram clone built with Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-[100vh] flex flex-col justify-between">
        <Header />
        <div className="container px-4 mx-auto grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}