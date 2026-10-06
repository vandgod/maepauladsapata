# Terreiro de Matriz Africana

## Objetivo

Landing page institucional e de apresentação de um terreiro de matriz africana, com foco em identidade visual espiritual, acolhimento, tradição e profissionalismo.

## Estrutura dos arquivos

- `index.html` — estrutura semântica da landing page
- `css/style.css` — identidade visual, responsividade, efeitos e layout
- `js/script.js` — menu mobile, animações, validação do formulário e WhatsApp
- `assets/images/` — pasta para imagens da casa, dirigente e festividades
- `assets/videos/` — pasta para vídeos e thumbnails
- `assets/icons/` — pasta para ícones ou materiais visuais

## Onde alterar textos

- Nome da casa: procurar por `[INSERIR NOME DO TERREIRO]` no arquivo `index.html`
- Descrição geral: procurar por `[INSERIR DESCRIÇÃO CURTA SOBRE A CASA]`
- Texto sobre religiões de matriz africana: procurar por `[INSERIR DESCRIÇÃO SOBRE AS RELIGIÕES DE MATRIZ AFRICANA]`
- Nome e descrição da dirigente: procurar por `Mãe Paula D’ Sapatá` e os textos entre colchetes
- Datas e festividades: procurar por `[DATA]`, `[NOME DA FESTIVIDADE]` e `[DESCRIÇÃO]`

## Onde inserir redes sociais

No arquivo `index.html`, procure pelos links:

- `[INSERIR LINK DO FACEBOOK]`
- `[INSERIR LINK DO INSTAGRAM]`
- `[INSERIR LINK DO TIKTOK]`

## Onde inserir endereço

No arquivo `index.html`, procure por:

- `[INSERIR ENDEREÇO DA CASA]`

A URL do Google Maps e o iframe também já foram preparados para receber esse endereço.

## Onde alterar o WhatsApp

No arquivo `js/script.js`, o número está configurado em:

- `const whatsappNumber = "55198972724";`

Esse valor não deve ser alterado sem autorização.

## Onde colocar imagens

Coloque as imagens na pasta `assets/images/` e substitua os placeholders existentes no HTML.

## Onde inserir vídeos

Coloque os vídeos e thumbnails na pasta `assets/videos/` e altere os blocos de vídeo conforme a estrutura atual da seção `VÍDEOS`.

## Como executar

1. Abra o arquivo `index.html` diretamente no navegador, ou
2. Execute um servidor local na pasta do projeto:

```bash
cd /home/vand/Documentos/PaulaDSapata
python3 -m http.server 8000
```

Depois acesse:

`http://localhost:8000`

## Observações

- A estrutura foi pensada com placeholders e instruções visíveis para facilitar futuras substituições.
- A página foi desenvolvida com foco em responsividade, acessibilidade, animações sutis e visual premium.
- O formulário de atendimento valida nome, idade, tipo de atendimento e encaminha o usuário para o WhatsApp com os dados preenchidos.
