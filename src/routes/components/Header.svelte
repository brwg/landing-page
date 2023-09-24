<!-- Header.svelte -->
<script>
  // Se houver lógica necessária para o cabeçalho
</script>

<header class="header">
  <div class="header-content">
    <img src="./logo.png" alt="Logo do Grupo" class="logo">
    <h1 class="header-title">BR Working Group</h1>
    <nav>
      <a href="#features">About the Team</a>
      <a href="#projects">Our Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</header>

<style>
  /* Estilos para o cabeçalho */

  .header {
    background-color: #f0f0f0; /* Cor de fundo do cabeçalho */
    color: #333; /* Cor do texto */
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-title {
    font-size: 35px; /* Tamanho da fonte aumentado */
    margin-left: 40px;
    color: #2176ae; /* Azul mais escuro */
    font-family: 'Roboto', 'sans-serif'; /* Nova fonte */
    font-weight: bold;
    text-transform: uppercase; /* Transformar o texto em maiúsculas */
    margin-top: 10px; /* Ajuste do espaçamento do topo */
    text-align: center;
  }

  nav a {
    margin-left: 20px;
    text-decoration: none;
    color: #2176ae; /* Azul mais escuro */
    transition: color 0.3s ease-in-out; /* Transição suave de cor */
    font-family: 'Roboto', 'sans-serif'; /* Nova fonte */
    font-size: 18px; /* Tamanho da fonte para os links */
    font-weight: bold;
  }

  nav a:hover {
    color: #4ca2cc; /* Azul mais claro ao passar o mouse */
  }

  .logo {
    max-width: 100px; /* Ajuste o tamanho conforme necessário */
    max-height: 100px; /* Ajuste o tamanho conforme necessário */
  }
</style>
