import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Sobre from "@/components/sobre"
import Solucoes from "@/components/solucoes"
import Projetos from "@/components/projetos"
import MarcasCarrossel from "@/components/marcas-carrossel"
import ClientesTicker from "@/components/clientes-ticker"
import Contato from "@/components/contato"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarcasCarrossel />
        <Sobre />
        <ClientesTicker />
        <Solucoes />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
