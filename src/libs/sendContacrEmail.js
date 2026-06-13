import { base44 } from '@/api/base44Client';

export async function sendContactEmail(formData) {
  try {
    const result = await base44.integrations.Core.SendEmail({
      to: 'contato@softverse.dev.br',
      from: 'noreply@softverse.dev.br',
      subject: `Novo contato via site - ${formData.service || 'Geral'}`,
      html: `
        <div style="font-family: Montserrat, Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0E1148 0%, #298D71 100%); padding: 32px; border-radius: 12px; color: white; text-align: center; margin-bottom: 32px;">
            <h1 style="margin: 0; font-size: 28px;">Novo Contato via Site</h1>
          </div>
          
          <div style="background: #F7F9FC; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
            <h2 style="color: #0E1148; margin-top: 0; font-size: 18px;">Informações do Contato</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #E5E7EB;">
                <td style="padding: 12px 0; color: #6B7280; font-weight: 600; width: 120px;">Nome:</td>
                <td style="padding: 12px 0; color: #0E1148; font-weight: 500;">${formData.name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #E5E7EB;">
                <td style="padding: 12px 0; color: #6B7280; font-weight: 600;">E-mail:</td>
                <td style="padding: 12px 0; color: #0E1148; font-weight: 500;">
                  <a href="mailto:${formData.email}" style="color: #298D71; text-decoration: none;">${formData.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #6B7280; font-weight: 600;">Serviço:</td>
                <td style="padding: 12px 0; color: #0E1148; font-weight: 500;">${formData.service || 'Não especificado'}</td>
              </tr>
            </table>
          </div>

          <div style="background: white; padding: 24px; border-radius: 8px; border: 1px solid #E5E7EB; margin-bottom: 24px;">
            <h3 style="color: #0E1148; margin-top: 0; font-size: 16px;">Mensagem</h3>
            <p style="color: #374151; line-height: 1.6; white-space: pre-wrap; margin: 0;">${formData.message}</p>
          </div>

          <div style="background: #F3F4F6; padding: 16px; border-radius: 8px; font-size: 12px; color: #6B7280; text-align: center;">
            <p style="margin: 0;">Este é um e-mail automático do formulário de contato do site SoftVerse.</p>
          </div>
        </div>
      `,
    });

    return result;
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    throw error;
  }
}