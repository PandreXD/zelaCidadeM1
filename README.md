# 🏙️API ZelaCidade

## 📌 Sobre o Projeto

A API **ZelaCidade** é uma API para registrar e gerenciar problemas urbanos como:

- Buraco
- Vazamentos
- Lixo
- Iluminação

Ela permite criar, visualizar, atualizar e deletar ocorrências.

## 🛠️ Tecnologias

- Node.Js
- Postman
- Express
- SqLite
- SqLite3

---

## 📦 Instalação


```bash
npm install
```

---

## ▶️ Como Executar

```Bash
npm run dev
```

Servidor disponivel em: http://localhost:3000

---

## 🗄️ Banco de Dados

o banco de dados é criado automaticamente ao iniciar o projeto.

```
database.db
```

## 🧾 Tabela

| Campo               | Descrição |
|---------------------|--------------------------|
|id                   | identificador único      |
|tipo_problema        | Tipo do problema         |
|localizacao          | Onde ocorreu             |
|descricao            | Detalhes do incidentes   |
|prioridade           | Baixa, Média ou Alta     |
|nome_solicitante     | Quem registrou           |
| contato_solicitante | Contato                  |
| data_registro       | Data do registro         |
| hora_registro       | Hora do registro         |
| status_resolucao    | Status (padrão: Pendente)|
|imagem_problema      | URL da imagem            |

## 🔗 Endpoints

### Rota Inicial

```http
Get /
```
Retorna uma páginaa HTML simples com informação da API

---

### Rota para listar todos os Incidentes

```http
GET/incidentes
```

Retorna todos os registros do banco de dados

### Rota para buscar um incidente por ID

```http
GET/incidentes/:id
```
Exemplo:

```
/incidentes/1
```

### Rota para criar um novo incidente

```http
POST/incidentes
```

#### Body (JSON):

```json
{
    "tipo_problema": "Iluminação pública",
    "localizacao": "Rua das Flores",
    "descricao": "Poste de iluminação pública apagado há vários dias.",
    "prioridade": "Média",
    "nome_solicitante": "Ana Clara",
    "contato_solicitante": "(21) 90000-0001",
    "data_registro": "2026-03-16",
    "hora_registro": "10:21",
    "imagem_problema": "https://itaitinga.ce.gov.br/fotos/165/Img0_600x400.jpg"
}
```

### Rota para atualizar um incidente

```
PUT/incidentes/:id
```

### Body (JSON):
```json
{
    "prioridade": "Baixa",
    "descricao": "os itens foram resgatados",
    "status_resolucao": "Resolvido"
}
```

### Rota para deletar um incidente

```http
DELETE /incidentes/:id
```

## 🔐 Segurança

A API utiliza `?` nas queries SQL:

```sql
WHERE id = ?
```
isso evita o sql Injection

---

## 📚 Conceitos

- CRUD (Creaste, Read, Update e Delete)
- Rotas com Express
- Métodos/Verbos HTTP (GET, POST, PUT, DELETE)
- Banco de dados SQLite
- SQL básico
- Uso de req.params e req.body

## 🎯 Observações

- o banco é criado automaticamente 
- Dados inicias são inseridos apenas se estiver vazio
- A API pode ser testada com o Postman

---

## 👩‍💻 Projeto Educacional

Este projeto foi desenvolvido para fins de aprendizado em back-end com Node.js