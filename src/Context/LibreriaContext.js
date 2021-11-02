import React, {createContext, useState} from 'react'

export const LibreriaContext = createContext();

const LibreriaProvider = (props)=>{
  const [wishList,setWishList]= useState([]);
  const [catalogo,setCatalogo]= useState([
    {codigo:1,titulo:"Programación", idioma:'ESP', desactivado:false},
    {codigo:2,titulo:"Aprende Python", idioma:'ESP',desactivado:false},     
    {codigo:3,titulo:"Precálculo", idioma:'ESP',desactivado:false},
    {codigo:4,titulo:"Ingenieria De Software", idioma:'ESP',desactivado:false}
  ]); 

  const  agregar=(libro)=>{

      let temp= catalogo;
      
      let index= temp.findIndex((element)=>element.codigo===libro.codigo);
      //alert(index)
      temp[index].desactivado=true;
  
      let temp2 =[...wishList,libro];
      temp2= temp2.sort((a,b)=>a.codigo>b.codigo)
  
      setWishList(temp2);
      setCatalogo(temp);

    }
   
    
  const  eliminar=(libro)=>{
      let temp= catalogo;    
      let index= temp.findIndex((element)=>element.codigo===libro.codigo);
      //alert(index)
      temp[index].desactivado=false;
  
      let tempW= wishList.filter(c=>c.codigo!==libro.codigo)
      setWishList(tempW);
      setCatalogo(temp);
  
  
    }  

  

  

    return(
        <LibreriaContext.Provider
            value={{
                catalogo,
                wishList,
                eliminar,
                agregar
            }}>
                {props.children}

        </LibreriaContext.Provider>
    );
}

export default LibreriaProvider;