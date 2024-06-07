import dynamic from "next/dynamic";

const NavBar = dynamic(()=> import('../components/NavBar/NavBar'))

export default function Home() {
  return (
    <>
      <NavBar />
    </>
  );
}
