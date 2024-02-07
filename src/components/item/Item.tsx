import { ItemType } from "../../types/itemType";
import './Item.css';

type ItemProps = {
    item: ItemType
}

const Item = (props: ItemProps) => {
    return <div className="Item">
        <p className="Item__nome">{props.item.nome}</p>
        <p className="Item__categoria">{props.item.categoria}</p>
        <p className="Item__data">{props.item.dataConclusao.toString()}</p>
        <div className="Item__acoes">
            <button type='button'>DELETAR</button>
        </div>
    </div>
}

export default Item;