import { Flex ,Box} from '@chakra-ui/react';
import {useEffect} from 'react'; 
import ProductCart from '../Components/ProductCart';
import { getProducts } from '../Redux/app/app.action';
import { useAppDispatch, useAppSelector } from '../Redux/store';


const Homepage = () =>{
    const dispatch = useAppDispatch()
    const products = useAppSelector((store)=>store.AppReducer.data);

    useEffect(()=>{
        if(products.length===0){
            dispatch(getProducts());
        }
    },[])

    // console.log("homepage-products",products);

    return (
        <div>
            <Flex flexWrap={'wrap'} justifyContent='center'>
                {
                    products.length>0 && products.map((item)=>{
                      return <ProductCart key={item.id} {...item} />
                    })
                }
            </Flex>
        </div>
    )
}   


export default Homepage;


