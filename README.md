<div align="center">

# 🎯 JobTrack System

**Sistema moderno de gerenciamento de candidaturas de emprego**

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.16-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[Características](#-características) • [Tecnologias](#-tecnologias) • [Instalação](#-instalação) • [Uso](#-uso) • [Estrutura](#-estrutura-do-projeto)

</div>

---

## 📋 Sobre o Projeto

O **JobTrack System** é uma aplicação web moderna e intuitiva desenvolvida para gerenciar candidaturas de emprego de forma eficiente. Com uma interface elegante e responsiva, o sistema permite aos usuários acompanhar todas as suas aplicações em diferentes fases do processo seletivo, desde a candidatura inicial até a contratação.

### 🎨 Design Moderno
- Interface clean e profissional com gradientes suaves
- Animações fluidas e transições suaves
- Badges de status coloridos para fácil visualização
- Experiência responsiva e acessível
- Feedback visual em todas as interações

---

## ✨ Características

### 📊 Gerenciamento de Candidaturas
- ➕ **Adicionar** novas candidaturas com título da vaga, empresa e status
- 👁️ **Visualizar** todas as candidaturas em cards elegantes
- 🗑️ **Remover** candidaturas indesejadas
- 🔄 **Atualização** automática da lista após cada operação

### 🏷️ Status de Candidatura
O sistema suporta 8 estágios diferentes do processo seletivo:

| Status | Descrição | Cor do Badge |
|--------|-----------|--------------|
| **PENDENTE** | Candidatura enviada | 🟡 Amarelo |
| **TRIAGEM** | Em análise de currículo | 🔵 Azul |
| **TESTE** | Testes técnicos | 🟣 Roxo |
| **ENTREVISTA** | Processo de entrevista | 🟦 Índigo |
| **AGUARDANDO_RETORNO** | Aguardando resposta | 🟠 Laranja |
| **OFERTA** | Oferta recebida | 🟢 Verde |
| **RECUSADA** | Candidatura recusada | 🔴 Vermelho |
| **CONTRATADO** | Posição contratada | 🟩 Verde esmeralda |

### 🎭 Interface e UX
- ✨ **Animações suaves** em todos os elementos
- 🎨 **Gradientes modernos** (índigo, roxo, rosa)
- 🔍 **Estados vazios** informativos
- 📱 **Design responsivo** para todos os dispositivos
- ⚡ **Feedback imediato** em todas as ações
- 🎯 **Contador visual** de candidaturas

---

## 🛠️ Tecnologias

### Core
- **[React 19.1.1](https://reactjs.org/)** - Biblioteca JavaScript para construção de interfaces
- **[TypeScript 5.9.3](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Vite 7.1.7](https://vitejs.dev/)** - Build tool e dev server ultrarrápido

### Estilização
- **[Tailwind CSS 4.1.16](https://tailwindcss.com/)** - Framework CSS utility-first
- **[@tailwindcss/vite](https://tailwindcss.com/)** - Plugin oficial do Tailwind para Vite

### Componentes
- **[React Select 5.10.2](https://react-select.com/)** - Dropdown customizável para seleção de status
- Custom components com composição React

### Ferramentas de Desenvolvimento
- **[ESLint](https://eslint.org/)** - Linter para qualidade de código
- **[TypeScript ESLint](https://typescript-eslint.io/)** - Regras de linting para TypeScript

---

## 🚀 Instalação

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn** ou **pnpm**
- Backend rodando em `http://localhost:8080`

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/jobtrack-frontend.git
cd jobtrack-frontend
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Configure o backend**
Certifique-se de que o backend está rodando e acessível em:
```
http://localhost:8080
```

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

5. **Acesse a aplicação**
Abra seu navegador em: `http://localhost:5173` (ou a porta que o Vite indicar)

---

## 💡 Uso

### Adicionando uma Candidatura

1. Preencha o campo **"Título da Vaga"** com o nome da posição
2. Preencha o campo **"Nome da Empresa"** com a empresa
3. Selecione o **"Status da Candidatura"** no dropdown
4. Clique em **"Adicionar Candidatura"**

### Visualizando Candidaturas

Todas as suas candidaturas aparecem em cards organizados com:
- Título da vaga em destaque
- Nome da empresa
- Badge colorido com o status atual

### Gerenciando Candidaturas

- **Remover**: Clique no ícone de lixeira no card da candidatura
- A ação será confirmada e a candidatura será removida da lista

### Estados da Aplicação

- **Lista vazia**: Tela informativa incentiva a adicionar a primeira candidatura
- **Com candidaturas**: Lista completa com todas as candidaturas ativas
- **Contador**: Badge mostrando o número total de candidaturas

---

## 📁 Estrutura do Projeto

```
jobtrack-frontend/
├── public/                 # Arquivos públicos estáticos
│   └── vite.svg
├── src/                    # Código fonte
│   ├── components/         # Componentes React
│   │   └── CandidaturaItem.tsx  # Card de candidatura
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Entry point da aplicação
│   └── index.css          # Estilos globais e customizações
├── dist/                   # Build de produção
├── index.html             # HTML principal
├── package.json           # Dependências e scripts
├── tsconfig.json          # Configuração TypeScript
├── vite.config.ts         # Configuração Vite
└── README.md              # Este arquivo
```

### Componentes

#### `App.tsx`
Componente principal que contém:
- Estado global das candidaturas
- Lógica de comunicação com API
- Formulário de adição
- Lista de candidaturas
- Gerenciamento de status

#### `CandidaturaItem.tsx`
Componente reutilizável que renderiza:
- Card com informações da candidatura
- Badge de status colorido
- Botão de exclusão
- Animações e transições

---

## 🔌 Integração com API

A aplicação se comunica com um backend RESTful através dos seguintes endpoints:

### Endpoints Utilizados

#### `GET /api/candidaturas`
Busca todas as candidaturas cadastradas.
- **Método**: GET
- **Resposta**: Array de objetos `ICandidatura`

#### `POST /api/candidaturas`
Cria uma nova candidatura.
- **Método**: POST
- **Headers**: `Content-Type: application/json`
- **Body**:
```json
{
  "tituloVaga": "Desenvolvedor React",
  "empresa": "Tech Corp",
  "statusCandidatura": "TRIAGEM"
}
```

#### `DELETE /api/candidaturas/:id`
Remove uma candidatura pelo ID.
- **Método**: DELETE
- **Parâmetro**: ID da candidatura

### Interface TypeScript

```typescript
interface ICandidatura {
  id: number;
  tituloVaga: string;
  empresa: string;
  statusCandidatura: string;
}
```

---

## 🎨 Customizações do Tailwind

### Cores
- **Primary**: Índigo (500-600)
- **Secondary**: Roxo (500-600)
- **Gradients**: Índigo → Roxo → Rosa

### Animações
- **Fade-in**: Elementos aparecem com fade e slide
- **Hover**: Escala e sombras nos cards
- **Transitions**: 200-300ms em todas as interações

### React Select
Estilos customizados para o componente de seleção:
- Bordas arredondadas (12px)
- Estados de hover e focus
- Menu dropdown estilizado
- Cores do tema aplicadas

---

## 🧑‍💻 Desenvolvimento

### Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview da build de produção
npm run preview

# Executar linter
npm run lint
```

### Estrutura de Componentes

Os componentes utilizam:
- **TypeScript** para type safety
- **Hooks do React** (useState, useEffect)
- **Event handlers** tipados
- **Composição** de componentes

### Boas Práticas

- ✅ TypeScript em todos os arquivos
- ✅ Componentes funcionais com hooks
- ✅ Props tipadas com interfaces
- ✅ Código limpo e manutenível
- ✅ Animações e transições suaves
- ✅ Acessibilidade básica

---

## 📱 Responsividade

A aplicação é totalmente responsiva:
- **Desktop**: Layout completo com espaçamento otimizado
- **Tablet**: Adaptação automática do grid
- **Mobile**: Cards empilhados verticais

---

## 🎯 Roadmap e Melhorias Futuras

### Funcionalidades Planejadas
- [ ] Edição de candidaturas existentes
- [ ] Filtros por status
- [ ] Busca por empresa ou vaga
- [ ] Ordenação de lista
- [ ] Estatísticas e dashboard
- [ ] Exportação para CSV/PDF
- [ ] Notas e observações
- [ ] Adicionar datas (candidatura, entrevista, etc)
- [ ] Dark mode

### Melhorias Técnicas
- [ ] Testes unitários (Vitest)
- [ ] Testes E2E (Playwright)
- [ ] Internacionalização (i18n)
- [ ] PWA Support
- [ ] Otimizações de performance

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um **Fork** do projeto
2. Criar uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. Fazer **commit** das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Fazer **push** para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um **Pull Request**

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👨‍💼 Autor

Desenvolvido com ❤️ para facilitar o gerenciamento de candidaturas de emprego.

---

## 🙏 Agradecimentos

- [React](https://reactjs.org/) pela incrível biblioteca
- [Tailwind CSS](https://tailwindcss.com/) pelo framework de estilos
- [Vite](https://vitejs.dev/) pela performance excepcional
- [TypeScript](https://www.typescriptlang.org/) pela segurança de tipos

---

<div align="center">

**⭐ Se este projeto foi útil, considere dar uma estrela!**

Made with ❤️ and TypeScript

</div>
