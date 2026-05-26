"use client"

import Link from "next/link"
import "./bacteria.css"

import { useEffect, useState } from "react"

interface Bacteria {
  id: number
  name: string
  description: string
  gram: string
}

export default function Bacteria() {
  const [data, setData] = useState<Bacteria[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBacteria() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/bacteria`,
        )

        const result = await response.json()

        setData(result)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchBacteria()
  }, [])

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className="bacteria-container">
      <h1 className="bac-title">Bactérias</h1>

      <ul className="bacteria-list">
        {data.map((bacterium: Bacteria) => (
          <li key={bacterium.id} className="bacteria-item">
            <h2>{bacterium.name}</h2>

            <p>{bacterium.description}</p>

            <p>Gram: {bacterium.gram}</p>
          </li>
        ))}
      </ul>

      <div className="container-button-bac">
        <Link href="/">
          <button className="button-home">VOLTAR</button>
        </Link>
      </div>
    </div>
  )
}
