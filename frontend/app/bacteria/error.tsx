"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function Error({ reset }: { reset: () => void }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function retry() {
    startTransition(() => {
      router.refresh();
      reset();
    });
  }

  return (
    <div role="alert">
      <p>Não foi possível carregar as bactérias. Tente novamente.</p>
      <button className="button-home" onClick={retry} disabled={pending}>
        {pending ? "CARREGANDO..." : "TENTAR NOVAMENTE"}
      </button>
    </div>
  );
}
