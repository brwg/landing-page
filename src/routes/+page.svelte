<!-- +page.svelte -->
<script>
    import Header from './components/Header.svelte';
    import Presentation from './components/Presentation.svelte';
    import Features from './components/Features.svelte';
    import Footer from './components/Footer.svelte';
    import Contact from './components/Contact.svelte';
  </script>
  
  <main>
    <Header />
    <Presentation />
    <Features />
    <Contact />
    <Footer />
  </main>
  
  <style>
    /* Adicione estilos globais ou específicos do +page.svelte, se necessário */
    @font-face {
      font-family: 'Roboto';
      src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    }
    :global(body) {
      margin: 0;
      font-family: 'Roboto', sans-serif ;
    }

  </style>
  