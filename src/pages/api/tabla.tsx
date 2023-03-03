import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: space-between;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Input = styled.input`
  margin: 5px 0;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid gray;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Button = styled.button`
  margin: 0 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid gray;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

function sumitintogrid(
  nombre: string,
  cuentaLOL: string,
  id: number,
  handleRemove: (id: number) => void
) {
  function remove() {
    handleRemove(id);
  }
  
  return (
    <>
      <div key={id} className="item">
         {nombre}
      </div>
      <div key={id + 1} className="item">
        {cuentaLOL}
      </div>
      <div key={id + 2}>
        <Image
          className="papelera"
          src="/descarga.png"
          alt="foto"
          width="50"
          height="50"
          onClick={remove}
        />
      </div>
    </>
  );
}




const Formulario = () => {
  const [nombre, setNombre] = useState<string>("");
  const [cuentaLOL, setCuentaLOL] = useState<string>("");
  const [gridItems, setGridItems] = useState<Array<JSX.Element>>([]);
  const [nextId, setNextId] = useState<number>(0);

  function handleAddItem() {
    if (nombre === "" || cuentaLOL === "") return;
    const newItem = sumitintogrid(
      nombre,
      cuentaLOL,
      nextId,
      handleRemoveItem
    );
    setGridItems([...gridItems, newItem]);
    setNextId(nextId + 3);
  }

  
  function handleRemoveItem(id: number) {
    setGridItems(
      gridItems.filter((item) => {
        return item.key !== 'item-' + id;
      })
    );
  }
  
  
  
  

  function removeAll() {
    setGridItems([]);
    setNextId(0);
  }

  return (
    <>
      <h1>PRACTICA 2</h1>
      <Container>
        <div>
          introduce tu nombre:
          <br />
          <Input type="text" onChange={(e) => setNombre(e.target.value)} />
        </div>

        <ButtonContainer>
          <Button onClick={handleAddItem}>add</Button>
          <Button onClick={removeAll}>rem</Button>
        </ButtonContainer>

        <div>
          introduce tu cuenta:
          <br />
          <Input type="text" onChange={(e) => setCuentaLOL(e.target.value)} />
        </div>
      </Container>
      <br />
      <br />
      <br />
      <br />

      <div className="contenedor">{gridItems}</div>
    </>
  );
};

export default Formulario
