export async function sendContactEmail(formData) {
  const subject = encodeURIComponent(`Novo contato via site - ${formData.service || 'Geral'}`);
  const body = encodeURIComponent(
    `Nome: ${formData.name}\nE-mail: ${formData.email}\nServiço: ${formData.service || 'Não especificado'}\n\nMensagem:\n${formData.message}`
  );
  window.location.href = `mailto:contato@softverse.dev.br?subject=${subject}&body=${body}`;
}
