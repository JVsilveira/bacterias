interface Bacteria {
  id: number;
  name: string;
  description: string;
  gram: string;
}

export default async function Bacteria() {
  const response = await fetch("http://localhost:3001/bacteria");
  const data: Bacteria[] = await response.json();
  console.log(data);

  return (
    <div>
      <main>
        <h1>Bactérias</h1>
        <p>Lista de bactérias:</p>
        <ul>
          {data.map((bacterium: any) => (
            <li key={bacterium.id}>
              <h2>{bacterium.name}</h2>
              <p>{bacterium.description}</p>
              <p>Gram: {bacterium.gram}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
