import React, { useState, useEffect } from "react";
import Product from '../../product.json'

export const ProductContext = React.createContext(Product);

function Products2(){  

    const [sortedArr, setSortedArr] = useState(Product);   

    function filterProduct(categories){
        if(categories === "all"){
            setSortedArr(Product)
        } else {
            let newProductArr = [...Product].filter(item => item.categories === categories)
            setSortedArr(newProductArr)
        }
    };

    function print(){	
		return sortedArr.map((item, index) => {
			return (
				<div key={index} className={item.categories}>
                    <div className={'img_' + item.id}></div>
					<div className="dish">
						<span>{item.name}</span>
						<span>$ {item.price}</span>
					</div>
				</div>
			);
		});
	}
    return (
        <>
        <ProductContext.Provider value={Product}>
        <div className="menu__sort">
        <ul>
            <li><a onClick={ () => filterProduct('all') }>All</a></li>
            <li><a onClick={ () => filterProduct('fastfood') }>Fast Food</a></li>
            <li><a onClick={ () => filterProduct('coffe') }>Cofee</a></li>
            <li><a onClick={ () => filterProduct('coctails') }>Coctails</a></li>
            <li><a onClick={ () => filterProduct('cake') }>Quafe Cake</a></li>
            <li><a onClick={ () => filterProduct('snacks') }>Snacks</a></li>
        </ul>
        </div>
        <div className="home__menu_bottom">{print()}</div>
        </ProductContext.Provider>
        </>
    );
};


export default Products2;