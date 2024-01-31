import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ productData }) => {

  return (
   
    <div className="duration-500 bg-white border shadow-md w-72 rounded-xl hover:scale-105 hover:shadow-xl h-[416px] dark:bg-zinc-800 dark:border-stone-950">
      <Link href={`/product/${productData._id}`} >
        <div className='w-[286px] h-[286px]'>
          
        <Image
          width={768}
          height={500}
          src={productData.images[0]}
          alt="Product"
          className="object-cover rounded-t-xl"
          />
          </div>
        <div className="px-4 py-3 w-72">
          <span className="mr-3 text-xs text-gray-400 uppercase">{productData.brand}</span>
          <p className="block text-lg font-bold truncate capitsalize text-skin-base dark:text-skin-inverted">{productData.name}</p>
          <div className="flex items-center">
            <p className="my-3 text-lg font-semibold cursor-auto text-skin-base dark:text-skin-inverted">{productData.price} €</p>
            <del>
              <p className="ml-2 text-sm text-red-600 cursor-auto">{productData.oldPrice}</p>
            </del>
            <div className="ml-auto dark:text-skin-inverted text-skin-base"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
              fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
              <path fillRule="evenodd"
                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path
                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
          </div>
        </div>
                </Link>
    </div>
  )
}

export default ProductCard