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
    background-color: #f9f9f9; /* Cor de fundo do rodapé */
    color: #2176ae; /* Cor do texto */
    text-align: center;
    padding: 20px;
    position: fixed;
    bottom: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 13px;
    width: 100%;
  }

  .footer-text {
    margin: 0;
  }
</style>
