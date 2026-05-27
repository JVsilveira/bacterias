"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import "../../../form/form.css"
import "../../../home.css"

interface Bacteria {
  id: number
  name: string
  description: string
  gram: string
}

interface EditFormProps {
  bacteria: Bacteria
}

export default function EditForm({ bacteria }: EditFormProps) {
  const router = useRouter()

  const [name, setName] = useState(bacteria.name)
  const [description, setDescription] = useState(bacteria.description)
  const [gram, setGram] = useState(bacteria.gram)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/bacteria/${bacteria.id}`,
        {
          method: "PATCH",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            description,
            gram,
          }),
        },
      )

      router.push("/bacteria")
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="form-container">
      <h1>Editar bactéria</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <select
          id="gram"
          name="gram"
          value={gram}
          onChange={e => setGram(e.target.value)}
        >
          <option value="positiva">Positiva</option>

          <option value="negativa">Negativa</option>
        </select>

        <button type="submit" className="button-home">
          SALVAR
        </button>
      </form>
    </div>
  )
}
