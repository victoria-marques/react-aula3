import { use, useState } from "react"

function CardPrato({nome, preco, categoria, onAdicionar, descricao}){
    const [quantidade, setQuantidade] = useState(1)
    const [mostrarDescricao, setMostrarDescricao] = useState(false)
    const [curtidas, setCurtidas] = useState(0)
    
    const precoFormatado = preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })

    function diminuir(){
        if(quantidade > 1){
            setQuantidade(quantidade - 1)
        }
    }

    function aumentar(){
        setQuantidade(quantidade + 1)
    }

    function adicionar(){
        onAdicionar(quantidade)
        setQuantidade(1)
    }

    return(
        <article className="card-prato">
            <span className="categoria">{categoria}</span>
            <h2>{nome}</h2>

            <p className="preco">{precoFormatado}</p>
            <div className="quantidade">

                <button type="button"onClick={diminuir} aria-label={`Diminuir quantidade de ${nome}`}>-</button>

                <span>{quantidade}</span>

                <button type="button"onClick={aumentar} aria-label={`Aumentar quantidade de ${nome}`}>+</button>

                <button onClick={() => setCurtidas(curtidas + 1)}>
                    ❤️ Curtir ({curtidas})
                </button>

                <button onClick={() => setMostrarDescricao(!mostrarDescricao)}>
                    {mostrarDescricao ? 'Esconder Detalhes' : 'Ver detalhes'}
                </button>
                {mostrarDescricao && <p className="descricao">{prato.descricao}</p>}
            </div>

            <button type="button" className="btn-adicionar" onClick={adicionar}>Adicionar ao pedido</button>

            <p className="descricao">{descricao}</p>
            <h3>
                {categoria === "Sobremesa" && <span> 🍰[Sobremesa]</span>} {nome}
            </h3>
        </article>
    )
}

export default CardPrato