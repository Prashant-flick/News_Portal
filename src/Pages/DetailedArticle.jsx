import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

function DetailedArticle() {
    const article = useSelector((state) => state.CurrentArticleReducer?.ArticleData)

    return (
        <div className='flex flex-col xl:px-32 md:px-16 sm:px-4 max-sm:px-4 mt-4'>
            <h1 className='self-center mb-4'>{article?.title}</h1>
            <img src={article?.image_url} alt="no image preview" className='self-center w-3/4 mb-4' />
            <p className='xl:text-3xl md:text-xl text-xl'>{article?.description}</p>
            <p className='xl:text-3xl md:text-xl text-xl'>{article?.snippet}</p>
            <p 
                className='md:text-lg text-md'
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, hic aliquid! Illum vitae id commodi eligendi tempora praesentium culpa doloremque magnam! Quaerat perspiciatis eum pariatur, iure explicabo corporis iste beatae, ducimus aperiam modi et, itaque sint mollitia culpa minima inventore impedit omnis magni magnam consequatur deleniti suscipit ut commodi nam. Ipsum expedita minus vero hic incidunt debitis iste unde rem commodi? Voluptatum illo sed odio! Nisi obcaecati expedita rerum omnis ea, aut dolorem at exercitationem? Quidem, culpa? Ex sequi cupiditate reprehenderit corrupti delectus fuga laudantium quis ullam, necessitatibus corporis nobis atque quia. Ut sunt deserunt ducimus fugiat explicabo nobis temporibus pariatur blanditiis in tenetur facere qui voluptatem labore velit repellat, doloribus possimus expedita eos natus unde. Nam numquam magnam veniam, sit dicta error quod architecto libero aliquid aliquam! Praesentium, alias. Nesciunt accusamus deserunt eius rerum iusto amet eaque fugiat doloribus necessitatibus, vero, laboriosam debitis quae. Optio mollitia assumenda dolorem deleniti placeat tenetur repellendus magnam iure blanditiis officia at vitae eveniet quaerat culpa non porro reiciendis, maxime sint pariatur qui illum ipsa. Quo, quos! Voluptates unde modi, saepe quis ex laborum beatae at magnam qui enim officiis corrupti. Numquam voluptate quaerat placeat id? Temporibus non aspernatur, porro consectetur saepe dignissimos illo debitis placeat exercitationem ut assumenda cumque pariatur. Praesentium veritatis ea aut expedita omnis ut optio necessitatibus debitis deserunt sunt eveniet soluta id ipsam, porro magni consectetur? Dolor, porro! Quos, minus. Dolor adipisci, repellendus quis similique tenetur odio voluptatum reiciendis quibusdam pariatur esse saepe excepturi modi architecto consequatur rerum, laborum assumenda dignissimos ullam. Cupiditate provident magni saepe iusto aperiam libero magnam est, ducimus aut modi voluptate eveniet quae harum consequuntur earum voluptatibus dolore veritatis ratione reprehenderit excepturi vitae aspernatur. Impedit incidunt nulla, eius nostrum labore provident? Excepturi, nemo molestias quas, atque reprehenderit voluptatem harum quo nulla vero optio reiciendis cupiditate! Magni?
            </p>
            <Link className='self-center pb-5' to={article?.url}>Read More...</Link>
        </div>
    )
}

export default DetailedArticle