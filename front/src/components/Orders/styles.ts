import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
max-width: 1216px;
margin: 40px auto;
display: flex;
gap: 32px;
`;

export const Board = styled.div`
  padding: 16px;
  border: 1px solid rgba(284, 284, 284, 0.4);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;


  header{
    padding: 8;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrdersConteiner = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 24px;

  button {
    background: #fff;
    border: 1px solid rgba(284, 284, 284, 0.4);
    height: 128px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 14px;
      color: #666;
    }

    & + button {
      margin-top: 24px;
    }

  }
`;
