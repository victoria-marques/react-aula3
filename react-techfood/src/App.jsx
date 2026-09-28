import Header from "./components/Header"
import CardPrato from "./components/CardPrato"
import Rodape from "./components/Rodape"
import {cardapio} from "./data/cardapio"
import "./App.css"
import { useState } from "react"




function App() {
  const [totalItens, setTotalItens] = useState(0)

    function adicionarAoPedido(quantidade){
      setTotalItens(totalItens + quantidade)
    }
  return (
    <main className="app">
    <Header totalItens={totalItens}/>
    <p className="total-itens">{cardapio.length}</p>
      <section className="cardapio">
        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={prato.nome}
            preco={prato.preco}
            categoria={prato.categoria}
            onAdicionar={adicionarAoPedido}
            descricao={prato.descricao}
          />
        ))}
    <Rodape />
      </section>
    </main>
  )
}

export default App