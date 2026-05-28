import { z } from "zod";

export const createBacteriaSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Nome é obrigatório")
    .max(100, "Máximo de 100 caracteres"),

  description: z.string().trim().min(1, "Descrição é obrigatória"),

  gram: z.enum(["positiva", "negativa"], {
    message: "Gram inválido",
  }),
});

export type CreateBacteriaDTO = z.infer<typeof createBacteriaSchema>;
