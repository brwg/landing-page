<!-- Features.svelte -->
<script>
  const features = [
    "Tecnologia de Ponta",
    "Inovação Constante",
    "Soluções Personalizadas",
    "Eventos",
    "Comunidades",
  ];
</script>

<section id="features" class="features">
  <div class="features-content">
    <h2>Nossos Recursos</h2>
    <ul>
      {#each features as feature}
        <li>
          <button class="feature-button">
            {feature}
          </button>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  /* Estilos para os botões */
  .feature-button {
    padding: 10px 20px;
    margin-right: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    background-color: #4CAF50; /* Cor de fundo (substitua pela cor desejada) */
    color: white; /* Cor do texto (substitua pela cor desejada) */
    cursor: pointer;
  }

  .feature-button:hover {
    background-color: #45a049; /* Cor de fundo ao passar o mouse (substitua pela cor desejada) */
  }

  body {
    font-family: Arial, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Arial, sans-serif;
  }
</style>
