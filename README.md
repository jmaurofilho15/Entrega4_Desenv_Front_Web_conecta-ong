# Entrega4_Desenv_Front_Web_conecta-ong
Entrega da atividade 4 da disciplina desenvolvimento front end para web seguindo as diretrizes da atividade utilizando o Git e GitHub


# Projeto ConectaONG v1.0.0

Este é o repositório do projeto ConectaONG, uma plataforma web front-end desenvolvida como projeto final.

## 🚀 Tecnologias Utilizadas
* **HTML5:** Estrutura semântica e acessível.
* **CSS3:** Design System modular (Flexbox, Grid, Variáveis) e Responsivo (Mobile-First).
* **JavaScript (ES6+):** Manipulação de DOM, Templates, Validação de Formulários e Modo Escuro.

## ♿ Acessibilidade (WCAG 2.1 AA)
* Navegação completa por teclado (:focus-visible).
* Suporte a leitores de tela (atributos ARIA).
* Modo Escuro acessível.

## ⚙️ Otimização de Build
O projeto usa `npm` para otimização de produção:
* **`terser`** para minificar e agrupar JavaScript.
* **`postcss`** e **`cssnano`** para minificar CSS.

### Como Rodar (Modo de Desenvolvimento)
1.  Clone o repositório.
2.  (Recomendado) Edite os arquivos HTML para linkar de volta para `assets/` em vez de `dist/`.

### Como Construir (Build)
1.  Execute `npm install` para instalar as dependências.
2.  Execute `npm run build` para gerar os arquivos de produção na pasta `/dist`.
