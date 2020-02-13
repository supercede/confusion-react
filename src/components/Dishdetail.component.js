import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

const RenderDish = ({dish}) => {
  if (dish) {
    console.log(dish);
    
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name}></CardImg>
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }
  return <div></div>;
}

const RenderComments = ({ dish }) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  if (dish) {
    return (
      <div>
        <h4>Comments</h4>
        {dish.comments ? (
          <ul className='list-unstyled'>
            {dish.comments.map((comment, i) => (
              <li key={i}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author},{" "}
                  {new Date(comment.date).toLocaleDateString(
                    "en-US",
                    options
                  )}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <div>No comments</div>
        )}
      </div>
    );
  }
  return <div></div>;
}

const Dishdetail = ({ dish }) => {
    return (
      <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-5 m-1'>
          <RenderDish dish = {dish} />
        </div>
        <div className='col-12 col-md-5 m-1'>
          <RenderComments dish = {dish} />
        </div>
      </div>
      </div>
    );
}

export default Dishdetail;
