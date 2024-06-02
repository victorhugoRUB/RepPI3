import express from 'express';
import path from 'path';

const host = 'localhost';
const port = 3003;
const app = express();

let listaCli = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));

function cadastrarCliente(req, res){
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const email = req.body.email;
    const estado = req.body.estado;
    const cidade = req.body.cidade;
    const endereco = req.body.endereco;
    const numero = req.body.numero;
    const cep = req.body.cep;
    const telefone = req.body.telefone;
    if(nome && sobrenome && email && estado && cidade && endereco && numero && cep && telefone){
        listaCli.push({
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            estado: estado,
            cidade: cidade,
            endereco: endereco,
            numero: numero,
            cep: cep,
            telefone: telefone
        });
        res.redirect('/listarCli');
    }else{
        res.write(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
            <title>Cadastro de Cliente</title>
        </head>
        <body>
            <div class="container m-5">
                <legend>Cadastro de Cliente</legend>
                <form method="post" action="/cadastrarCli" class="row g-3 needs-validation" novalidate>
                    <div class="col-md-4">
                        <label for="nome" class="form-label">Nome</label>
                        <input type="text" class="form-control" name="nome" id="nome" value="${nome}" required>`);
        if(!nome){
            res.write(`
                <div class="alert alert-danger" role="alert">
                    Por favor, insira um nome válido.
                </div>
            `);
        }
        res.write(`
                    </div>
                    <div class="col-md-4">
                        <label for="sobrenome" class="form-label">Sobrenome</label>
                        <input type="text" class="form-control" id="sobrenome" name="sobrenome" value="${sobrenome}" required>
        `)
        if(!sobrenome){
            res.write(`
                        <div class="alert alert-danger" role="alert">
                            Por favor, insira um sobrenome válido.
                        </div>
            `);
        }
        res.write(`
                    </div>
                    <div class="col-12">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" name="email" value="${email}" required>
        `)
        if(!email){
            res.write(`
                        <div class="alert alert-danger" role="alert">
                            Por favor, insira um email válido.
                        </div>
            `);
        }
        res.write(`
                    </div>
                    <div class="col-md-6">
                    <label for="estado" class="form-label">Estado</label>
                    <select class="form-select" id="estado" name="estado" required>
                        <option selected disabled value="">Escolha...</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
        `)
        if(!estado){
            res.write(`
                        <div class="alert alert-danger" role="alert">
                            Por favor, insira um estado válido.
                        </div>
            `);
        }
        res.write(`
                    </div>
                    <div class="col-md-6">
                        <label for="cidade" class="form-label">Cidade</label>
                        <input type="text" class="form-control" id="cidade" name="cidade" value="${cidade}" required>
        `)
        if(!cidade){
            res.write(`
                        <div class="alert alert-danger" role="alert">
                            Por favor, insira uma cidade válida.
                        </div>
            `);
        }
        res.write(`
                    </div>
                    <div class="col-12">
                        <label for="endereco" class="form-label">Endereço</label>
                        <input type="text" class="form-control" id="endereco" name="endereco" value="${endereco}" required>
        `)
        if(!endereco){
            res.write(`
                        <div class="alert alert-danger" role="alert">
                            Por favor, insira um endereço válido.
                        </div>
            `);
        }
        res.write(`
                    </div>
                    <div class="col-md-6">
                        <label for="numero" class="form-label">Número</label>
                        <input type="text" class="form-control" id="numero" name="numero" value="${numero}" required>
        `)
        if(!numero){
            res.write(`
                        <div class="alert alert-danger" role="alert">
                            Por favor, insira um número válido.
                        </div>
            `);
        }
        res.write(`
                    </div>
                    <div class="col-md-6">
                        <label for="cep" class="form-label">CEP</label>
                        <input type="text" class="form-control" id="cep" name="cep" value="${cep}" required>
        `)
        if(!cep){
            res.write(`
                        <div class="alert alert-danger" role="alert">
                            Por favor, insira um CEP válido.
                        </div>
            `);
        }
        res.write(`
                    </div>
                    <div class="col-12">
                        <label for="telefone" class="form-label">Telefone</label>
                        <input type="text" class="form-control" id="telefone" name="telefone" value="${telefone}" required>
        `)
        if(!telefone){
            res.write(`
                        <div class="alert alert-danger" role="alert">
                            Por favor, insira um telefone válido.
                        </div>
            `);
        }
        res.write(`
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Cadastrar</button>
                        <a href="/" class="btn btn-secondary">Voltar</a>
                    </div>
                </form>
            </div>.
        </body>
        </html>
        `);
        res.end();
    }
}

app.post('/cadastrarCli', cadastrarCliente )

app.get('/listarCli', (req, res) => {
    res.write(`
    <html>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <title>Lista de Cliente</title>
    </head>
    <body>
        <h1>Lista de Cliente</h1>
        <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Sobrenome</th>
                <th scope="col">Email</th>
                <th scope="col">Estado</th>
                <th scope="col">Cidade</th>
                <th scope="col">Endereço</th>
                <th scope="col">Numero</th>
                <th scope="col">CEP</th>
                <th scope="col">Telefone</th>
            </tr>
        </thead>
        <tbody>
            ${listaCli.map((item, index) => {
                return `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.nome}</td>
                    <td>${item.sobrenome}</td>
                    <td>${item.email}</td>
                    <td>${item.estado}</td>
                    <td>${item.cidade}</td>
                    <td>${item.endereco}</td>
                    <td>${item.numero}</td>
                    <td>${item.cep}</td>
                    <td>${item.telefone}</td>
                </tr>
                `
            })}
        </tbody>
        </table>
        <a href="/index.html">Voltar</a>
        <a href="./cadastroCli.html">Cadastrar</a>
    </body>
    </html>
    `)
    res.end()
})

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});