"use client";

import { useRouter } from "next/navigation";

import { toast } from "sonner";

interface DeleteBacteriaProps {
  id: number;
}

export default function DeleteBacteria({ id }: DeleteBacteriaProps) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = confirm("Tem certeza que deseja excluir esta bactéria?");

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/bacteria/${id}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        toast.error("Erro ao excluir bactéria");
        return;
      }

      toast.success("Bactéria excluída com sucesso!");

      router.refresh();
    } catch (error) {
      console.log(error);

      toast.error("Erro interno do servidor");
    }
  }

  return (
    <button className="button-delete" onClick={handleDelete}>
      EXCLUIR
    </button>
  );
}
