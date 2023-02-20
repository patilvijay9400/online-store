import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const ProductModal = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [product, setproduct] = useState(
        {
            productName: "",
            image: "",
            price: "",
            sale: "",
            availble: "",
        }
    );

    useEffect(() => {
        fetch("http://localhost:3000/products/" + location.state.id).then((response) => {
            response.json().then((result) => {
                setproduct(result);
            })
        })
    }, [])

    var isAvailable;

    if (product.availble == 'yes') {
        isAvailable = true
    } else {
        isAvailable = false
    }

    let [num, setNum] = useState(0);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
            console.log("increment",num + 1)
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
            console.log("decrement",num - 1)
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }
    return (
        <div>
            <div id="quickview-root">
                <div class="fixed flex top-0 left-0 w-full p-5 z-50">
                    <div class="relative bg-white xl:w-[1170px] w-[calc(100%-60px)] m-auto before:bg-black before:fixed before:opacity-50 before:pointer-events-none before:w-full before:h-full before:top-0 before:left-0 before:z-[-1]">
                        <div onClick={() => navigate("../")} class="quickview-top absolute top-[20px] right-[20px] z-[1]">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[32px] cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144m224 0L144 368"></path></svg>
                        </div>
                        <div class="quickview-body w-full">
                            <div class="grid md:grid-cols-2 grid-cols-1">
                                <div class="product-img md:h-full">
                                    <a class="block relative" href="/products/animi-dolor-pariatur">
                                        <img class="w-full " src={product.image} alt="Product img" />
                                    </a>
                                </div>
                                <div class="product-content flex flex-col justify-center px-[30px]">
                                    <h2 class="text-[24px] mb-[15px]">{product.productName}</h2>
                                    <span class="product-price text-[30px] leading-[42px] text-[#999999] block mb-[25px]">{product.price}</span>
                                    <h3 class="stock font-semibold text-[14px] mb-[20px]">Available:
                                        {isAvailable ? (
                                            <span class="text-[#3bc604] ml-[5px]">in-stock</span>

                                        ) : (
                                            <span class="text-[#ea2c2c] ml-[5px]">out-of-stock</span>
                                        )}
                                    </h3>
                                    <p>At vero accusamus et iusto odio dignissimos blanditiis praesentiums dolores molest.</p>
                                    <div class="group-btn flex max-xs:flex-wrap py-[30px]">
                                        <div class="relative inline-flex border border-[#dddddd] mr-[15px] max-xs:mb-[10px]">
                                            <div class="flex justify-center lg:w-[120px] w-[100px]">
                                                <button type="button" onClick={ decNum } class="cursor-pointer text-center absolute w-[24px] leading-[23px] dec top-1/2 -translate-y-1/2 left-[4px]">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="square" stroke-linejoin="round" stroke-width="32" d="M400 256H112"></path></svg>
                                                </button>
                                                <input class="qty-input outline-none text-center w-[100px] px-[15px] h-[46px] leading-[40px]" type="text" name="qtybutton" value={num} onChange={handleChange} />
                                                <button type="button" onClick={ incNum } class="cursor-pointer text-center absolute w-[24px] leading-[23px] inc top-1/2 -translate-y-1/2 right-[4px]">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="square" stroke-linejoin="round" stroke-width="32" d="M256 112v288m144-144H112"></path></svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="">
                                            <button type="button" class="bg-black text-white px-[42px] h-[46px] leading-[44px]  mr-[15px]">Add to cart</button>
                                        </div>
                                        <button type="button" class="border border-[#dddddd] text-[20px] w-[46px] h-[46px] leading-[46px] inline-flex justify-center items-center transition-all hover:text-primary">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
