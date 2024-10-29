function jogoPedraPapelTesoura(opcaoJogador) {
    const opcoesDeJogada = ['pedra', 'papel', 'tesoura'];
    const opcaoCPU = opcoesDeJogada[Math.floor(Math.random() * opcoesDeJogada.length)];

    if (!opcoesDeJogada.includes(opcaoJogador)) {
        return 'Opção inválida. Escolha entre pedra, papel ou tesoura.';
    }

    if (opcaoJogador === opcaoCPU) {
        return `Empate! Ambos escolheram ${opcaoJogador}.`;
    } else if (
        (opcaoJogador === 'pedra' && opcaoCPU === 'tesoura') ||
        (opcaoJogador === 'papel' && opcaoCPU === 'pedra') ||
        (opcaoJogador === 'tesoura' && opcaoCPU === 'papel')
    ) {
        return `Vitória! ${opcaoJogador} vence ${opcaoCPU}.`;
    } else {
        return `Derrota! ${opcaoCPU} vence ${opcaoJogador}.`;
    }
}

export default jogoPedraPapelTesoura;