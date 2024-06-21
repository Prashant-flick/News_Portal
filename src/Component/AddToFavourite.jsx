import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CiHeart } from "react-icons/ci";
import {
	addArticle,
	deleteArticle
} from '../Store/favouriteSlice';

function AddToFavourite(article) {
    const favArticle = useSelector((state) => state.favouriteReducer.ArticleData)
    const dispatch = useDispatch()
    const [isfav, setisfav] = useState(false)

    useEffect(() => {
        favArticle.map((elem) => {
            if(elem?.article?.uuid === article?.article?.uuid){
                setisfav(true)
            }
        })
    }, [favArticle, article])

    const handleClick = (e) => {
        e.preventDefault()
        if(isfav){
            dispatch(deleteArticle(article))
            setisfav(false)
        }else{
            dispatch(addArticle(article))
            setisfav(true)
        }
    }

    return (
        <div 
            className={`flex justify-center pt-1 rounded-xl cursor-pointer ${isfav && 'bg-red-500'} align-middle mt-3 h-auto border-1 border-gray-700 w-40`}
            onClick={(e) => handleClick(e)}
        >
            <CiHeart />
            <h6>Add to favourite</h6>
        </div>
    )
}

export default AddToFavourite