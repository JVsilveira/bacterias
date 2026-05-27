import Link from "next/link"
import "./form.css"

import { redirect } from "next/navigation"

async function createBacteria(formData: FormData) {
  "use server"

  try {
    const name = formData.get("name")
    const description = formData.get("description")
    const gram = formData.get("gram")

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/bacteria`,
      {
        method: "POST",

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

    if (!response.ok) {
      throw new Error("Erro ao cadastrar bactéria")
    } else {
      alert("Bactéria cadastrada com sucesso!")
    }

    redirect("/bacteria")
  } catch (error) {
    console.log(error)
  }
}

export default function Form() {
  return (
    <div className="form-container">
      <h1>Adicionar bactéria</h1>

      <form className="form" action={createBacteria}>
        <label htmlFor="name">Nome:</label>

        <input type="text" id="name" name="name" />

        <label htmlFor="description">Descrição:</label>

        <textarea id="description" name="description"></textarea>

        <label htmlFor="gram">Gram:</label>

        <select id="gram" name="gram">
          <option value="positiva">Positiva</option>

          <option value="negativa">Negativa</option>
        </select>

        <div className="container-button-form">
          <Link href="/">
            <button type="button" className="button-home">
              VOLTAR
            </button>
          </Link>

          <button type="submit" className="button-home">
            ENVIAR
          </button>
        </div>
      </form>
    </div>
  )
}
