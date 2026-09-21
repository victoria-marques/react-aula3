import Header from "./components/Header"
import CardPrato from "./components/CardPrato"


const cardapio = [
  {
    id: 1,
    nome: "Feijoada",
    preco: 42.90,
    categoria: "Prato Principal"
  },

  {
    id: 2,
    nome: "Moqueca",
    preco: 49.90,
    categoria: "Prato Principal"
  },

  {
    id: 3,
    nome: "Pudim",
    preco: 15.00,
    categoria: "Sobremesa"
  },

  {
    id: 4,
    nome: "Brownie",
    preco: 10.00,
    categoria: "Sobremesa"
  },

  {
    id: 5,
    nome: "Lagosta",
    preco: 70.00,
    categoria: "Prato Exótico"
  }

]

function App() {
  return (
    <main className="app">
    <Header />
      <section className="cardapio">
        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            categoria={prato.categoria}
          />
        ))}
      </section>
    </main>
  )
}

export default App