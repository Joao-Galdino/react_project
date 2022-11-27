import { BarraDeFerramentas } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";


export const Dashboard = () => {

    return(
        <LayoutBaseDePagina 
        titulo="Pagina Inicial" 
        barraDeFerramentas={(
            <BarraDeFerramentas
                mostrarInputBusca
            />
        )}>
        "Teste teste teste"
        </LayoutBaseDePagina>
    );
};