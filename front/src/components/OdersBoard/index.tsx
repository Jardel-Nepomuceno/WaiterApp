import { Order } from '../../types/Order';
import { Board, OrdersConteiner } from './styles';

interface OrdersBoardProps {
  icon:string;
  title:string;
  orders: Order[];
}

export function OrdersBoard({icon, title}: OrdersBoardProps) {
  return (
    <Board>
    <header>
      <span>{icon}</span>
      <strong>{title}</strong>
      <span>(1)</span>
    </header>

    <OrdersConteiner>
        <button type='button'>
        <strong>Mesa 2</strong>
        <span>2 itens</span>
        </button>
        <button type='button'>
        <strong>Mesa 2</strong>
        <span>2 itens</span>
        </button>
    </OrdersConteiner>
    </Board>
  );
}
