<!-- Footer.svelte -->
<script>
  const currentYear = new Date().getFullYear();
</script>

<footer id="contact" class="footer">
  <div class="footer-content">
    <p class="footer-text">© {currentYear} BR Working Group. Todos os direitos reservados.</p>
  </div>
</footer>

<style>
  /* Estilos para o rodapé */
  .footer {
    background-color: #333; /* Cor de fundo do rodapé */
    color: white; /* Cor do texto */
    text-align: center;
    padding: 20px;
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .footer-text {
    margin: 0;
  }

  body {
    font-family: Arial, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Arial, sans-serif;
  }
</style>
