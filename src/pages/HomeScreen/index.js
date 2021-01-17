import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, CategoryArea, CategoryList, ProductArea } from './styled';
import ReactToolTip from 'react-tooltip'

import api from '../../api'

import CategoryItem from '../../components/CategoryItem'
import Header from '../../components/Header'
import ProductItem from '../../components/ProductItem'

export default () => {


    const [ headerSearch, setHeaderSearch ] = useState('')
    const [ categories, setCategories ] = useState([])
    const [ products, setProducts ] = useState([])

    const [ activeCat, setActiveCat ] = useState(0)
   

    const getProducts = async () =>{
        const prods = await api.getProducts()
        if(prods.error == ''){
            setProducts(prods.result.data)
           
        }
    }

    useEffect(() => {
        const getCategories = async () => {

            
            const cat = await api.getCategories()
            if (cat.error == '') {
                setCategories(cat.result)
                console.log(cat)
            }

            ReactToolTip.rebuild()
        }
        
        getCategories();
    }, [])

    useEffect(() =>{
        getProducts();


    },[activeCat])

 

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
            {categories.length > 0 && 
                <>
                    <CategoryArea>
                        Selecione uma categoria
                        <CategoryList>
                            <CategoryItem title="Todos" setActiveCat={setActiveCat} activeCat={activeCat} data={{id:0,title:'Todas as categorias', image:'/assets/food-and-restaurant.png'}}/>
                            {categories.map((item, index)=>(
                                    <CategoryItem  setActiveCat={setActiveCat} title={item.name}  activeCat={activeCat} key={index} data={item}/>
                            ))}
                        </CategoryList>
                    </CategoryArea>
                </>
            }

            {products.length > 0 && 
                <>
                    <ProductArea>
                            {products.map((item,index)=>(
                                <ProductItem key = {index} name={item.name}  image={item.image} ingredients={item.ingredients} price={item.price}/>
                            ))}
                        
                    </ProductArea>
                </>
            }
        </Container>
    );
}