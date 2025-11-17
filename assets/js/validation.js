/*
 * assets/js/validation.js
 */
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.registration-form form');
    if (!form) {
        return; 
    }
    
    const feedbackEl = document.getElementById('form-feedback');

    form.setAttribute('novalidate', 'true');

    // Validação no 'blur' (ao sair do campo)
    form.querySelectorAll('.form-control[required]').forEach(field => {
        field.addEventListener('blur', () => {
            validateField(field);
        });
        // Limpa o erro ao começar a digitar
        field.addEventListener('input', () => {
             if(field.classList.contains('is-invalid')) {
                field.classList.remove('is-invalid');
                const errorEl = getErrorElement(field);
                if (errorEl) errorEl.textContent = '';
             }
        });
    });

    // Validação no 'submit' (ao enviar)
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        if (validateForm(form)) {
            // Sucesso
            showFormFeedback('Cadastro enviado com sucesso! Entraremos em contato.', 'success', feedbackEl);
            form.reset(); // Limpa os campos
            // Limpa os estilos de validação
            clearValidationStyles(form);
        } else {
            // Erro
            showFormFeedback('Por favor, corrija os erros destacados no formulário.', 'error', feedbackEl);
        }
    });

    //Listener para o botão LIMPAR 
    const resetButton = form.querySelector('button[type="reset"]');
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            clearValidationStyles(form);
            showFormFeedback('', 'default', feedbackEl); // Limpa o feedback global
        });
    }
});

/**
 * Valida o formulário inteiro
 */
function validateForm(form) {
    let isFormValid = true;
    let firstInvalidField = null;

    form.querySelectorAll('.form-control[required]').forEach(field => {
        if (!validateField(field)) {
            isFormValid = false;
            if (!firstInvalidField) {
                firstInvalidField = field;
            }
        }
    });

    if (firstInvalidField) {
        firstInvalidField.focus();
    }
    return isFormValid;
}

/**
 * Valida um único campo
 */
function validateField(field) {
    const isValid = field.checkValidity();
    const errorEl = getErrorElement(field); 

    if (!isValid) {
        field.classList.add('is-invalid');
        field.setAttribute('aria-invalid', 'true');
        field.classList.remove('is-valid');
        if (errorEl) {
            errorEl.textContent = field.validationMessage;
        }
    } else {
        field.classList.remove('is-invalid');
        field.setAttribute('aria-invalid', 'false');
        field.classList.add('is-valid');
        if (errorEl) {
            errorEl.textContent = '';
        }
    }
    return isValid;
}

/**
 * Função auxiliar para encontrar o elemento de erro
 */
function getErrorElement(field) {
    const formGroup = field.closest('.form-group');
    if (formGroup) {
        return formGroup.querySelector('.error-message');
    }
    return null;
}

/**
 * Função auxiliar para mostrar feedback global
 */
function showFormFeedback(message, type, element) {
    if (!element) return;
    element.textContent = message;
    
    // Define a classe de alerta (ex: 'alert-success' ou 'alert-error')
    element.className = (type === 'default') ? '' : `alert alert-${type}`;
    
    // Mostra ou esconde o elemento
    element.style.display = (message === '') ? 'none' : 'block';
    
    if(message !== '') {
        element.setAttribute('role', 'alert');
    } else {
        element.removeAttribute('role');
    }
}

/**
 * **** NOVA FUNÇÃO ****
 * Limpa todos os estilos de validação (.is-invalid, .is-valid) e mensagens.
 */
function clearValidationStyles(form) {
    form.querySelectorAll('.form-control').forEach(field => {
        field.classList.remove('is-valid', 'is-invalid');
        const errorEl = getErrorElement(field);
        if (errorEl) {
            errorEl.textContent = '';
        }
    });
}