import { useParams } from 'react-router-dom';

const Contacts = () => {
  const { param } = useParams();
  return (
    <div>
      <h1>Contacto con parámetro: {param}</h1>
    </div>
  );
};

export default Contacts;
