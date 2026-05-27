"use client"

import { useRouter } from "next/navigation"

interface DeleteBacteriaProps {
  id: number
}

export default function deleteBacteria({ id }: DeleteBacteriaProps) {
  const router = useRouter()

  async function handleDelete() {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bacteria/${id}`, {
        method: "DELETE",
      })

      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button className="button-delete" onClick={handleDelete}>
      EXCLUIR
    </button>
  )
}
