# Imperium Climatização - Frontend Web Application

## 1. Descrição do Projeto
Este repositório contém a aplicação frontend institucional da Imperium Climatização. O projeto foi desenvolvido com foco em alta performance, acessibilidade e conversão (CRO - Conversion Rate Optimization), servindo como interface principal para captação de leads e apresentação de serviços de engenharia térmica.

## 2. Stack Tecnológica
A arquitetura foi selecionada para garantir escalabilidade e rapidez no desenvolvimento:

- **Library Principal:** React.js (v18+)
- **Build Tool:** Vite
- **Estilização:** Tailwind CSS (Arquitetura Utilitária)
- **Ícones:** Lucide React
- **Versionamento:** Git (Gitflow Workflow)

## 3. Características Técnicas e UX
O projeto implementa padrões modernos de desenvolvimento web:

- **Backdrop Filtering:** Utilização de técnicas de "Glassmorphism" para garantir contraste de componentes sobre fundos variáveis.
- **Responsive Engine:** Layout adaptativo utilizando o sistema de grid e flexbox do Tailwind, otimizado para Viewports Mobile (360px a 480px) e Desktop (1024px+).
- **Dynamic Assets:** Carregamento otimizado de imagens e ícones para redução do LCP (Largest Contentful Paint).
- **Contact Integration:** Implementação de links dinâmicos parametrizados para integração direta com API de mensageria instantânea (WhatsApp).

## 4. Estrutura de Diretórios
```text
src/
├── assets/      # Recursos estáticos (imagens, logotipos)
├── components/  # Componentes reutilizáveis (Header, Services, Hero)
├── styles/      # Configurações globais de CSS e temas
└── App.jsx      # Componente raiz da aplicação

# Clonar o repositório
git clone [https://github.com/seu-usuario/imperium-climatizacao.git](https://github.com/seu-usuario/imperium-climatizacao.git)

# Acessar o diretório
cd imperium-climatizacao

# Instalar dependências
npm install