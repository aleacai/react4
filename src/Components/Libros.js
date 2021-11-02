import React from 'react'
import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext} from 'react';
import {LibreriaContext} from '../Context/LibreriaContext'

export default function Libros () {
        const {catalogo, agregar} = useContext(LibreriaContext);
        return (
            <div className="Cartelera">
                <h4 style={{marginBottom:'5vmin' }}>Libros disponibles</h4>
                  {
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
                        catalogo.map((l,i)=>{
                        
                        return(<tr key={i}>
                          <td>{l.codigo}</td>
                          <td>{l.titulo}</td>
                          <td>{l.idioma}</td>
                          <td>{<Button variant="dark" disabled={l.desactivado} onClick={()=>agregar(l)}>Agregar</Button>}</td>
                          </tr>)


                        })
                      }
                      

                    </tbody>
                    </Table>
                   
                  }
 
            </div>
        )

}

//<Button variant="dark" key={ind} onClick={()=>props.agregar(p,h)}style={{margin:'1vmin'}}>{h}</Button>
