import { ItemType } from "../../types/itemType";
import './Formulario.css';

type FormularioProps = {
    salvar: (novoItem: ItemType) => void
}

const Formulario = (props: FormularioProps) => {

    const submitHandler = (e: any) => {
        e.preventDefault();
        const nome = e.target[0].value;
        const categoria = e.target[1].value;
        const dataConclusao = e.target[2].value;

        const novoItem: ItemType = {
            id: new Date().toISOString(),
            nome,
            categoria,
            dataConclusao
        }
        
        props.salvar(novoItem);
    }

    return (
    <form className="Formulario" onSubmit={submitHandler}>
        <label htmlFor="nome">Nome da tarefa
            <input type="text" name="nome" id="nome"/>
        </label>

        <label htmlFor="categoria">Categoria
            <select name="categoria" id="categoria">
                <option>Pessoal</option>
                <option>Profissional</option>
                <option>Casa/Família</option>
                <option>Outros</option>
            </select>
        </label>

        <label htmlFor="dataConclusao">Data de Conclusão
            <input type="date" name="dataConclusao" id="dataConclusao"/>
        </label>
        
        <button type="submit">SALVAR</button>
    </form>
    )
}

export default Formulario