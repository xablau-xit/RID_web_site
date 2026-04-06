document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Mensagem enviada com sucesso!');
      form.reset();
    });
  }
});
