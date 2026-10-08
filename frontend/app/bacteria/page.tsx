import Link from "next/link";
import "./bacteria.css";
import SearchInput from "./searchInput";
import DeleteButton from "./deleteBacteria";
import EditButton from "./editButton";
import "../form/form.css";
import "../home.css";

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
    url = `${process.env.NEXT_PUBLIC_API_URL}/bacteria/search?name=${encodeURIComponent(search)}`;
  }

  const response = await fetch(url, {
    next: { revalidate: 30, tags: ["bacteria"] },
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) throw new Error("Não foi possível carregar as bactérias");

  const data: Bacteria[] = await response.json();

  return (
    <div className="bacteria-container">
      <h1 className="bac-title">Bactérias</h1>

      <div className="catalog-toolbar"><SearchInput initialValue={search} /></div>

      <ul className="bacteria-list">
        {data.length > 0 ? (
          data.map((bacterium) => (
            <li key={bacterium.id} className="bacteria-item">
              <h2>{bacterium.name}</h2>
              <p className="bacteria-description">{bacterium.description}</p>
              <p className={`gram-badge ${bacterium.gram === "positiva" ? "gram-positive" : "gram-negative"}`}>Gram: {bacterium.gram}</p>

              <div className="bacteria-actions">
                <DeleteButton id={bacterium.id} />
                <EditButton id={bacterium.id} />
              </div>
            </li>
          ))
        ) : (
          <li className="empty-state">Nenhuma bactéria encontrada.</li>
        )}
      </ul>

      <div className="container-button-bac">
        <Link href="/" className="button-home button-secondary">VOLTAR</Link>
      </div>
    </div>
  );
}
