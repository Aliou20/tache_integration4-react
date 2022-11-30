import "./Services.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
import eggImg from "../../Assets/egg.jpg"
import cupImg from "../../Assets/cup.jpg"
import appleImg from "../../Assets/apple.png"
import orangeImg from "../../Assets/orange.png"

function Services() {
  const data = [
    {
      para : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      title : "Transform your brand",
      button : "LEARN MORE",
      image : eggImg,
      id : 1
    },
    {
      para : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      title : "Stand out the right audience",
      button : "LEARN MORE",
      image : cupImg,
      id:2
    }
  ]

  const data1 = [
    {
      title : "Graphic Design",
      para : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image : appleImg,
      id : 3
    },
    {
      title : "Photography",
      para : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image : orangeImg,
      id : 4
    }
  ]
  return (
    <div className="services">
        {
          data.map(({para , title , button , image , id}) => (
          <Row key={id} className="align-items-center">
            <Col md={6} xs={12} className={id === 2 ? 'order-md-2 d-flex justify-content-center align-items-start flex-column text_egg m-0 p-0 bg-white ' : 'order-md-1 d-flex justify-content-center align-items-start flex-column text_egg m-0 p-0 bg-white'}>
              <h2 className="titleEgg mx-auto">{title}<br/>brand</h2>
              <p className="mx-auto paraEggg">{para}</p>
              <div className={id === 1 ? "border_bottom_yellow bnt_services mx-auto border_bottom" : "border_bottom_pink bnt_services mx-auto border_bottom"}>{button}</div>
            </Col>
            <Col md={6} xs={12} className={id === 2 ? "col_image" : "order-2"} style={{padding : 0}}>
              <div className="conteneur_img">
                <img src={image} alt="egg img" className="imgEgg" />
              </div>
            </Col>
          </Row>  
          ))
        };
         <Row className="mysecond_row">
          {
            data1.map(({title , para , image , id}) => (
              <Col key={id} md={6} xs={12} className={id === 3 ? "background_first_image background_image " : "background_last_image background_image"} style={{padding : 0}}>
                <div className="conteneur_img_second">
                  <img src={image} alt=" img" className={id === 3 ? "img_first_row image_second-row" : "img_last_row image_second-row"} />
                </div>
                <h2 className="text-center text_title">{title}</h2>
                <div className="text-center text_para">{para}</div>
              </Col>
            ))
          }
        </Row>
    </div>
  );
};

export default Services;
