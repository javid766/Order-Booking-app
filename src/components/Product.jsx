// import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import React from 'react'
import product1Image from '../assets/img/products/18_piece_non-stick_cookware-cover.png';
import product2Image from '../assets/img/products/cauliflower-cover.png';
import product3Image from '../assets/img/products/overnight_diapers_size_6-cover.png';



function Product() {

    const products =[
        {
            image: product1Image,
            name:"Overnight Diapers Size 6",
            unit:'Packet',
            regularPrice: '$33.250',
            discountedPrice: '$35.000',

        },
        {
            image: product2Image,
            name:"Overnight Diapers Size 6",
            unit:'Packet',
            regularPrice: '$33.250',
            discountedPrice: '$35.000',

        },
        {
            image: product3Image,
            name:"Overnight Diapers Size 6",
            unit:'Packet',
            regularPrice: '$33.250',
            discountedPrice: '$35.000',

        },
        {
            image: product1Image,
            name:"Overnight Diapers Size 6",
            unit:'Packet',
            regularPrice: '$33.250',
            discountedPrice: '$35.000',

        },
        {
            image: product2Image,
            name:"Overnight Diapers Size 6",
            unit:'Packet',
            regularPrice: '$33.250',
            discountedPrice: '$35.000',

        },
        {
            image: product3Image,
            name:"Overnight Diapers Size 6",
            unit:'Packet',
            regularPrice: '$33.250',
            discountedPrice: '$35.000',

        },
        {
            image: product1Image,
            name:"Overnight Diapers Size 6",
            unit:'Packet',
            regularPrice: '$33.250',
            discountedPrice: '$35.000',

        },
        {
            image: product2Image,
            name:"Overnight Diapers Size 6",
            unit:'Packet',
            regularPrice: '$33.250',
            discountedPrice: '$35.000',

        },
        {
            image: product3Image,
            name:"Overnight Diapers Size 6",
            unit:'Packet',
            regularPrice: '$33.250',
            discountedPrice: '$35.000',

        },
        {
            image: product1Image,
            name:"Overnight Diapers Size 6",
            unit:'Packet',
            regularPrice: '$33.250',
            discountedPrice: '$35.000',

        },
        {
            image: product2Image,
            name:"Overnight Diapers Size 6",
            unit:'Packet',
            regularPrice: '$33.250',
            discountedPrice: '$35.000',

        },
        {
            image: product3Image,
            name:"Overnight Diapers Size 6",
            unit:'Packet',
            regularPrice: '$33.250',
            discountedPrice: '$35.000',

        },
    ] 

  return (
    <div className='flexborder grid grid-cols-6 gap-5 justify-between'>
        {
            products.map((item)=>(
                <div className='product-grid border border-gray-100 p-2 rounded-[10px] relative'>
                    <img src={item.image} atl='product1' />
                    <label className='absolute top-1 bg-black text-white p-[2px]  font-semibold text-xs rounded-full py-1 px-2'>Flash Sale</label>
                    <button className='add-to-wish-list '><i className='fa fa-heart rounded-[15px] bg-white absolute right-1 top-1 p-1'></i></button>
                    <button className='bg-green-500 flex items-center gap-1.5 absolute bottom-24 right-1 text-white px-[15px] py-[5px] rounded-[15px]'><i className='fa fa-lock'></i>Add</button>
                    <div className='product-title font-bold'>{item.name}</div>
                    <div className='product-unit'>{item.unit}</div>
                    <p className='regular-price font-bold text-green-600 '>{item.regularPrice} <del className='discounted-price text-slate-400'>{item.discountedPrice}</del></p> 
                </div>
            ) )
        }
      


    </div>
  )
}

export default Product;