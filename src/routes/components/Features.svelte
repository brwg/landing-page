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
  .features {
    background-color: #f9f9f9; /* Cor de fundo da seção */
    padding: 20px;
  }

  .features-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .feature-button {
    padding: 10px 20px;
    margin-right: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    background-color: #3498db; /* Cor de fundo (azul) */
    color: white; /* Cor do texto */
    cursor: pointer;
    transition: background-color 0.3s ease-in-out; /* Transição suave de cor */
  }

  .feature-button:hover {
    background-color: #2980b9; /* Cor de fundo ao passar o mouse */
  }

  body {
    font-family: 'Roboto', 'sans-serif';
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', 'sans-serif';
    color:#f5b042;
  }
</style>
