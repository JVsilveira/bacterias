"use server";

import { revalidatePath, updateTag } from "next/cache";
import { createBacteriaSchema } from "../[schemas]/bacteriaSchema";

async function mutate(id: number, method: "DELETE" | "PATCH", data?: unknown) {
  if (!Number.isSafeInteger(id) || id <= 0) return { error: "Bactéria inválida" };
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bacteria/${id}`, {
      method,
      headers: data ? { "Content-Type": "application/json" } : undefined,
      body: data ? JSON.stringify(data) : undefined,
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) {
      const result = await response.json().catch(() => null);
      return { error: result?.message || "Erro ao alterar bactéria" };
    }
    updateTag("bacteria");
    revalidatePath("/bacteria");
    revalidatePath(`/bacteria/edit/${id}`);
    return { success: true };
  } catch {
    return { error: "Erro interno do servidor" };
  }
}

export async function deleteBacteria(id: number) {
  return mutate(id, "DELETE");
}

export async function updateBacteria(id: number, data: unknown) {
  const validated = createBacteriaSchema.safeParse(data);
  if (!validated.success) return { error: validated.error.issues[0].message };
  return mutate(id, "PATCH", validated.data);
}
