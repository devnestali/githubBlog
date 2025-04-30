import { WithoutRepoContainer } from "./styles";

export function WithoutRepo() {
    return (
        <WithoutRepoContainer>
            <h3>No fue posible encontrar los repositorios.</h3>
            <p>Por favor, verifica tu conexión a internet o intenta nuevamente más tarde.</p>
        </WithoutRepoContainer>
    )
}