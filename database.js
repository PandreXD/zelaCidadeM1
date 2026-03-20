const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

const criarBanco = async () => {

    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    })

    await db.exec(`
        CREATE TABLE IF NOT EXISTS incidentes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            tipo_problema TEXT,             -- O que aconteceu (Buraco, Lixo, Luz)
            localizacao TEXT,               -- Onde aconteceu
            descricao TEXT,                 -- Detalhes extras
            prioridade TEXT,                -- Baixa, Média ou Alta
            nome_solicitante TEXT,          -- Quem avisou
            contato_solicitante TEXT,       -- Contato do solicitante
            data_registro TEXT,             -- Data que foi registrado o Problema
            hora_registro TEXT,             -- Horário que foi registrado o Problema
            status_resolucao TEXT DEFAULT 'Pendente', -- Se não avisarem o status, o banco define automaticamente como 'Pendente'
            imagem_problema TEXT            -- Imagem do problema
        )
        `)

    console.log('Banco de dados configurado: A tabela de registros urbanos está pronta!')


// VERIFICAÇÃO DE DUPLICIDADE
//                           SELECIONE A CONTAGEM DE TUDO(* e de o apelido de 'total', vindo DA tabela 'incidentes)
const checagem = await db.get(`SELECT COUNT(*) AS total FROM incidentes`)

    // fazer uma condicional (VERIFICAÇÃO-SE E SENÃO)
       if(checagem.total === 0){
        console.log('Inserir dados')
        await db.exec(`
            INSERT INTO incidentes (tipo_problema, localizacao, descricao, prioridade, nome_solicitante, contato_solicitante, data_registro, hora_registro, imagem_problema) VALUES 
            ('Iluminação', 'Rua das Flores', 'Poste queimado há dias', 'Média', 'Ana Clara', '12345678', '16-03-2026', '10:21', 'https://itaitinga.ce.gov.br/fotos/165/Img0_600x400.jpg'),

            ('vazamento de água', 'Rua das Camélias, 52', 'vazamento de água consistente pelo bueiro', 'Alta', 'Julia', '40023535', '16-03-2026', '10:00', 'https://imagens.ebc.com.br/5VbdNmptS8wly0VwAu9HMcS04RM=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2025/04/28/imagens_maria_julia_nascimento_1.jpeg?itok=sAo96JqF'),

            ('Árvore caída', 'Rua da VNW','Árvore caída bloqueando parcialmente a via','Alta','Fernanda Kaka','11965656565', '30-02-2026', '07:00', 'https://s3.diario.one/linus/images/c27bd001-a082-44f9-85d8-0fdfdb456a4f.webp'),

            ('Limpeza', 'Praça da Matriz, 456',  'Lixo acumulado',  'Média', 'Felipe Dylon', '2198200000', '16-03-2026', '10:22',  'https://s2-g1.glbimg.com/g6l58FrG-iMjLrilj8PCQhix9Gc=/0x0:1600x1066/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/b/1/pL0lXlRreslSm8OQDrzg/moradores-de-bairro-em-caucaia-reclamam-de-lixo-nas-ruas..jpeg'),

            ('Assalto na Rua 123','Rua 123, Bairro Vila da Penha, Próximo ao Merdaco Francisco, Rio de Janeiro', 'Fui assaltado por dois homens em uma moto. Levaram a carteira e a bolsa.', 'Alta', 'Joao Silva', 'joao.silva@email.com', '2026-06-01', '18:30', 'https://img.irroba.com.br/fit-in/639x639/filters:fill(fff):quality(80)/universo/catalog/lancamentos-2024/bolsa-carteira-couro-legitimo-bubble-preta-e-chocolate-2-1.jpg'),

             ('Vazamento de água', 'Rua das Flores, 45', 'Infraestrutura urbana', 'Média', 'João Batista', '425465431', '17-03-2026', '9:15', 'https://s2-g1.glbimg.com/vqegq0PwmIJTRfK5cd_-cNNRKpg=/0x0:1280x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/w/g/9uI0WxQPC2YCLSeWEkMA/vazamento-de-agua-foi-registrado-em-rua-do-batel-em-curitiba-na-manha-desta-segunda-feira-27-.jpg' ),

            ('Buraco na rua', 'Rua Dev', 'surgiu um grande buraco devido a muitas chuvas, oferecendo risco aos moradores da rua', 'Alta', 'Lúcia Alcântara', '(00) 995977005', '28/02/26', '11:00', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv9g_bnV3kLqBH_rX9tKrtDLTph_uTS0O4NA&s'),

            ('Lixo', 'Avenida Ministro Amaral', 'Acumulação de lixos frente a bueiro', 'Alta', 'Ana Liz', '40028923', '16-03-2026', '10:24', 'https://www.pmerechim.rs.gov.br/noticia/21425/prefeitura-alerta-sobre-descarte-irregular-de-lixo-em-bueiros-e-refora-importncia-da-conscientizao-da-populao'),

            ('Rua com buraco', 'Rua Cecilia, 23', 'buraco a meses impedindo a passagem de carros', 'Alta', 'Diego', '21999999999', '16-03-2026', '10:25', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6c9ZTHxmUHTz32PXrDMeuGI0Y8w-WP-ka4g&s'),
            
            ('Alagamento', 'Rua gifone, 325', 'Rua Alagada', 'Média', 'Carlos','71981315645','16-03-2026', '10:00', 'https://www.otempo.com.br/adobe/dynamicmedia/deliver/dm-aid--51c801d9-3137-49c9-9720-83fcc583e837/cidades-franco-1709440294.jpg?quality=90&preferwebp=true&width=1200')
            `)

            console.log('Dados inseridos dentri da tabela incidentes')

       }else{
        console.log(`Banco pronto com ${checagem.total}`)
       }


       //SELECT(Read) - Consultas
       console.log('-----Total de incidentes-----')
       const todosIncidentes = await db.all(`SELECT * FROM incidentes`)
       console.log(todosIncidentes)


       //Exemplo SELECT especifico: O que a Ana Clara reportou?
       console.log('------FILTRO: CHAMADOS DA ANA CLARA------')
       const chamadosAna = await db.all(`SELECT * FROM incidentes WHERE nome_solicitante = 'Ana Clara'`)
       console.log(chamadosAna)

       //UPDATE em massa: Mudar o status de tudo que for 'vazamento de agua' de uma vez

       await db.run(`
          UPDATE incidentes
          SET status_resolucao = 'Em Análise'
          WHERE tipo_problema = 'Vazamento de água'

        `)
         
        // Atualizar 
        await db.run(`
            UPDATE incidentes
            SET status_resolucao ='Resolvido'
            WHERE id = 3
            
            `)

            console.log('o problema do id 3 foi resolvido')


            //Delete condicional - Remover tudo
            await db.run(`DELETE FROM incidentes WHERE status_resolucao= 'Resolvido'`)
            console.log('Regestros de status Resolvido foram removidos')

            // SELECT FINAL
            console.log('------RELATÓRIO FINAL------')
            const resultadoFinal = await db.all(`SELECT * FROM incidentes`)
            console.log(resultadoFinal)

            return db; // A função 'criarBanco' agora entrega a "chave" do banco
 
}
// o module.exports cria uma 'ponte' que permite compartilhar função entre arquivos
//Neste caso ele exporta a função 'criarBanco'
module.exports = {criarBanco}