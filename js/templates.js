export const templates = {
  home: () => `
    <h2>Quem somos</h2>
    <figure>
      <img src="imagens/cat.jpeg" alt="Gato branco de olhos azuis">
      <figcaption>Gato resgatado pela ONG</figcaption>
    </figure>
    <p>Somos uma organização sem fins lucrativos especializada no cuidado de gatos de rua.</p>

    <hr class="mt-16">

    <h2>Missão da Pata Branca</h2>
    <blockquote>
      Promover dignidade e oportunidade de uma nova vida a gatos abandonados.
    </blockquote>

    <hr class="mt-16">

    <h2>Contato</h2>
    <table class="text-cinza">
      <tr><th>Endereço:</th><td>Rua Garra Afiada, 289 – São Paulo/SP</td></tr>
      <tr><th>Telefone:</th><td>(11) 92322-4324</td></tr>
      <tr><th>E-mail:</th><td>contato@patabranca.com.br</td></tr>
    </table>
  `,

  projetos: () => `
    <h2>Conheça nossas ações</h2>
    <div class="row gap-16">
      <div class="col">
        <div class="card">
          <h3>Projetos Sociais</h3>
          <p class="text-cinza">Campanhas de esterilização, vacinação e alimentação.</p>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <h3>Voluntariado</h3>
          <p class="text-cinza">Cuidados, transporte e divulgação de campanhas.</p>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <h3>Como Doar</h3>
          <p class="text-cinza">Pix: contato@patabranca.com.br</p>
        </div>
      </div>
    </div>
  `,

  cadastro: () => `
    <h2>Cadastro de Apoiador</h2>
    <form id="formCadastro" novalidate>
      <div class="form-group">
        <label>Nome Completo *</label>
        <input type="text" name="nome" required>
        <span class="error"></span>
      </div>

      <div class="form-group">
        <label>E-mail *</label>
        <input type="email" name="email" required>
        <span class="error"></span>
      </div>

      <div class="form-group">
        <label>CPF *</label>
        <input type="text" name="cpf" placeholder="000.000.000-00" required>
        <span class="error"></span>
      </div>

      <div class="form-group">
        <label>Telefone *</label>
        <input type="tel" name="telefone" placeholder="(00) 00000-0000" required>
        <span class="error"></span>
      </div>

      <div class="form-group">
        <label>Data de Nascimento *</label>
        <input type="date" name="nascimento" required>
        <span class="error"></span>
      </div>

      <div class="form-group">
        <label>Endereço *</label>
        <input type="text" name="endereco" required>
        <span class="error"></span>
      </div>

      <div class="form-group">
        <label>CEP *</label>
        <input type="text" name="cep" placeholder="00000-000" required>
        <span class="error"></span>
      </div>

      <div class="form-group">
        <label>Cidade *</label>
        <input type="text" name="cidade" required>
        <span class="error"></span>
      </div>

      <div class="form-group">
        <label>Estado (UF) *</label>
        <input type="text" name="estado" maxlength="2" placeholder="SP" required>
        <span class="error"></span>
      </div>

      <button type="submit" class="btn btn-primaria">Enviar Cadastro</button>
    </form>
  `
};
