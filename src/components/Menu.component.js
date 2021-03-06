import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';
import { Loading } from "./loadingComponent";
import { baseUrl } from "../shared/baseUrl";

const RenderMenuItems = ({dish, onClick}) => {
  return (
    <Card>
        <Link to={`/menu/${dish.id}`}>
           <CardImg width='100%' src={baseUrl + dish.image} alt={dish.name} />
           <CardImgOverlay>
             <CardTitle className='text-dark bg-white'>{dish.name}</CardTitle>
           </CardImgOverlay>
        </Link>
      </Card>
  )
}

const Menu = (props) => {
  const menu = props.dishes.dishes.map(dish => (
    <div key={dish.id} className='col-12 col-md-5 m-1'>
      <RenderMenuItems dish={dish}/>
    </div>
  ));
    
  if(props.dishes.isLoading) {
    return <Loading />
  }
  else if (props.dishes.errMsg) {
    return (
      <h4>{props.dishes.errMsg}</h4>
    )
  }

  return (
    <div className='container'>
      <div className='row'>
        <Breadcrumb>
          <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className='col-12'>
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className='row'>{menu}</div>
    </div>
  );
}

export default Menu;
