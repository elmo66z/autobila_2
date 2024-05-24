import {Link} from 'react-router-dom';
//import Products from './wheels';
import "./assets/css/templatemo-sixteen.css";


const Category = () => {
    return (
        <>
            <div className="latest-products">
                <div class="containerr">
                    <h1 id='cat'>
                        Shop by Category</h1>
                    <div className='category' onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }}>
                        <section class="products">
                            <Link className='Link_cat' to="/Wheels & Rims">
                                <div class="product-card" >
                                    <div class="product-image">
                                        <h1 class="tit" >Wheels & Rims</h1>
                                        <img width="250px" src="https://static.wixstatic.com/media/c837a6_1794f38eb82742b3829506073f5f267d~mv2.jpg/v1/fill/w_190,h_254,q_90/c837a6_1794f38eb82742b3829506073f5f267d~mv2.webp 1x, https://static.wixstatic.com/media/c837a6_1794f38eb82742b3829506073f5f267d~mv2.jpg/v1/fill/w_380,h_508,q_90/c837a6_1794f38eb82742b3829506073f5f267d~mv2.webp 2x, https://static.wixstatic.com/media/c837a6_1794f38eb82742b3829506073f5f267d~mv2.jpg/v1/fill/w_570,h_762,q_90/c837a6_1794f38eb82742b3829506073f5f267d~mv2.webp 3x, https://static.wixstatic.com/media/c837a6_1794f38eb82742b3829506073f5f267d~mv2.jpg/v1/fill/w_760,h_1016,q_90/c837a6_1794f38eb82742b3829506073f5f267d~mv2.webp 4x, https://static.wixstatic.com/media/c837a6_1794f38eb82742b3829506073f5f267d~mv2.jpg/v1/fill/w_806,h_1077,q_90/c837a6_1794f38eb82742b3829506073f5f267d~mv2.webp 5x" ></img>
                                    </div>
                                </div>

                            </Link>
                            <Link  className='Link_cat' to="/Engine">
                                <div class="product-card" >
                                    <div class="product-image">
                                        <h1 class="tit" >Engine</h1>
                                        <img width="250px" src="https://static.wixstatic.com/media/c837a6_293e1092367a423cbf74356775023db3~mv2.jpg/v1/fill/w_190,h_254,q_90/c837a6_293e1092367a423cbf74356775023db3~mv2.webp 1x, https://static.wixstatic.com/media/c837a6_293e1092367a423cbf74356775023db3~mv2.jpg/v1/fill/w_380,h_508,q_90/c837a6_293e1092367a423cbf74356775023db3~mv2.webp 2x, https://static.wixstatic.com/media/c837a6_293e1092367a423cbf74356775023db3~mv2.jpg/v1/fill/w_570,h_762,q_90/c837a6_293e1092367a423cbf74356775023db3~mv2.webp 3x, https://static.wixstatic.com/media/c837a6_293e1092367a423cbf74356775023db3~mv2.jpg/v1/fill/w_760,h_1016,q_90/c837a6_293e1092367a423cbf74356775023db3~mv2.webp 4x, https://static.wixstatic.com/media/c837a6_293e1092367a423cbf74356775023db3~mv2.jpg/v1/fill/w_806,h_1077,q_90/c837a6_293e1092367a423cbf74356775023db3~mv2.webp 5x"></img>
                                    </div>
                                </div>
                            </Link>
                            <Link  className='Link_cat' to="/BodyParts">
                            <div class="product-card">
                                <div class="product-image">
                                    <h1 class="tit" >Vehicle Body Parts</h1>
                                    <img width="250px" src="https://static.wixstatic.com/media/c837a6_5e257b4fbeb6437e9c512a2c7ff399f0~mv2.jpg/v1/fill/w_190,h_254,q_90/c837a6_5e257b4fbeb6437e9c512a2c7ff399f0~mv2.webp 1x, https://static.wixstatic.com/media/c837a6_5e257b4fbeb6437e9c512a2c7ff399f0~mv2.jpg/v1/fill/w_380,h_508,q_90/c837a6_5e257b4fbeb6437e9c512a2c7ff399f0~mv2.webp 2x, https://static.wixstatic.com/media/c837a6_5e257b4fbeb6437e9c512a2c7ff399f0~mv2.jpg/v1/fill/w_570,h_762,q_90/c837a6_5e257b4fbeb6437e9c512a2c7ff399f0~mv2.webp 3x, https://static.wixstatic.com/media/c837a6_5e257b4fbeb6437e9c512a2c7ff399f0~mv2.jpg/v1/fill/w_760,h_1016,q_90/c837a6_5e257b4fbeb6437e9c512a2c7ff399f0~mv2.webp 4x, https://static.wixstatic.com/media/c837a6_5e257b4fbeb6437e9c512a2c7ff399f0~mv2.jpg/v1/fill/w_806,h_1077,q_90/c837a6_5e257b4fbeb6437e9c512a2c7ff399f0~mv2.webp 5x"></img>
                                </div>

                            </div>
                            </Link>
                            <Link  className='Link_cat' to="/Accessories">
                            <div class="product-card">
                                <div class="product-image">
                                    <h1 class="tit" >Accessories</h1>
                                    <img width="250px" src="https://static.wixstatic.com/media/c837a6_a05241ae28f54b69b0cc1a4e87df9462~mv2.jpg/v1/fill/w_190,h_254,q_90/c837a6_a05241ae28f54b69b0cc1a4e87df9462~mv2.webp 1x, https://static.wixstatic.com/media/c837a6_a05241ae28f54b69b0cc1a4e87df9462~mv2.jpg/v1/fill/w_380,h_508,q_90/c837a6_a05241ae28f54b69b0cc1a4e87df9462~mv2.webp 2x, https://static.wixstatic.com/media/c837a6_a05241ae28f54b69b0cc1a4e87df9462~mv2.jpg/v1/fill/w_570,h_762,q_90/c837a6_a05241ae28f54b69b0cc1a4e87df9462~mv2.webp 3x, https://static.wixstatic.com/media/c837a6_a05241ae28f54b69b0cc1a4e87df9462~mv2.jpg/v1/fill/w_760,h_1016,q_90/c837a6_a05241ae28f54b69b0cc1a4e87df9462~mv2.webp 4x, https://static.wixstatic.com/media/c837a6_a05241ae28f54b69b0cc1a4e87df9462~mv2.jpg/v1/fill/w_806,h_1077,q_90/c837a6_a05241ae28f54b69b0cc1a4e87df9462~mv2.webp 5x"></img>
                                </div>
                            </div>
                            </Link>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category;