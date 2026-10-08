"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { updateBacteria } from "../../actions";

import "../../../form/form.css";
import "../../../home.css";

interface Bacteria {
  id: number;
  name: string;
  description: string;
  gram: string;
}

interface EditFormProps {
  bacteria: Bacteria;
}

export default function EditForm({ bacteria }: EditFormProps) {
  const router = useRouter();

  const [name, setName] = useState(bacteria.name);

  const [description, setDescription] = useState(bacteria.description);

  const [gram, setGram] = useState(bacteria.gram);

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);

    try {
      const result = await updateBacteria(bacteria.id, { name, description, gram });
      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success("Bactéria atualizada com sucesso!");

      router.push("/bacteria");
    } catch (error) {
      console.log(error);

      toast.error("Erro interno do servidor");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-container">
      <h1>Editar bactéria</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          aria-label="Nome"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <textarea
          aria-label="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <select
          aria-label="Gram"
          id="gram"
          name="gram"
          value={gram}
          onChange={(e) => setGram(e.target.value)}
        >
          <option value="positiva">Positiva</option>

          <option value="negativa">Negativa</option>
        </select>

        <button type="submit" className="button-home" disabled={loading}>
          {loading ? "SALVANDO..." : "SALVAR"}
        </button>
      </form>
    </div>
  );
}
