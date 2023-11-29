import styled from "@emotion/styled"
import { useState } from "react"
import { ItemListaSuspensaEstilizado } from "./ItemListaSuspensa"
import { ListaSuspensaEstilizada } from "./ListaSupensaEstilizada"


const LabelEstilizada = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    position: relative;

`

const BotaoEstilizado = styled.button`
    cursor: pointer;
    display: block;
    height: 40px;
    width: 100%;
    font-size: 18px;
    outline: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    border-radius: 18px;
    border-bottom-left-radius: ${props => props.estaAberta ? '0' : '18px'};
    border-bottom-right-radius: ${props => props.estaAberta ? '0' : '18px'};
    margin-top: ${props => props.theme.espacamentos.xs};
    padding: ${props => props.theme.espacamentos.s};
    background: ${props => props.theme.cores.branco};
    border: 1px solid ${props => props.theme.cores.neutras.a};
    &:focus {
        border-color: ${props => props.theme.cores.focus};
    }
`


export const ListaSuspensa = ({ titulo, opcoes }) => {
    const [estadoAberta, alternarVisibilidade] = useState(false)
    const [opcaoFocada, setOpcaoFocada] = useState(null);
    const [opcaoSelecionada, setOpcaoSelecionada] = useState(null)
    
    const manipularTecladoTeclado = (evento) => {
        alternarVisibilidade(true)
        switch(evento.key){
            case 'ArrowDown':
                evento.preventDefault();
                setOpcaoSelecionada(opcoes[opcaoFocada])
                setOpcaoFocada(focoAntigo => {
                    if(focoAntigo == null){
                        return 0;
                    }

                    return focoAntigo += 1
                })
                break;

                case 'ArrowUp':
                    evento.preventDefault();
                    setOpcaoSelecionada(opcoes[opcaoFocada])
                setOpcaoFocada(focoAntigo => {
                    if(!focoAntigo) {
                        return 0;
                    }

                    return (focoAntigo -= 1);
                })
                break;

                case 'Enter':
                    evento.preventDefault();
                setOpcaoFocada(null)
                alternarVisibilidade(false)
                setOpcaoSelecionada(opcoes[opcaoFocada])

                break;
        }
    }
    return (<LabelEstilizada>
        {titulo}
        <BotaoEstilizado 
        onClick={() => alternarVisibilidade(!estadoAberta)}
        onKeyDown={manipularTecladoTeclado}
        >
            <div>
                { opcaoSelecionada ? opcaoSelecionada.text : 'Selecione'}
            </div>
            <div>
                <span>{estadoAberta ? '▲' : '▼'}</span>
            </div>
        </BotaoEstilizado>
            {estadoAberta && <ListaSuspensaEstilizada>
                {opcoes.map((opcao, index) => <ItemListaSuspensaEstilizado
                     key={opcao.value}
                     focoAtivo={index ===opcaoFocada}
                     onClick={() => setOpcaoSelecionada(opcao)}
                     >
                {opcao.text}
                </ItemListaSuspensaEstilizado>)}
                </ListaSuspensaEstilizada>}

    </LabelEstilizada>)
}