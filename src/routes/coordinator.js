export const goToSignUp = (history) => {
    history.push('/cadastro');
}

export const goToLogin = (history) => {
    history.push('/login');
}

export const goToHome = (history) => {
    history.push('/pagina_inicial');
}

export const goToDetailsPokemon = (history, id) => {
    history.push(`/detalhes/${id}`);
}

export const goToPokemonsUser = (history) => {
    history.push(`/meus_pokemons`);
}

export const goBack = (history) => {
    history.goBack();
}

export const logout = (history) => {
    if (window.confirm('Você tem certeza que deseja sair :( ?')) {
        localStorage.removeItem("token");
        history.push('/login');
    }
}

