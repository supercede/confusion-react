import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';
import { Loading } from './loadingComponent';

function RenderFeaturedCard({ item, isLoading, errMsg }) {
  // console.log(item, isLoading, errMsg);
  
  if(isLoading) {
    return <Loading />
  }
  else if (errMsg) {
    return (
      <h4>{errMsg}</h4>
    )
  }

  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? (
          <CardSubtitle>{item.designation}</CardSubtitle>
        ) : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Home(props) {
  console.log(props);
  
  return (
    <div className='container'>
      <div className='row align-items-start'>
        <div className='col-12 col-md m-1'>
          <RenderFeaturedCard item={props.dish} isLoading={props.dishesLoading} errMsg={props.dishesErrMsg} />
        </div>
        <div className='col-12 col-md m-1'>
          <RenderFeaturedCard item={props.promotion} />
        </div>
        <div className='col-12 col-md m-1'>
          <RenderFeaturedCard item={props.leader} />
        </div>
      </div>
    </div>
  );
}

export default Home;
