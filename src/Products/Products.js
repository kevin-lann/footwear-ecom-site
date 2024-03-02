import "./Products.css"
import {AiFillStar} from 'react-icons/ai'
import{BsFillBagHeartFill} from 'react-icons/bs'

const Products = () => {
  return <>
    <section className="card-container">
      <section className="card">

        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" 
          alt="shoe"
          className="card-img"/>
        
        <div className="card-details">

          <h3 className="card-title">Shoe</h3>

          <section className="card-reviews">
            <AiFillStar className="ratings-start"/>
            <AiFillStar className="ratings-start"/>
            <AiFillStar className="ratings-start"/>
            <AiFillStar className="ratings-start"/>
            <AiFillStar className="ratings-start"/>
            <span className="total-reviews">5</span>
          </section>

          <section className="card-price">
            <div className="price">
              <del>220</del> $150
            </div>

            <div className="bag-icon">
              <BsFillBagHeartFill/>
            </div>

          </section>
        </div>

      </section>
    </section>
  </>
}

export default Products