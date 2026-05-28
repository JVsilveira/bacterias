"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { createBacteriaSchema } from "../../../[schemas]/bacteriaSchema";

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

    const validatedData = createBacteriaSchema.safeParse({
      name,
      description,
      gram,
    });

    if (!validatedData.success) {
      toast.error(validatedData.error.issues[0].message);

      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/bacteria/${bacteria.id}`,
        {
          method: "PATCH",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(validatedData.data),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Erro ao atualizar bactéria");

        return;
      }

      toast.success("Bactéria atualizada com sucesso!");

      router.push("/bacteria");

      router.refresh();
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
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <select
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
