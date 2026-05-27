"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  initialValue: string;
}

export default function SearchInput({ initialValue }: Props) {
  const router = useRouter();

  const [search, setSearch] = useState(initialValue);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    setSearch(value);

    const params = new URLSearchParams();

    if (value.trim() !== "") {
      params.set("search", value);
    }

    router.push(`/bacteria?${params.toString()}`);
  }

  return (
    <input
      type="search"
      placeholder="Pesquisar..."
      className="search-input"
      value={search}
      onChange={handleSearch}
    />
  );
}
