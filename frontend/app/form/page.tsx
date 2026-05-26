import Link from "next/link"
import "./form.css"

export default async function Form() {
  return (
    <div className="form-container">
      <h1>Adicionar bactéria</h1>
      <form className="form">
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="description">Descrição:</label>
        <textarea id="description" name="description"></textarea>
        <label htmlFor="gram">Gram:</label>
        <select id="gram" name="gram">
          <option value="positiva">Positiva</option>
          <option value="negativa">Negativa</option>
        </select>
      </form>
      <div className="container-button-form">
        <Link href="/">
          <button className="button-home">VOLTAR</button>
        </Link>
        <button className="button-home">ENVIAR</button>
      </div>
    </div>
  )
}
