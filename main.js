document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    const tabela = document.getElementById('tabelaContatos');
    const novaLinha = tabela.insertRow();

    const celulaNome = novaLinha.insertCell(0);
    const celulaTelefone = novaLinha.insertCell(1);

    celulaNome.textContent = nome;
    celulaTelefone.textContent = telefone;

    // Limpar o formulário
    document.getElementById('contatoForm').reset();
});