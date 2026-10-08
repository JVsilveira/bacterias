import "./home.css";
import Link from "next/link";
import LabIllustration from "./components/LabIllustration";

export default function Home() {
  return (
    <div className="home-hero">
      <div className="hero-copy">
        <p className="welcome">Bem vindo a nossa central de bactérias</p>
        <div className="home-container">
          <Link href="/form" className="button-home">CADASTRAR</Link>
          <Link href="/bacteria" className="button-home button-secondary">BACTÉRIAS</Link>
        </div>
      </div>
      <div className="hero-art"><LabIllustration /></div>
    </div>
  );
}
