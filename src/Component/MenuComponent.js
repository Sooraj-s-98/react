import React, { Component } from 'react';
import { Media,Card,CardImg,CardImgOverlay,CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [
                {
                  id: 0,
                  name:'sandwich',
                  image: 'assets/images/sandwich.jpg',
                  category: 'mains',
                  label:'Hot',
                  price:'4.99',
                  description:''                        },
               {
                  id: 1,
                  name:'biriyani',
                  image: 'assets/images/biryani.jpg',
                  category: 'appetizer',
                  label:'',
                  price:'1.99',
                  description:''                        },
               {
                  id: 2,
                  name:'Burger',
                  image: 'assets/images/burger.jpg',
                  category: 'appetizer',
                  label:'New',
                  price:'1.99',
                  description:''                        },
               {
                  id: 3,
                  name:'Cheese pizza',
                  image: 'assets/images/cheese pizza.jpg',
                  category: 'dessert',
                  label:'',
                  price:'2.99',
                  description:''                        }
               ],
        };
    }

    render() {
        const menu = this.state.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 mt-5">
                 <Card>
                      <CardImg width="100%" src={dish.image} alt={dish.name}  />
                         <CardImgOverlay>
                             <CardTitle text-white>{dish.name}</CardTitle>
                         </CardImgOverlay>
                  </Card>
              </div>

            );
        });

        return (
          <div className="container">
            <div className="row">
              <Media list>
                  {menu}
              </Media>
            </div>
          </div>
        );
    }
}

export default Menu;