import Header from "./components/header";
import Footer from "./components/footer";
export default function Home() {

  return (
    <main className="">
        <Header showAddress={false}/>
        <Footer/>
    </main>
  );
}
