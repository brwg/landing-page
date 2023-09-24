<!-- Contact.svelte -->
<script>
  const contactDetails = {
    email: 'contact@brwg.org',
  };
</script>

<section id="contact" class="contact">
  <div class="contact-content">
    <h2>Contato</h2>
    <div class="contact-details">
      <p>Email: {contactDetails.email}</p>
    </div>
  </div>
</section>

<style>
  /* Estilos para o formulário de contato ou detalhes de contato */
  .contact-content {
    background-color: #f0f0f0; /* Cor de fundo da seção de contato */
    padding: 40px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }

  h2 {
    color:#2176ae;
  }

  .contact-details {
    padding: 10px;
    border-radius: 10px; /* Borda mais arredondada */
    display: inline-block;
    text-align: left;
    font-family: 'Roboto', sans-serif;
    color:#6ab04c;
    font-weight: bold;
  }

  .contact-details p {
    font-size: 18px;
    margin: 10px 0;
  }
</style>
