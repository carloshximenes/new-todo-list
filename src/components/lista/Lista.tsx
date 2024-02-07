import { ItemType } from "../../types/itemType";
import Item from "../item/Item";

type ListaProps = {
    items: ItemType[]
}
import './Lista.css';

const Lista = (props: ListaProps) => {

    if(!props.items || props.items.length === 0) {
        return <div className="Lista">Não há atividades pendentes, parabéns!</div>
    }

    return (<div className="Lista">
        {props.items.map((item: ItemType) => <Item key={item.id} item={item} />)}
    </div>)
}

export default Lista;