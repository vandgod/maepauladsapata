document.addEventListener("DOMContentLoaded", () => { // Espera o HTML carregar antes de configurar os comportamentos.
  const navToggle = document.querySelector(".nav-toggle"); // Declara `navToggle` para guardar botao do menu.
  const mainNav = document.querySelector(".main-nav"); // Declara `mainNav` para guardar menu principal.

  if (navToggle && mainNav) { // Verifica a condicao antes de executar o bloco.
    navToggle.addEventListener("click", () => { // Registra a funcao que respondera ao evento indicado.
      const isOpen = mainNav.classList.toggle("is-open"); // Declara `isOpen` para guardar estado de abertura do menu.
      navToggle.setAttribute("aria-expanded", String(isOpen)); // Atualiza um atributo do elemento, inclusive seu estado acessivel.
    }); // Delimita ou encerra o bloco ou chamada anterior.

    mainNav.querySelectorAll("a").forEach((link) => { // Localiza no documento o elemento necessario.
      link.addEventListener("click", () => { // Registra a funcao que respondera ao evento indicado.
        mainNav.classList.remove("is-open"); // Remove a classe visual para desativar este estado.
        navToggle.setAttribute("aria-expanded", "false"); // Atualiza um atributo do elemento, inclusive seu estado acessivel.
      }); // Delimita ou encerra o bloco ou chamada anterior.
    }); // Delimita ou encerra o bloco ou chamada anterior.
  } // Delimita ou encerra o bloco ou chamada anterior.

  const revealItems = document.querySelectorAll(".reveal"); // Declara `revealItems` para guardar elementos com animacao de entrada.
  const revealObserver = new IntersectionObserver( // Declara `revealObserver` para guardar observador de visibilidade durante a rolagem.
    (entries, observer) => { // Inicia o bloco desta funcao ou condicao.
      entries.forEach((entry) => { // Inicia o bloco desta funcao ou condicao.
        if (entry.isIntersecting) { // Verifica a condicao antes de executar o bloco.
          entry.target.classList.add("is-visible"); // Ativa a classe visual correspondente a este estado.
          observer.unobserve(entry.target); // Para de observar o elemento apos a animacao.
        } // Delimita ou encerra o bloco ou chamada anterior.
      }); // Delimita ou encerra o bloco ou chamada anterior.
    }, // Continua a instrucao desta rotina.
    { threshold: 0.12 } // Continua a instrucao desta rotina.
  ); // Delimita ou encerra o bloco ou chamada anterior.

  revealItems.forEach((item) => revealObserver.observe(item)); // Registra o elemento para observacao durante a rolagem.

  const backToTopButton = document.querySelector(".back-to-top"); // Declara `backToTopButton` para guardar botao de retorno ao topo.

  if (backToTopButton) { // Verifica a condicao antes de executar o bloco.
    window.addEventListener("scroll", () => { // Registra a funcao que respondera ao evento indicado.
      if (window.scrollY > 400) { // Verifica a condicao antes de executar o bloco.
        backToTopButton.classList.add("is-visible"); // Ativa a classe visual correspondente a este estado.
      } else { // Executa o caminho alternativo da condicao.
        backToTopButton.classList.remove("is-visible"); // Remove a classe visual para desativar este estado.
      } // Delimita ou encerra o bloco ou chamada anterior.
    }); // Delimita ou encerra o bloco ou chamada anterior.

    backToTopButton.addEventListener("click", () => { // Registra a funcao que respondera ao evento indicado.
      window.scrollTo({ top: 0, behavior: "smooth" }); // Rola a pagina suavemente ate o topo.
    }); // Delimita ou encerra o bloco ou chamada anterior.
  } // Delimita ou encerra o bloco ou chamada anterior.

  const form = document.getElementById("appointment-form"); // Declara `form` para guardar formulario de atendimento.
  const feedback = document.getElementById("form-feedback"); // Declara `feedback` para guardar area de mensagens da validacao.

  if (form && feedback) { // Verifica a condicao antes de executar o bloco.
    form.addEventListener("submit", (event) => { // Registra a funcao que respondera ao evento indicado.
      event.preventDefault(); // Impede o envio padrao do formulario e a recarga da pagina.
 
      const nome = document.getElementById("nome").value.trim(); // Declara `nome` para guardar nome informado sem espacos extras.
      const idade = Number(document.getElementById("idade").value.trim()); // Declara `idade` para guardar idade informada convertida em numero.
      const servicosSelecionados = [ // Declara `servicosSelecionados` para guardar tipos de atendimento selecionados.
        ...document.querySelectorAll('input[name="atendimento"]:checked') // Localiza no documento o elemento necessario.
      ].map((input) => input.value); // Executa a instrucao indicada nesta linha.
      const descricao = document.getElementById("descricao").value.trim(); // Declara `descricao` para guardar descricao do atendimento.

      const errors = []; // Declara `errors` para guardar lista de erros de validacao.

      if (!nome) { // Verifica a condicao antes de executar o bloco.
        errors.push("Nome é obrigatório."); // Adiciona um erro a lista de validacao.
      } // Delimita ou encerra o bloco ou chamada anterior.

      if (!document.getElementById("idade").value.trim()) { // Verifica a condicao antes de executar o bloco.
        errors.push("Idade é obrigatória."); // Adiciona um erro a lista de validacao.
      } else if (Number.isNaN(idade) || idade <= 0) { // Testa uma alternativa se a validacao anterior falhou.
        errors.push("Informe uma idade válida."); // Adiciona um erro a lista de validacao.
      } // Delimita ou encerra o bloco ou chamada anterior.

      if (servicosSelecionados.length === 0) { // Verifica a condicao antes de executar o bloco.
        errors.push("Selecione pelo menos um tipo de atendimento."); // Adiciona um erro a lista de validacao.
      } // Delimita ou encerra o bloco ou chamada anterior.

      if (idade > 0 && idade < 18) { // Verifica a condicao antes de executar o bloco.
        errors.push( // Adiciona um erro a lista de validacao.
          "ATENDIMENTO SOMENTE PARA MAIORES DE 18 ANOS. Menores somente acompanhados dos pais e/ou responsável." // Continua a instrucao desta rotina.
        ); // Delimita ou encerra o bloco ou chamada anterior.
      } // Delimita ou encerra o bloco ou chamada anterior.

      if (errors.length > 0) { // Verifica a condicao antes de executar o bloco.
        feedback.textContent = errors.join(" "); // Apresenta o resultado ou os erros para a pessoa.
        feedback.className = "form-feedback error"; // Aplica o estilo de sucesso ou erro ao aviso.
        return; // Interrompe a rotina quando os dados sao invalidos.
      } // Delimita ou encerra o bloco ou chamada anterior.

      const whatsappNumber = "5551989746682"; // Substitua pelo número de WhatsApp desejado // Declara `whatsappNumber` para guardar numero que recebe a solicitacao.
      
      const atendimentosFormatados = servicosSelecionados
        .map((servico) => `🔹 _${servico}_`)
        .join("\n"); // Formata cada atendimento selecionado como um item da lista.
      const mensagem = `✨ *Nova solicitação de atendimento* ✨\n\nOlá! Gostaria de solicitar um atendimento:\n\n👤 *Nome:* _${nome}_\n🎂 *Idade:* _${idade} anos_\n🔮 *Atendimentos:*\n${atendimentosFormatados}\n📝 *Descrição:* _${descricao || "Não informado"}_`; // Declara `mensagem` para guardar texto com os dados do formulario.
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`; // Declara `whatsappUrl` para guardar link de WhatsApp com a mensagem.

      feedback.textContent = "Solicitação validada com sucesso! Encaminhando para o WhatsApp do responsável."; // Apresenta o resultado ou os erros para a pessoa.
      feedback.className = "form-feedback success"; // Aplica o estilo de sucesso ou erro ao aviso.

      window.open(whatsappUrl, "_blank", "noopener,noreferrer"); // Abre o link de contato em uma nova aba.
      form.reset(); // Limpa os campos depois de encaminhar a solicitacao.
    }); // Delimita ou encerra o bloco ou chamada anterior.
  } // Delimita ou encerra o bloco ou chamada anterior.

  const playButtons = document.querySelectorAll(".play-button"); // Declara `playButtons` para guardar botoes de reproducao dos videos.
  playButtons.forEach((button) => { // Inicia o bloco desta funcao ou condicao.
    button.addEventListener("click", () => { // Registra a funcao que respondera ao evento indicado.
      const card = button.closest(".video-card"); // Declara `card` para guardar cartao associado ao video.
      const title = card?.querySelector("h3")?.textContent || "Vídeo"; // Declara `title` para guardar titulo do video.
      const message = `A reprodução do ${title} será adicionada posteriormente.\nUse um link do YouTube, TikTok ou vídeo próprio.`; // Declara `message` para guardar aviso sobre a reproducao.
      alert(message); // Exibe uma mensagem informativa no navegador.
    }); // Delimita ou encerra o bloco ou chamada anterior.
  }); // Delimita ou encerra o bloco ou chamada anterior.
}); // Delimita ou encerra o bloco ou chamada anterior.
