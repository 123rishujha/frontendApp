import { Box, Checkbox, CheckboxGroup, filter, Heading, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';


const FilterAndSort = () => {

  const [searchParams,setSearchParams] = useSearchParams();
  const inital = searchParams.getAll('filter');



  const [filterValues,setFilterValues] = useState<string[]>(inital || []);


  useEffect(()=>{
    let params: {filter?:string[]}= {};
    if(filterValues.length) params.filter = filterValues;
    setSearchParams(params);
  },[filterValues,setSearchParams]);


  const handleFilterChange = (value:string[])=>{
    console.log(value);
    setFilterValues(value);
  }
  // console.log(filterValues);

  return (
    <Box p={6}>
      <Heading>Filter</Heading>
      <CheckboxGroup colorScheme="green" 
          value={filterValues} 
          onChange={handleFilterChange}
          >
        <Stack direction={'column'} spacing={[1,5]}>
          <Checkbox value='bags'>Bags</Checkbox>
          <Checkbox value='electronics'>Electronic</Checkbox>
          <Checkbox value='jewelery'>Jewelery</Checkbox>
          <Checkbox value="men's clothing">Mens Clothing</Checkbox> 
          <Checkbox value="Womens's clothing">WoMens Clothing</Checkbox>
        </Stack>
      </CheckboxGroup>

      <Heading>Sort</Heading>
      <RadioGroup>
        <Stack direction={'column'}>
          <Radio value='1'>Naruto</Radio>
          <Radio value='2'>Naruto</Radio>
          <Radio value='3'>Naruto</Radio>
        </Stack>
      </RadioGroup>

    </Box>
  )
}

export default FilterAndSort



