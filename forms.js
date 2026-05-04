document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Aitäh! Vorm on saadetud.");
    form.reset();
  });
});