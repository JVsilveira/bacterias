"use client";

import Link from "next/link";
import "./form.css";

import { createBacteria } from "./CreateBacteria";

import { toast } from "sonner";

import { useRouter } from "next/navigation";

export default function FormClient() {
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    const result = await createBacteria(formData);

    if (result?.error) {
      toast.error(result.error);
      return;
    }

    toast.success("Bactéria cadastrada com sucesso!");

    router.push("/bacteria");
  }

  return (
    <div className="form-container">
      <h1>Adicionar bactéria</h1>

      <form className="form" action={handleSubmit}>
        <label htmlFor="name">Nome:</label>

        <input type="text" id="name" name="name" required />

        <label htmlFor="description">Descrição:</label>

        <textarea id="description" name="description" required></textarea>

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
  );
}
