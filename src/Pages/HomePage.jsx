// import React, { useEffect } from 'react'
// import { Navigate, useNavigate } from 'react-router-dom'
// import Signin from './Signin'
// import { useDispatch, useSelector } from 'react-redux'
// import { getData } from '../redux/data/action'


// function HomePage() {

//   const mainData=useSelector((store)=>store.data.data)
//   const dispatch=useDispatch()

//   console.log("mainDaata",mainData)

//   useEffect(()=>{
//     dispatch(getData())
//   },[])


//   const navigate=useNavigate()
//   const handleLogout=()=>{
//     navigate("/signin")
//   }
//   return (
//     <div>HomePage
//     <button onClick={handleLogout}>Logout</button>
//     <>
//     {mainData?.map((item)=>(
//       <>
      
//       </>
//     ))}
//     </>
//     </div>
//   )
// }

// export default HomePage









import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  
  Icon,
  chakra,
  Tooltip,
  Button,
  useStatStyles,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { getData, postCart } from '../redux/data/action'
import { useNavigate } from 'react-router-dom'

const data = {
  isNew: true,
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
}



function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            )
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  )
}

function Home() {

  const mainData=useSelector((store)=>store.data.data)
  const dispatch=useDispatch()
  const[sort,setSort]=useState([])

  console.log("mainDaata",mainData)

  useEffect(()=>{
    dispatch(getData())
  },[])


  const navigate=useNavigate()
  const handleLogout=()=>{
    navigate("/signin")
  }

  const handleAddCart=(item)=>{
    item.quant=1
    console.log("itemmmm",item)
      dispatch(postCart(item))
  }

  const handleCart=()=>{
    navigate('/cart')
  }

  const handleSortH=()=>{
    let sortData=mainData?.sort((a,b)=>{
      return b.price-a.price
    })
      setSort([...sortData])
      console.log("hhhSortData",sortData)
  }
  const handleSortL=()=>{
    let sortData=mainData?.sort((a,b)=>{
      return a.price-b.price
    })
      setSort([...sortData])
      console.log("lllsortdata",sortData)
  }
  const handleMen=()=>{
    let men=mainData.filter((item)=>{
      return item.for==="Men"
    })
    setSort(men)
    console.log("men",men)
  }
  const handleFemail=()=>{
    let femail=mainData.filter((item)=>{
      return item.for==="Women"
    })
    setSort(femail)
    console.log('femail',femail)
  }

  useEffect(()=>{
    setSort(mainData)
  },[mainData])


  const handlePayment=()=>{
    navigate('/payment')
  }
  



  return (


    <>
    <Button onClick={handleSortH}>Sort from heigh</Button>
    <Button onClick={handleSortL}>Sort from low</Button>
    <Button onClick={handleMen}>Men</Button>
    <Button onClick={handleFemail}>Femail</Button>
    <Button onClick={handleCart}>Cart</Button>
    <Button onClick={handlePayment}>Payment page</Button>

    <>
    {sort?.map((item)=>(
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
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              color="yellow"
              lineHeight="tight"
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
            <Rating rating={item.rating} numReviews={item.numReviews} />
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

   <Button onClick={()=>handleAddCart(item)}>Add to cart</Button>


      </>
    ))}









</>


    </>
  )
}

export default Home











