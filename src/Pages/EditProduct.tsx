import { Box, Button, Flex, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import {useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useCurrentParamProduct from '../hooks/useCurrentParamProduct';
import { getProducts, updateProduct } from '../Redux/app/app.action';
import { useAppDispatch, useAppSelector } from '../Redux/store';
import { Product } from '../utils/types';



const EditProduct = () => {

  const {currentProduct,id} = useCurrentParamProduct();
  const [title,setTitle] = useState<string>("");
  const [price,setPrice] = useState<number>(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
 
  

  const updateHandler = () =>{
    if(title.length && price){
      const payload = {
        title,
        price,
      }
      dispatch(updateProduct(Number(id),payload))
      .then(()=>{
        navigate("/");
      })
    }
  }

  useEffect(()=>{
    if(currentProduct?.title && currentProduct?.price){
      setTitle(currentProduct?.title);
      setPrice(currentProduct?.price);
    }
  },[currentProduct]);
  

  return (
    <Box>
      <Flex m={5} justify={'center'}>
        <Stack spacing={4}>
            <FormControl id="title">
              <FormLabel>Title</FormLabel>
              <Input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}  />
            </FormControl>
            <FormControl id="price">
              <FormLabel>Price</FormLabel>
              <Input type="number" value={price} onChange={(e)=>{setPrice(Number(e.target.value))}} />
            </FormControl>
        </Stack>
      </Flex>
      <Button onClick={updateHandler}>Update Product</Button>
    </Box>
  )
}

export default EditProduct

