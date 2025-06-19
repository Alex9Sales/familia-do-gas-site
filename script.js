// Mensagem de boas-vindas
window.onload = function () {
    alert("Bem-vindo ao site da Família do Gás! Faça seu pedido com rapidez e segurança.");
  };
  
  // Verifica horário de atendimento
  const agora = new Date();
  const hora = agora.getHours();
  const dia = agora.getDay();
  
  const mensagem = document.createElement('p');
  mensagem.style.color = '#d32f2f';
  mensagem.style.fontWeight = 'bold';
  
  const dentroDoHorario = (
    (dia >= 1 && dia <= 6 && hora >= 7 && hora < 21) ||
    (dia === 0 && hora >= 8 && hora < 19)
  );
  
  if (!dentroDoHorario) {
    mensagem.innerText = "🚫 Estamos fora do horário de atendimento!";
    document.body.appendChild(mensagem);
  }
  
  // Contador de visitas
  let visitas = localStorage.getItem("visitas") || 0;
  visitas++;
  localStorage.setItem("visitas", visitas);
  console.log(`Você visitou esta página ${visitas} vezes`);