import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, 
        CategoryArea, 
        CategoryList, 
        ProductArea, 
        ProductPaginationArea, 
        ProductPaginationItem 
        } from './styled';
import ReactToolTip from 'react-tooltip'

import api from '../../api'

import CategoryItem from '../../components/CategoryItem'
import Header from '../../components/Header'
import ProductItem from '../../components/ProductItem'
import Modal from '../../components/Modal'
import ModalProduct from '../../components/ModalProduct'

let searchTimer = null;

export default () => {


    const [ headerSearch, setHeaderSearch ] = useState('')
    const [ categories, setCategories ] = useState([])
    const [ products, setProducts ] = useState([])
    const [ totalPages, setTotalPages ] = useState(0)
    const [ modalData, setModalData ] = useState({})

    const [ modalStatus, setModalStatus ] = useState(false)

    const [ activeCat, setActiveCat ] = useState(0)
    const [ activePage, setActivePage ] = useState(1)
    const [ activeSearch, setActiveSearch ] = useState('')
   

    const getProducts = async () =>{
        const prods = await api.getProducts(activeCat, activePage, activeSearch)
        if(prods.error == ''){
            setProducts(prods.result.data)
            setTotalPages(prods.result.pages)
            setActivePage(prods.result.page)
        }
    }

    const handleProductClick = (data) => {
        setModalData(data);
        setModalStatus(true);
    }
 

    useEffect(() => {
        clearTimeout(searchTimer)
        searchTimer = setTimeout(()=>{
            setActiveSearch(headerSearch);
        }, 2000)
    }, [ headerSearch ])

    useEffect(() => {
        const getCategories = async () => {
            const cat = await api.getCategories();
            if (cat.error == '') {
                setCategories(cat.result)
                console.log(cat)
            }

            ReactToolTip.rebuild()
        }
        
        getCategories();
    }, [])

    useEffect(() =>{
        setProducts([]);
        getProducts();

    },[activeCat, activePage, activeSearch ])

 

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
                                <ProductItem key={ index } 
                                             onClick={handleProductClick}
                                             data={item}/>
                            ))}
                        
                    </ProductArea>
                </>
            }

            {totalPages > 0 && 
                <ProductPaginationArea>
                    {Array(totalPages).fill(0).map((item, index)=>(
                        <ProductPaginationItem 
                            current={index+1} 
                            active={ activePage } 
                            key={ index }
                            onClick={()=>{setActivePage(index+1)}}
                            >
                            { index + 1 }
                        </ProductPaginationItem>
                    ))}
                </ProductPaginationArea>
            }

            <Modal status={ modalStatus } setStatus={setModalStatus}>
                <ModalProduct data={modalData}/>
            </Modal>
        </Container>
    );
}