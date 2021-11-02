import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LibreriaContext} from '../Context/LibreriaContext'
import {useContext} from 'react';


const Lista = () => {
  const {wishList, eliminar} = useContext(LibreriaContext);
    return ( 
        <div className="List">
                <h4 style={{marginBottom:'5vmin' }}>Lista de deseos</h4>
                  {
                    wishList.length===0   
                    ? 
                    <p>No tienes libros agregados</p>
                    :
                      <Table>
                      <thead>
                        <tr>
                          <th>Codigo</th>
                          <th>Titulo</th>
                          <th>Idioma</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
  
                        {
                          wishList.map((l,i)=>{
                          
                          return(<tr key={i}>
                            <td>{l.codigo}</td>
                            <td>{l.titulo}</td>
                            <td>{l.idioma}</td>
                            <td>{<Button variant="dark"  onClick={()=>eliminar(l)}>Eliminar</Button>}</td>
                            </tr>)
  
  
                          })
                        }
                        
  
                      </tbody>
                      </Table>}
                   
                  
          
        </div>
     );
}
 
export default Lista;