import React from "react";
import { baseURl } from "../shared/baseURL";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import Loading from "./LoadingComponent";
import { FadeTransform } from "react-animation-components";

const RenderCard = (props) => {
  if (props.isLoading) {
    return <Loading />;
  } else if (props.error) {
    return <h4>{props.error}</h4>;
  } else {
    return (
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
        <Card>
          <CardImg src={baseURl + props.item.image} alt={props.item.name} />
          <CardBody>
            <CardTitle>{props.item.name}</CardTitle>
            {props.item.designation ? (
              <CardSubtitle>{props.item.designation}</CardSubtitle>
            ) : null}
            <CardText>{props.item.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
  }
};

export default function HomeComponent(props) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.dish}
            isLoading={props.dishesLoading}
            error={props.dishesError}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.promotion}
            isLoading={props.promosLoading}
            error={props.promosError}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
}
