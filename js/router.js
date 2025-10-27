import { templates } from './templates.js';
import { validate } from './validate.js';
import { maskCPF, maskCEP, maskTelefone } from './mask.js';

function navigate(page) {
  const main = document.querySelector('main');
  main.innerHTML = templates[page]();
  window.location.hash = page;

  if (page === 'cadastro') {
    const form = document.getElementById('formCadastro');
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (validate.apply(form)) {
        alert('Cadastro realizado com sucesso!');
        form.reset();
      }
    });

    form.cpf.addEventListener('input', e => {
      e.target.value = maskCPF(e.target.value);
    });
    form.cep.addEventListener('input', e => {
      e.target.value = maskCEP(e.target.value);
    });
    form.telefone.addEventListener('input', e => {
      e.target.value = maskTelefone(e.target.value);
    });
  }
}

window.addEventListener('hashchange', () => {
  const page = location.hash.replace('#', '') || 'home';
  navigate(page);
});

document.addEventListener('DOMContentLoaded', () => {
  const initial = location.hash.replace('#', '') || 'home';
  navigate(initial);
});
