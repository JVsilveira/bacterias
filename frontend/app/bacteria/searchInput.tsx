"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

interface Props {
  initialValue: string;
}

export default function SearchInput({ initialValue }: Props) {
  const router = useRouter();
  const [search, setSearch] = useState(initialValue);
  const [previousValue, setPreviousValue] = useState(initialValue);
  const [pending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(initialValue);

  // Synchronize back/forward navigation without replacing newer typed text.
  if (previousValue !== initialValue) {
    setPreviousValue(initialValue);
    if (initialValue !== submitted) setSearch(initialValue);
  }

  useEffect(() => {
    if (search === initialValue) return;
    const timeout = setTimeout(() => {
      const params = new URLSearchParams();
      if (search.trim()) params.set("search", search);
      setSubmitted(search);
      startTransition(() => {
        router.replace(`/bacteria${params.size ? `?${params}` : ""}`, {
          scroll: false,
        });
      });
    }, 300);
    return () => clearTimeout(timeout);
  }, [search, initialValue, router]);

  return (
    <>
      <input
        type="search"
        aria-label="Pesquisar bactérias"
        placeholder="Pesquisar..."
        className="search-input"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {pending ? <p role="status" className="search-status">Pesquisando...</p> : null}
    </>
  );
}
