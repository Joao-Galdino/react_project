import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";

interface IFerramentasDaListagemProps {
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDeBusca?: (novoTexto: string) => void;
    //botão
    textoBotaoNovo?: string;
    aoMostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void;
    
}



export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
    textoDaBusca = "",
    mostrarInputBusca  = false,
    aoMudarTextoDeBusca,
    //botão
    aoClicarEmNovo,
    textoBotaoNovo = "Novo",
    aoMostrarBotaoNovo = true

}) => {
    const theme = useTheme()
    
    return(
        <Box 
        gap={1}
        marginX={1}
        padding={1}
        paddingX={2}
        display="flex"
        alignItems="center"
            height={theme.spacing(5)} 
        component={Paper}>

            {mostrarInputBusca && (
                <TextField
                size="small"
                value={textoDaBusca}
                onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
                placeholder="pesquisar"
                />
            )}

            <Box flex={1} display="flex" justifyContent="end">
                {aoMostrarBotaoNovo && (
                <Button
                color='primary'
                disableElevation //Ao declarar um componemte boolean é possivel passar apenas o nome caso seja TRUE
                variant="contained"
                onClick={aoClicarEmNovo}
                endIcon={<Icon>add</Icon>}
                >{textoBotaoNovo}</Button>
                )}
            </Box>
        </Box>
    );
}