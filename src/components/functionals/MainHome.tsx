import {useEffect, useState} from "react";
import Modal  from "react-modal";
import { MainHome as MainHomeStyled } from "../styled/MainHome";
import { ModalContainer } from "../styled/ModalStyled";
import { v4 as generateUUID } from "uuid";

//customição style Modal (reac-modal)
const customModalStyle = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        border: 'none'
    }
};

interface Livro {
    id: string,
    titulo: string,
    autor: string,
    anoPublicacao: string,
    dataCadastro: string,
    genero: string,
    descricao: string,
}


export function MainHome() {
    const [livros, setLivros] = useState<Livro[]>([]);
    const [titulo, setTitulo] = useState<string>("");
    const [autor, setAutor] = useState<string>("");
    const [anoPublicacao, setAnoPublicacao] = useState<string>("");
    const [dataCadastro, setDataCadastro] = useState<string>("");
    const [genero, setGenero] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");

    const [EditarLivro, setEditarLivro] = useState<Livro | null>(null);
    const [modalEditarAberto, setModalEditarAberto] = useState(false);
    
    const [modalDetalhesAberto, setModalDetalhesAberto] = useState(false);


    //Use effect para capturar a data atual no formulario
    useEffect(() => {
        const dataAtual = new Date();
        const dataFormatada = `${dataAtual.getFullYear()}-${String(dataAtual.getMonth() + 1).padStart(2, '0')}-${String(dataAtual.getDate()).padStart(2, '0')}`;

        setDataCadastro(dataFormatada)
    }, []);

    //Modal editar
    function abrirModalEditar(livro: Livro) {
        
        setModalEditarAberto(true);
        setEditarLivro(livro);

        setTitulo(livro.titulo);
        setAutor(livro.autor);
        setAnoPublicacao(livro.anoPublicacao);
        setGenero(livro.genero);
        setDescricao(livro.descricao);
    }

    function fecharModalEditar() {
        setEditarLivro(null);
        setModalEditarAberto(false);

        setTitulo("");
        setAutor("");
        setAnoPublicacao("");
        setGenero("");
        setDescricao("");
    }

    function abrirModalDetalhes(livro: Livro) {
        setModalDetalhesAberto(true);

        setTitulo(livro.titulo);
        setAutor(livro.autor);
        setAnoPublicacao(livro.anoPublicacao);
        setGenero(livro.genero);
        setDescricao(livro.descricao);
    }

    function fecharModalDetalhes() {
        setModalDetalhesAberto(false);
        setTitulo("");
        setAutor("");
        setAnoPublicacao("");
        setGenero("");
        setDescricao("");
    }

    function salvarEdicao() {
        if (!EditarLivro) return;

        const atualizarLivro = livros.map(livro => {
            if (livro.id === EditarLivro.id) {
                return {
                    ...livro,
                    titulo,
                    autor,
                    anoPublicacao,
                    genero,
                    descricao
                };
            }
            return livro;
        });

        setLivros(atualizarLivro);
        fecharModalEditar();
        alert("Livro editado com sucesso!");
    }

    function cadastrar(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        
        const anoAtual = new Date().getFullYear();

        if (parseInt(anoPublicacao) > anoAtual) {
            alert(`O ano de publicação não pode ser ${anoPublicacao} pois isso seria no futuro! Você é do futuro!?`);
            return;
        }

        const novoLivro: Livro = { 
            id: generateUUID(), 
            titulo, 
            autor,
            anoPublicacao,
            dataCadastro,
            genero,
            descricao
        }

        setLivros((livrosExistentes) => [novoLivro, ...livrosExistentes])
        
        setTitulo("");
        setAutor("");
        setAnoPublicacao("");
        setGenero("");
        setDescricao("");
    }

    function excluirLivro(id: string) {
        const confirmarExclusao = confirm("Tem certeza que deseja excluir este livro?");
        
        if (confirmarExclusao) {
            const livroFiltrado = livros.filter(livro => livro.id !== id);

            setLivros(livroFiltrado);
            alert("Livro excluído com sucesso!");
        } else {
            alert("Procedimento cancelado pelo usuário")
        }
    }

    
    return (
        <MainHomeStyled>
            <div className="column">
                <h1>Adicionar Livro</h1>
                <div className="add-livros">
                    <form onSubmit={cadastrar}>
                        <label>Titulo</label> <br />
                        <input type="text" name="titulo" value={titulo} onChange={(event) => setTitulo(event.target.value)} required /> <br />

                        <label>Autor</label> <br />
                        <input type="text" name="autor" value={autor} onChange={(event) => setAutor(event.target.value)} required /> <br />

                        <label>Ano de Publicação</label> <br />
                        <input type="tel" name="anoPublicacao" value={anoPublicacao} onChange={(event) => setAnoPublicacao(event.target.value)} required /> <br />

                        <label>Data de Cadastro</label> <br />
                        <input type="text" name="dataCadastro" value={dataCadastro} onChange={(event) => setDataCadastro(event.target.value)} disabled required /> <br />

                        <label>Gênero</label> <br />
                        <input type="text" name="genero" value={genero} onChange={(event) => setGenero(event.target.value)} required /> <br />

                        <label>Descrição</label> <br />
                        <textarea name="descricao" value={descricao} onChange={(event) => setDescricao(event.target.value)} cols={30} rows={10} required></textarea>

                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>

            <div className="column">
                <h1>Seus Livros</h1>
                <div className="lista-livros">
                    <ul>
                        {livros.map(livro => (
                            <li key={livro.id}>
                                <p><b>Titulo:</b> {livro.titulo}</p>
                                <p><b>Autor:</b> {livro.autor}</p>
                                <p><b>Ano de Publicação:</b> {livro.anoPublicacao}</p>
                                <button onClick={() => abrirModalDetalhes(livro)}>Detalhes</button>
                                <button onClick={() => abrirModalEditar(livro)}>Editar</button>
                                <button onClick={() => excluirLivro(livro.id)}>Excluir</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <Modal isOpen={modalEditarAberto} onRequestClose={fecharModalEditar} style={customModalStyle} contentLabel="Editar Livro">
                <ModalContainer>
                    <h2>Editar Seu Livro?</h2>
                    <form onSubmit={salvarEdicao}>
                        <label>Titulo</label> <br />
                        <input type="text" name="titulo" value={titulo} onChange={(event) => setTitulo(event.target.value)} required /> <br />

                        <label>Autor</label> <br />
                        <input type="text" name="autor" value={autor} onChange={(event) => setAutor(event.target.value)} required /> <br />

                        <label>Ano de Publicação</label> <br />
                        <input type="text" name="anoPublicacao" value={anoPublicacao} onChange={(event) => setAnoPublicacao(event.target.value)} required /> <br />

                        <label>Data de Cadastro</label> <br />
                        <input type="text" name="dataCadastro" value={dataCadastro}  disabled  /> <br />
                        
                        <label>Gênero</label> <br />
                        <input type="text" name="genero" value={genero} onChange={(event) => setGenero(event.target.value)} required /> <br />

                        <label>Descrição</label> <br />
                        <textarea name="descricao" value={descricao} onChange={(event) => setDescricao(event.target.value)} cols={30} rows={10} required></textarea>

                        <button type="submit">Salvar</button>
                        <button type="button" onClick={fecharModalEditar}>Cancelar</button>
                    </form>
                </ModalContainer>
            </Modal>

            <Modal isOpen={modalDetalhesAberto} onRequestClose={fecharModalDetalhes} style={customModalStyle} contentLabel="Detalhes">
                <ModalContainer>
                    <h2>Detalhes do livro - {titulo}</h2>
                        <p><b>Autor:</b> {autor} </p>
                        <p><b>Ano de Publicação:</b> {anoPublicacao}</p>
                        <p><b>Data de Cadastro:</b> {dataCadastro}</p>
                        <p><b>Gênero:</b> {genero}</p>
                        <p><b>Descrição:</b> {descricao}</p>
                        <button type="button" onClick={fecharModalDetalhes}>Fechar</button>
                </ModalContainer>
            </Modal>

        </MainHomeStyled>
    );
}



