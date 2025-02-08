import { Container, SideBar } from "@/components/shared";

export default function Home() {
  return (
    <main className="relative">
      <h1 className="px-2">Home</h1>
      <Container>
        <SideBar className="max-w-[1280px] mx-auto" />
      </Container>
    </main>
  );
}
