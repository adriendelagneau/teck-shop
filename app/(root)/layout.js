import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div className="mb-24 "></div>
      {children}
      <Footer />
    </>

  )
}
