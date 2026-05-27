"use client"

import { useRouter } from "next/navigation"
import "../bacteria/bacteria.css"

interface EditBacteriaProps {
  id: number
}

export default function EditButton({ id }: EditBacteriaProps) {
  const router = useRouter()

  return (
    <button
      className="button-edit"
      onClick={() => router.push(`/bacteria/edit/${id}`)}
    >
      EDITAR
    </button>
  )
}
