import { Col, Row } from "react-grid-system"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import ImgCliente from './assets/cliente-concluido.png'
import { Link } from "react-router-dom"
import { Botao } from "../../componentes/Botao/Botao"
import styled from "@emotion/styled"

const ImagemEstilizada = styled.img`
max-width: 100%;
border-radius:16px;
`


const Concluido = () => {
    return (<div style={{ textAlign: 'center' }}>

        <Tipografia variante="h1" componente="h1">
            Seu perfil está completo!
        </Tipografia>

        <Tipografia variante="h3" componente="h3">
            Agora é só começar a se conectar com os melhores freelancers do mercado!
        </Tipografia>
        <figure>
            <ImagemEstilizada src={ImgCliente} alt="concluido" style={{ width: 524, height: 323, borderRadius: 16 }} />
        </figure>
        <Row justify="center">
            <Col lg={6} md={6} sm={6}>
                <Link to='/'>
                    <Botao variante="secundaria">
                        Voltar para a home
                    </Botao>
                </Link>
            </Col>

        </Row>
    </div>)

}

export default Concluido