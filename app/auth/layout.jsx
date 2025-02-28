import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function RootLayout({ children }) {
  return (
      <div>
        <Header />
        <div className="container px-4 mx-auto grow">
          {children}
        </div>
        <Footer />
      </div>
  );
}
