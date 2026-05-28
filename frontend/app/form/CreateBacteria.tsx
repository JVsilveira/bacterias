"use server";

import { createBacteriaSchema } from "../[schemas]/bacteriaSchema";

export async function createBacteria(formData: FormData) {
  try {
    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
      gram: formData.get("gram"),
    };

    const validatedData = createBacteriaSchema.safeParse(data);

    if (!validatedData.success) {
      return {
        error: validatedData.error.issues[0].message,
      };
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/bacteria`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(validatedData.data),
      },
    );

    const responseData = await response.json();

    if (!response.ok) {
      return {
        error: responseData.message || "Erro ao cadastrar bactéria",
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);

    return {
      error: "Erro interno do servidor",
    };
  }
}
