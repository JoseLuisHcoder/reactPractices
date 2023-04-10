import axios from 'axios'
import { useEffect, useState } from 'react'
import CardSimilarProduct from './CardSimilarProduct'

const SimilarProducts = ({ categoryId }) => {
	const [categories, setCategories] = useState()

	useEffect(() => {
		const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${categoryId}`
		axios
			.get(url)
			.then(res => setCategories(res.data))
			.catch(err => console.log(err))
	}, [categoryId])
	console.log(categories)

	//     useEffect(() => {
	//         if(categories && productInfoCategory){
	//             const filtro = categories.filter(category => category.name === productInfoCategory)[0].id
	//             setIdCategory(filtro)
	//         }
	//     }, [categories, productInfoCategory])
	// console.log(idCategory);
	return (
		<div>
			<h2>Similar Products</h2>
			<div className='home__container__card'>
				{categories?.map(product => (
					<CardSimilarProduct product={product} key={product.id} />
				))}
			</div>
		</div>
	)
}

export default SimilarProducts
