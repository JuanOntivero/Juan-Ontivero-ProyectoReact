import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from '../../../components/ItemDetail';
import { getProductById } from '../../../data/products';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProductById(itemId).then(setItem);
  }, [itemId]);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Cargando...</p>}
    </div>
  );
}

export default ItemDetailContainer;
