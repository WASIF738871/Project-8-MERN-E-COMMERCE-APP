import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from './Banner';
import { getData } from '../../actions/action';
import './Home.css'
import Slide from './Slide';


const MainComponent = () => {

    const products = useSelector((state)=>state.getProductReducer);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getData())
    },[dispatch])

    return (
        <div className='home_section'>
            <div className="banner_part">
                <Banner title = "Deal Of the Day" />
            </div>
            <div className="slide_part">
                <div className="left_slide">
                <Slide title = "Deal of the Day" products={products}/>
                </div>
                <div className="right_slide">
                <h4>Festive Latest Lounches</h4>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimage" />
                <a href="#">see More</a>
                </div>
            </div>

            <Slide title = "Today's Deal" products={products}/>
            <div className="center_img">
                <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" />
            </div>
            <Slide title = "Best Seller" products={products}/>
            <Slide title = "Upto 80% off" products={products}/>
            
        </div>
    )
}

export default MainComponent;