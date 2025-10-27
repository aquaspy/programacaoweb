export const validate = {
  cpf(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) return false;
    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf[i]) * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[9])) return false;
    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf[i]) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf[10]);
  },

  telefone(tel) {
    // (DD) 99999-9999  → 5 antes do - e 4 depois
    return /^\(\d{2}\) \d{5}-\d{4}$/.test(tel);
  },

  email(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },

  apply(form) {
    const fields = form.querySelectorAll('input[required]');
    let valid = true;

    fields.forEach(inp => {
      const error = inp.parentElement.querySelector('.error');
      error.textContent = '';

      if (!inp.value.trim()) {
        error.textContent = 'Campo obrigatório';
        valid = false;
        return;
      }

      if (inp.name === 'cpf' && !this.cpf(inp.value)) {
        error.textContent = 'CPF inválido';
        valid = false;
      }
      if (inp.name === 'telefone' && !this.telefone(inp.value)) {
        error.textContent = 'Formato: (00) 00000-0000';
        valid = false;
      }
      if (inp.name === 'email' && !this.email(inp.value)) {
        error.textContent = 'E-mail inválido';
        valid = false;
      }
    });

    return valid;
  }
};
