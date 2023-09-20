<!-- Header.svelte -->
<script>


</script>



<header class="header">
  <div class="header-content">
    <img src="../../../public/logo.png" alt="Logo do Grupo" class="logo">

    <h1>BR Working Group</h1>
    <nav>
      <a href="#features">Recursos</a>
      <a href="#projects">Projetos</a>
      <a href="#contact">Contato</a>
    </nav>
  </div>
</header>

<style>
  /* Estilos para o cabeçalho */
  .header {
    background-color: #333; /* Cor de fundo do cabeçalho */
    color: white; /* Cor do texto */
    padding: 20px;
    text-align: center;
  }

  .header-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .header nav a {
    color: white; /* Cor dos links */
    margin: 0 10px;
    text-decoration: none;
  }

  .header nav a:hover {
    text-decoration: underline;
  }

  body {
    font-family: Arial, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Arial, sans-serif;
  }

  .logo {
    max-width: 100px; /* Ajuste o tamanho conforme necessário */
    max-height: 100px; /* Ajuste o tamanho conforme necessário */
  }

</style>
