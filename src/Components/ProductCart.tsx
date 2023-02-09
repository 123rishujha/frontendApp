import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import {AiOutlineEdit} from 'react-icons/ai';
import { Product } from '../utils/types';
import { Link } from 'react-router-dom';

  

  
  function ProductCart({id,title,price,image}:Product) {
    return (
      <Flex p={50} w="fit-content" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
  

          <Link to={`/product/${id}`}>
              <Image
                boxSize='400px'
                objectFit='contain'
                src={image}
                alt={`Picture of ${title}`}
                roundedTop="lg"
              />
          </Link>


          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {title}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a href={'#'} display={'flex'}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                </chakra.a>
              </Tooltip>
            </Flex>
            <Box>
              <Link to={`/product/${id}/edit`}>
                <Icon cursor={'pointer'} as={AiOutlineEdit} h={7} w={7} />
              </Link>
            </Box>
            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                  £
                </Box>
                {price.toFixed(2)}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default ProductCart;