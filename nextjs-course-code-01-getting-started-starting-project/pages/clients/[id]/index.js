import { useRouter } from "next/router";

export default function ClientProjectPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Project of a Given Client</h1>
    </div>
  );
}
