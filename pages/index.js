import Link from "../src/componentes/Link";

function Title({ children, as = "h1" }) {
  const Tag = as;
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
        }
      `}</style>
    </>
  );
}

export default function HomePage() {
  return (
    <div>
      <Title>Alura Cases - Home Page</Title>
      <Link href="/faq" passHref>FAQ</Link>
    </div>
  );
}
