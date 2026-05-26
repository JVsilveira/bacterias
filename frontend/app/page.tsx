import "./home.css"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <main>
        <p className="welcome">Bem vindo a nossa central de bactérias</p>
        <div className="home-container">
          <Link href="/form">
            <button className="button-home"> CADASTRAR</button>
          </Link>
          <Link href="/bacteria">
            <button className="button-home"> BACTÉRIAS</button>
          </Link>
        </div>
      </main>
    </div>
  )
}
