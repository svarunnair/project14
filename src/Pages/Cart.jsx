

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
  Button,
  Text,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, getCart, patchCart, postPayment } from '../redux/data/action'
import { useNavigate } from 'react-router-dom'

const data = {
  isNew: true,
  
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
}



// function Rating({ rating, numReviews }) {
//   return (
//     <Box display="flex" alignItems="center">
//       {Array(5)
//         .fill('')
//         .map((_, i) => {
//           const roundedRating = Math.round(rating * 2) / 2
//           if (roundedRating - i >= 1) {
//             return (
//               <BsStarFill
//                 key={i}
//                 style={{ marginLeft: '1' }}
//                 color={i < rating ? 'teal.500' : 'gray.300'}
//               />
//             )
//           }
//           if (roundedRating - i === 0.5) {
//             return <BsStarHalf key={i} style={{ marginLeft: '1' }} />
//           }
//           return <BsStar key={i} style={{ marginLeft: '1' }} />
//         })}
//       <Box as="span" ml="2" color="gray.600" fontSize="sm">
//         {numReviews} review{numReviews > 1 && 's'}
//       </Box>
//     </Box>
//   )
// }

function Cart() {

    const dispatch=useDispatch()
    const CartData=useSelector((store)=>store.data.getCart)||[]
    const navigate=useNavigate()

    console.log("cartData",CartData)

    useEffect(()=>{

        dispatch(getCart())
    },[])

    const handleDelete=(id)=>{
        dispatch(deleteCart(id))
    }

    const handleAdd=(id,quant)=>{
        let data={
            quant:quant+1
        }
        dispatch(patchCart(id,data))
    }
    const handleReduce=(id,quant)=>{
       if(quant<2){
        quant=2
       }
        let data={
            quant:quant-1
        }
        dispatch(patchCart(id,data))
        console.log("data",data,id)
    }

    const handleHome=()=>{
        navigate('/home')
    }
let total=CartData?.reduce((acc,item,index)=>{
    return acc+item.price*item.quant
},0)





// const handleBuy=()=>{
//     CartData?.map((item)=>(
//         dispatch(postPayment(item))
//     ))
// }


const handleBuy=()=>{
   CartData?.map((item)=>(
    dispatch(postPayment(item))
   ))
}



  return (
<>

<Button onClick={handleHome}>Home</Button>
    <>
    {CartData?.map((item)=>(
        <>


<Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {item.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
        )}

        <Image src={item.image} alt={`Picture of ${item.name}`} roundedTop="lg" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {item.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              color="yellow"
              isTruncated>
              {item.name}
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

          <Flex justifyContent="space-between" alignContent="center">
            
            <Box fontSize="2xl" color={('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                £
              </Box>
              {item.price}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
    <Button onClick={()=>handleAdd(item.id,item.quant)} >Add</Button>
    <Button onClick={()=>handleReduce(item.id,item.quant)}>Reduce</Button>
    <Button onClick={()=>handleDelete(item.id)}>Delete</Button>
    <Text>Quantity:{item.quant}</Text>

        </>
    ))}

    <Text>Total amount:{total}</Text>

    <Button onClick={handleBuy}>Buy now</Button>
    

    

    </>

    </>
  )
}

export default Cart