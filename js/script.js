document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));

  const backToTopButton = document.querySelector(".back-to-top");

  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTopButton.classList.add("is-visible");
      } else {
        backToTopButton.classList.remove("is-visible");
      }
    });

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const form = document.getElementById("appointment-form");
  const feedback = document.getElementById("form-feedback");

  if (form && feedback) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const idade = Number(document.getElementById("idade").value.trim());
      const servicosSelecionados = [
        ...document.querySelectorAll('input[name="atendimento"]:checked')
      ].map((input) => input.value);
      const descricao = document.getElementById("descricao").value.trim();

      const errors = [];

      if (!nome) {
        errors.push("Nome é obrigatório.");
      }

      if (!document.getElementById("idade").value.trim()) {
        errors.push("Idade é obrigatória.");
      } else if (Number.isNaN(idade) || idade <= 0) {
        errors.push("Informe uma idade válida.");
      }

      if (servicosSelecionados.length === 0) {
        errors.push("Selecione pelo menos um tipo de atendimento.");
      }

      if (idade > 0 && idade < 18) {
        errors.push(
          "ATENDIMENTO SOMENTE PARA MAIORES DE 18 ANOS. Menores somente acompanhados dos pais e/ou responsável."
        );
      }

      if (errors.length > 0) {
        feedback.textContent = errors.join(" ");
        feedback.className = "form-feedback error";
        return;
      }

      const whatsappNumber = "55198972724";
      const mensagem = `Olá, gostaria de solicitar um atendimento.\n\nNome:\n${nome}\nIdade:\n${idade}\nAtendimento:\n${servicosSelecionados.join(", ")}\nDescrição:\n${descricao || "Não informado"}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;

      feedback.textContent = "Solicitação validada com sucesso! Encaminhando para o WhatsApp do responsável.";
      feedback.className = "form-feedback success";

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      form.reset();
    });
  }

  const playButtons = document.querySelectorAll(".play-button");
  playButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".video-card");
      const title = card?.querySelector("h3")?.textContent || "Vídeo";
      const message = `A reprodução do ${title} será adicionada posteriormente.\nUse um link do YouTube, TikTok ou vídeo próprio.`;
      alert(message);
    });
  });
});
