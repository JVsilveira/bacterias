import Link from "next/link";
import "./bacteria.css";

export default function EditButton({ id }: { id: number }) {
  return (
    <Link className="button-edit" href={`/bacteria/edit/${id}`}>
      EDITAR
    </Link>
  );
}
