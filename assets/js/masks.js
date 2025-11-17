/* assets/js/masks.js */
document.addEventListener('DOMContentLoaded', () => {
    const applyMask = (element, maskFunction) => {
        if (element) {
            element.addEventListener('keyup', (e) => {
                e.target.value = maskFunction(e.target.value);
            });
        }
    };
    const cpfMask = (v) => v.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2').slice(0, 14);
    const telMask = (v) => v.replace(/\D/g, '').replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2').slice(0, 15);
    const cepMask = (v) => v.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2').slice(0, 9);
    
    applyMask(document.getElementById('cpf'), cpfMask);
    applyMask(document.getElementById('telefone'), telMask);
    applyMask(document.getElementById('cep'), cepMask);
});