import EditForm from "./EditForm"

interface Bacteria {
  id: number
  name: string
  description: string
  gram: string
}

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function EditPage({ params }: PageProps) {
  const { id } = await params

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/bacteria/${id}`,
    {
      cache: "no-store",
    },
  )

  const bacteria: Bacteria = await response.json()

  return <EditForm bacteria={bacteria} />
}
