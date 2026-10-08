"use client";

import { useState } from "react";
import { deleteBacteria } from "./actions";

import { toast } from "sonner";

interface DeleteBacteriaProps {
  id: number;
}

export default function DeleteBacteria({ id }: DeleteBacteriaProps) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (loading) return;
    const confirmed = confirm("Tem certeza que deseja excluir esta bactéria?");

    if (!confirmed) {
      return;
    }

    setLoading(true);
    try {
      const result = await deleteBacteria(id);
      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success("Bactéria excluída com sucesso!");
    } catch (error) {
      console.log(error);

      toast.error("Erro interno do servidor");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button className="button-delete" onClick={handleDelete} disabled={loading}>
      {loading ? "EXCLUINDO..." : "EXCLUIR"}
    </button>
  );
}
