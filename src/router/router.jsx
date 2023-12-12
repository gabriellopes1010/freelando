import { createBrowserRouter } from "react-router-dom"
import SelecaoCLiente from "../paginas/cadastro/SelecaoCLiente";
import LayoutBaseCadastro from "../paginas/cadastro/LayoutBaseCadastro";
import LayoutBase from "../paginas/LayoutBase";
import Interesse from "../paginas/cadastro/Interesse";
import DadosPessoais from "../paginas/cadastro/DadosPessoais";

export const router = createBrowserRouter([
            {
                path: "/",
                element: <LayoutBase />,
                children: [
                {
                    path: 'cadastro',
                    element: <LayoutBaseCadastro />,
                    children: [
                        {
                            path:'',
                            element: <SelecaoCLiente />
                        },
                        {
                            path:'interesses',
                            element:<Interesse />
                        },
                        {
                            path:'dados-pessoais',
                            element: <DadosPessoais />
                        },
                        {
                            path: 'concluido',
                            element: <h1>concluido</h1>
                        }
                    ]

                }],
            },
        ]);