<!-- Header.svelte -->
<script>
  import Logo from '../../../public/logo.png';

</script>

<header class="header">
  <div class="container">
    <div class="header-content">
      <div class="image-logo">
        <img src="{Logo}" alt="Logo do Grupo" class="logo">
      </div>
      <!-- <h1 class="header-title">BR Working Group</h1> -->
      <nav>
        <a href="#contact">Contact</a>
        <a href="#projects">Our Projects</a>
        <a href="#features">About the Team</a>
      </nav>
    </div>
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
    display: flex;
    flex-direction: column;
   
  }

  .header-content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }
  .header-content .image-logo {
    display: flex;
  }

  .header-title {
    font-size: 35px; /* Tamanho da fonte aumentado */
    margin-left: 40px;
    color: #2176ae; /* Azul mais escuro */
    font-weight: bold;
    text-transform: uppercase; /* Transformar o texto em maiúsculas */
    margin-top: 10px; /* Ajuste do espaçamento do topo */
    text-align: center;
  }

  nav {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
  }
  nav a {
    text-decoration: none; /* Azul mais escuro */
    transition: color 0.3s ease-in-out; /* Transição suave de cor */
    font-size: 18px; /* Tamanho da fonte para os links */
    font-weight: bold;
  }

  nav a:nth-child(even){
    color: #2176ae;
  }
  nav a:nth-child(odd){
    color: #2176ae;
  }

  nav a:hover {
    color: #68777d; /* Azul mais claro ao passar o mouse */
  }

  .logo {
    max-width: 200px; /* Ajuste o tamanho conforme necessário */
    max-height: 200px; /* Ajuste o tamanho conforme necessário */
  }

  @media screen and (max-width: 1800px) {
    nav {
      flex: 0.6;
    }
    .header-content .image-logo {
      flex: 0.6;
    }
  }
  @media screen and (max-width: 980px) {
    nav {
      flex: 12;
    }
    .header-content .image-logo {
      flex: 12;
    }

    nav a:nth-child(even){
    color: #6ab04c;
    }
    nav a:nth-child(odd){
      color: #2176ae;
    }
  }
  @media screen and (max-width: 600px) {
    nav {
      flex: 12;
    }
    .header-content .image-logo {
      flex: 12;
    }
  }
</style>
