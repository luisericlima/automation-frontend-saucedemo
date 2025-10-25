## 🧪 Playwright Frontend Tests – SauceDemo

Automação de testes frontend usando **Playwright** para o site **SauceDemo**.  

---

## 🚀 Tecnologias utilizadas
- [Node.js](https://nodejs.org/)
- [Playwright Test](https://playwright.dev/docs/intro)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [SauceDemo](https://www.saucedemo.com/)

---

## 📂 Estrutura do projeto

```
├── fixtures/
│ ├── products.js # Produtos de teste
│ └── users.js # Usuários de teste
│
├── pages/
│ ├── LoginPage.js # Padrão Page Object para login
│ ├── InventoryPage.js # Page Object de inventário
│ ├── CartPage.js # Page Object do carrinho
│ └── CheckoutPage.js # Page Object do checkout
│
├── tests/
│ ├── login.spec.js # Testes de login
│ ├── inventory.spec.js # Testes de inventário
│ ├── cart.spec.js # Testes de carrinho
│ └── checkout.spec.js # Testes de checkout
│
├── playwright.config.js # Configuração do Playwright
├── package.json
├── .env # Variáveis de ambiente (não versionado)
└── .gitignore
```
---

## ⚙️ Configuração inicial

1️⃣ Clonar o repositório:
```
git clone https://github.com/seuusuario/automation-web-saucedemo.git
cd automation-web-saucedemo
```

2️⃣ Instalar dependências:
```
npm install
```

3️⃣ Criar o arquivo `.env`:

```
BASE_URL=https://www.saucedemo.com
STANDARD_USER=standard_user
STANDARD_PASS=secret_sauce
LOCKED_USER=locked_out_user
LOCKED_PASS=secret_sauce
```
---

## 🧩 Executando os testes


Rodar todos os testes:
```
npx playwright test
```

Rodar um teste específico:

```
npx playwright test tests/login.spec.js
```

Exibir o relatório HTML:
```
npx playwright show-report
```


