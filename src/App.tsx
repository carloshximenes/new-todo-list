import { useState } from 'react'
import { ItemType } from './types/itemType';
import Formulario from './components/formulario/Formulario'
import Lista from './components/lista/Lista'
import './App.css'

function App() {

  const [listaItems, setListaItems] = useState<ItemType[]>([]);

  const adicionarNovoItem = (novoItem: ItemType) => {
    // setListaItems([...listaItems, novoItem]);
    setListaItems(prev => [...prev, novoItem]);
  }

  return (
    <>
      <Formulario salvar={(item: ItemType) => adicionarNovoItem(item)} />
      <Lista items={listaItems} />
    </>
  )
}

export default App
