import { Col, Row } from "react-grid-system"
import Cliente from './assets/cliente.png'
import Freelancer from './assets/freela.png'
import { Link } from '../../componentes/Link/Link'
import { Link as RouterLink } from "react-router-dom"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
const SelecaoCliente = () => {
    return (<div style={{ textAlign: 'center' }}>
        <Tipografia variante="h1" componente="h1">
            Crie o seu cadastro
        </Tipografia>

        <Tipografia variante="h3" componente="h2">
            Como podemos te ajudar?
        </Tipografia>
        <Row>
            <Col md={6} sm={12}>
                <RouterLink to='interesses'>
                    <img src={Cliente} alt="cliente"></img>
                    <Tipografia variante='body' componente='body'>
                        Sou cliente e preciso de um freela
                    </Tipografia>

                </RouterLink>

            </Col>
            <Col md={6} sm={12}>
                <img src={Freelancer} alt="freelancer"></img>
                <Tipografia variante='body' componente='body'>
                    Sou freela e preciso de um cliente
                </Tipografia>
            </Col>
        </Row>
        <div>
            <Tipografia variante='body2' componente='body2'>
                Já tem conta?
            </Tipografia>
            <p></p>
            <Link variante="secundaria">Faça login!</Link>
        </div>

    </div>)
}

export default SelecaoCliente