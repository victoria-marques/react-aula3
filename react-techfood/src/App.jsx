import Header from "./components/Header"
import CardPrato from "./components/CardPrato"
import Rodape from "./components/Rodape"

const cardapio = [
  {
    id: 1,
    nome: "Feijoada",
    preco: 42.90,
    categoria: "Prato Principal",
    descricao: "Feijoada completa com acompanhamentos tradicionais"
  },

  {
    id: 2,
    nome: "Moqueca",
    preco: 49.90,
    categoria: "Prato Principal",
    descricao: "Cozido de frutos do mar preparado em uma panela de barro com diversos temperos e vegetais"
  },

  {
    id: 3,
    nome: "Pudim",
    preco: 15.00,
    categoria: "Sobremesa",
    descricao: "Sobremesa doce, cremosa e macia que se destaca pelo formato de anel e pela cobertura de calda de caramelo brilhante"
  },

  {
    id: 4,
    nome: "Brownie",
    preco: 10.00,
    categoria: "Sobremesa",
    descricao: "É um bolo de chocolate desno e úmido de origem americana, cortado em pequenos pedaços quadrados"
  },

  {
    id: 5,
    nome: "Lagosta",
    preco: 70.00,
    categoria: "Prato Exótico",
    descricao: "É um crustáceo nobre da alta gastronomia, caracterizado por carne branca firme, suculenta e com um sutil toque adocicado"
  }

]

function App() {
  return (
    <main className="app">
    <Header />
    <p className="total-itens">{cardapio.length}</p>
      <section className="cardapio">
        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            categoria={prato.categoria}
            descricao={prato.descricao}
          />
        ))}
    <Rodape />
      </section>
    </main>
  )
}

export default App