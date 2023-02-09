import { Flex ,Box} from '@chakra-ui/react';
import {useEffect} from 'react'; 
import FilterAndSort from '../Components/FilterAndSort';
import ProductCart from '../Components/ProductCart';
import { getProducts } from '../Redux/app/app.action';
import { useAppDispatch, useAppSelector } from '../Redux/store';
import { useLocation, useSearchParams } from 'react-router-dom';

const Homepage = () =>{
    const dispatch = useAppDispatch()
    const products = useAppSelector((store)=>store.AppReducer.data);
    const location = useLocation();
    // conosle.log(location)
    const [searchParams] = useSearchParams();

    useEffect(()=>{
        if(products.length===0 || location){
            const getproductsParam = {
                params:{
                    category: searchParams.getAll("filter"),
                }
            }
            dispatch(getProducts(getproductsParam));
        }
    },[location.search]);

    // console.log("homepage-products",products);

    return (
        <div>
            <Flex>
                <Box minW="300px">
                    <FilterAndSort />
                </Box>
                <Flex flexWrap={'wrap'} justifyContent='center'>

                    {/*
                     {
                        products.length>0 && products.filter((item,index)=>{
                            searchParams.getAll("filter").includes(item.category)
                        }).map((item)=>{
                          return <ProductCart key={item.id} {...item} />
                        })
                    } 
                    */}

                    {
                        products.length>0 && products.map((item)=>{
                          return <ProductCart key={item.id} {...item} />
                        })
                    }
                </Flex>
            </Flex>
        </div>
    )

}   


export default Homepage;


