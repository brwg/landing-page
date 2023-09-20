<!-- Contact.svelte -->
<script>
    // Seus dados de contato, como nome, e-mail, telefone, etc.
    const contactDetails = {
      email: 'contato@brwg.com',
      telefone: '(12) 3456-7890'
    };
  </script>
  
  <section id="contact" class="contact">
    <div class="contact-content">
      <h2>Contato</h2>
      <div class="contact-details">
        <p>Email: {contactDetails.email}</p>
        <p>Telefone: {contactDetails.telefone}</p>
      </div>
    </div>
  </section>
  
  <style>
    /* Estilos para o formulário de contato ou detalhes de contato */
    .contact-content {
      text-align: center;
      padding: 20px;
    }
  
    .contact-details {
      background-color: #f9f9f9; /* Cor de fundo do bloco de contato */
      padding: 20px;
      margin-top: 20px;
      border-radius: 10px; /* Borda mais arredondada */
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra mais suave */
    }
  
    .contact-details p {
      margin: 10px 0;
    }

    body {
    font-family: Arial, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Arial, sans-serif;
  }
  </style>
  