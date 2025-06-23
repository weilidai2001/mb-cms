import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex items-center justify-center"
      style={{ minHeight: "calc(100vh - 100px)" }}
    >
      <a
        href="/explore"
        className="bg-primary-background text-black font-bold text-2xl px-12 py-6 rounded-full shadow-none hover:bg-[#5cd2d2] transition-colors duration-200"
        style={{ boxShadow: "none" }}
      >
        Explore our products here
      </a>
    </main>
  );
}
