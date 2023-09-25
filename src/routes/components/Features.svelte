<!-- Features.svelte -->
<script>
  const features = [
    "Soluções Personalizadas",
    "Eventos",
    "Comunidades",
    "Educação"
  ];
</script>

<section id="features" class="features">
  <div class="features-content">
    <h2>Our Projects</h2>
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
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 16px;
  }

  .features-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
  }

  .feature-button {
    padding: 10px 20px;
    margin-right: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    background-color: #2176ae; /* Cor de fundo (azul) */
    color: white; /* Cor do texto */
    cursor: pointer;
    transition: background-color 0.3s ease-in-out; /* Transição suave de cor */
    font-size: 15px;
    font-weight: bold;
  }

  .feature-button:hover {
    background-color: #4ca2cc
  }

  :global(h1, h2, h3, h4, h5, h6) {
    color:#6ab04c;
  }

  .features-content ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }

  .features-content ul li {
    list-style: none;
  }
</style>
