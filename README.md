# Bandage - Página Web Responsiva

Uma solução moderna e responsiva para apresentação de produtos, marcas e conteúdos institucionais, desenvolvida como parte do desafio Compass UOL - Trilha de Front-end. O projeto utiliza HTML, CSS e JavaScript, com foco em boas práticas, usabilidade e experiência do usuário.

## Índice
- [Visão Geral](#visão-geral)
- [Tecnologias e Ferramentas](#tecnologias-e-ferramentas)
- [Estrutura e Arquitetura](#estrutura-e-arquitetura)
- [Instalação e Execução](#instalação-e-execução)
- [Documentação da API](#documentação-da-api)
- [Boas Práticas](#boas-práticas)
- [Licença](#licença)

---

## Visão Geral
O sistema consiste em uma página web institucional e comercial, com seções para apresentação de produtos, marcas parceiras, blog, informações de contato e redes sociais. O layout é totalmente responsivo, adaptando-se a diferentes dispositivos e tamanhos de tela. A navegação é intuitiva e os elementos interativos proporcionam uma experiência agradável ao usuário.

## Tecnologias e Ferramentas
- **HTML5**: Estrutura semântica da página
- **CSS3**: Estilização, responsividade e animações
- **JavaScript**: Interatividade e validação de formulários
- **Google Fonts**: Tipografia personalizada
- **VS Code**: Ambiente de desenvolvimento
- **Git**: Controle de versão

## Estrutura e Arquitetura
A arquitetura do projeto é simples e organizada, facilitando manutenção e escalabilidade. Abaixo, a árvore de pastas comentada:

```bash
homepage-uol/
├── index.html                # Página principal
├── styles.css                # Estilos globais
├── javascript.js             # Scripts de interatividade
├── README.md                 # Documentação do projeto
├── img/                      # Imagens e ícones
│   ├── icons/                # Ícones utilizados na interface
│   │   └── ...
│   └── images/               # Imagens de produtos, pessoas, etc
│       └── ...
```

## Instalação e Execução

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Edge, etc)
- [Git](https://git-scm.com/) instalado (opcional, para clonar o repositório)

### Passos para rodar localmente
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/PatrickMCardoso/homepage-uol.git
   cd homepage-uol
   ```
2. **Abra o arquivo `index.html` em seu navegador:**
   - Recomenda-se utilizar a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) do VS Code para rodar o projeto localmente com atualização automática:
     - Instale a extensão Live Server
     - Clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server"

### Configuração de variáveis de ambiente
Este projeto não utiliza variáveis de ambiente ou backend. Todo o código é executado no lado do cliente.

### Seed/Migrations
Não aplicável. O projeto não utiliza banco de dados.

## Documentação da API
Este projeto não possui API própria. Toda a lógica está implementada no front-end (HTML, CSS, JS).

## Boas Práticas
- **Semântica HTML:** Uso correto de tags para acessibilidade e SEO
- **Responsividade:** Layout adaptável para diferentes dispositivos
- **Organização de arquivos:** Separação clara entre estilos, scripts e imagens
- **Validação de formulários:** JavaScript para garantir dados corretos
- **Controle de versão:** Utilização de Git para rastreamento de mudanças
- **Comentários no código:** Explicações em trechos relevantes para facilitar manutenção

## Licença

Este projeto está licenciado sob a MIT. Sinta-se livre para utilizar, modificar e distribuir conforme as condições da licença.

