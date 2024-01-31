
import { getProducts } from '@/actions/productActions' 
import Slider2 from './Slider2'

const Slider = async () => {


      // Effect to fetch more products when component comes into view

    
    const data = await getProducts(1, 8, "", "", "", "")
       
   


  
    return (
        <div className='w-full mx-auto'>
       <Slider2 data={data.products} />
        </div>
  )
}

export default Slider