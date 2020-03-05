import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle, BreadcrumbItem, Breadcrumb } from "reactstrap";
import { Link } from 'react-router-dom';
import { Loading } from './loadingComponent';
import CommentForm from "./commentForm";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform, Stagger, Fade } from 'react-animation-components';

const RenderDish = ({dish}) => {
  if (dish) {
    return (
      <FadeTransform in
      transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
      }}>
        <Card>
          <CardImg top src={baseUrl + dish.image} alt={dish.name}></CardImg>
          <CardBody>
            <CardTitle><h3>{dish.name}</h3></CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
  }
  return <div></div>;
}

const RenderComments = ({ comments, postComment, dishId }) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  if (comments) {
    return (
      <div>
        <h4>Comments</h4>
        {comments ? (
          <ul className='list-unstyled'>
            <Stagger in>
            {comments.map((comment, i) => (
              <Fade in key={i}>
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
              </Fade>
            ))}
            </Stagger>
          </ul>
        ) : (
          <div>No comments</div>
        )}
      </div>
    );
  }
  return <div></div>;
}

const Dishdetail = (props) => {
    if(props.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    }else if (props.errMsg) {
      return (
        <div className="container">
          <div className="row">
            <h4>{props.errMsg}</h4>
          </div>
        </div>
      );
    }
    return (
      <div className='container'>
        <div className='row'>
        <Breadcrumb>
          <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className='col-12'>
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className='row'>
        <div className='col-12 col-md-5 m-1'>
          <RenderDish dish = {props.dish} />
        </div>
        <div className='col-12 col-md-5 m-1'>
          <RenderComments comments = {props.comments} postComment={props.postComment} dishId={props.dish.id} />
          <CommentForm dishId={props.dish.id} postComment={props.postComment} />
        </div>
      </div>
      </div>
    );
}

export default Dishdetail;
