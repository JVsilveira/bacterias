import Link from "next/link";
import "./bacteria.css";
import SearchInput from "./searchInput";

interface Bacteria {
  id: number;
  name: string;
  description: string;
  gram: string;
}

interface PageProps {
  searchParams: Promise<{
    search?: string;
  }>;
}

export default async function Bacteria({ searchParams }: PageProps) {
  const params = await searchParams;
  const search = params.search || "";
  let url = `${process.env.NEXT_PUBLIC_API_URL}/bacteria`;
  if (search.trim() !== "") {
    url = `${process.env.NEXT_PUBLIC_API_URL}/bacteria/search?name=${search}`;
  }

  const response = await fetch(url, {
    cache: "no-store",
  });

  const data: Bacteria[] = await response.json();

  return (
    <div className="bacteria-container">
      <h1 className="bac-title">Bactérias</h1>

      <SearchInput initialValue={search} />

      <ul className="bacteria-list">
        {data.length > 0 ? (
          data.map((bacterium) => (
            <li key={bacterium.id} className="bacteria-item">
              <h2>{bacterium.name}</h2>

              <p>{bacterium.description}</p>

              <p>Gram: {bacterium.gram}</p>
            </li>
          ))
        ) : (
          <p>Nenhuma bactéria encontrada.</p>
        )}
      </ul>

      <div className="container-button-bac">
        <Link href="/">
          <button className="button-home">VOLTAR</button>
        </Link>
      </div>
    </div>
  );
}
