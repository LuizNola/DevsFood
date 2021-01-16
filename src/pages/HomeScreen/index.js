import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, CategoryArea, CategoryList } from './styled';

import api from '../../api'

import CategoryItem from '../../components/CategoryItem'
import Header from '../../components/Header'

export default () => {

    const [ headerSearch, setHeaderSearch ] = useState('')
    const [ categories, setCategories ] = useState([])

    const [ activeCat, setActiveCat ] = useState(0)

    useEffect(() => {
        const getCategories = async () => {
            const cat = await api.getCategories()
            if (cat.error == '') {
                setCategories(cat.result)
            }
        }
        getCategories()
    }, [])

    useEffect(() =>{
        
    },[activeCat])

 

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
            {categories.length > 0 && 
                <>
                    <CategoryArea>
                        Selecione uma categoria
                        <CategoryList>
                            <CategoryItem setActiveCat={setActiveCat} activeCat={activeCat} data={{id:0,title:'Todas as categorias', image:'/assets/food-and-restaurant.png'}}/>
                            {categories.map((item, index)=>(
                                    <CategoryItem setActiveCat={setActiveCat} activeCat={activeCat} key={index} data={item}/>
                            ))}
                        </CategoryList>
                    </CategoryArea>
                </>
            }
        </Container>
    );
}