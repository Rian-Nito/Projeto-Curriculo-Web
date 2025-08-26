document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('.formulario-contato');
    
    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const termos = document.getElementById('termos').checked;
            
            if (!nome || !email || !termos) {
                alert('Por favor, preencha todos os campos obrigatórios e aceite os termos.');
                return;
            }
            
            alert('Obrigado por entrar em contato, ' + nome + '! Sua mensagem foi enviada com sucesso.');
            formulario.reset();
        });
    }
});