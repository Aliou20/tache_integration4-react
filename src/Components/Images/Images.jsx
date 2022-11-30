import "./Images.css";
import React from "react";
import {Row , Col} from 'react-bootstrap'
import image1 from "../../Assets/img1.png"
import image2 from "../../Assets/img_orange.png"
import image3 from "../../Assets/ice-cream.jpg"
import image4 from "../../Assets/sugar.jpg"

function Images() {
  const mesImages = [image1,image2 , image3 , image4]
  return (
    <Row className='conteur_block_image'>
      {
        mesImages.map((image) => ( 
          <Col md={3} className="conteneur_mesImages p-0">
            <img src={image} alt="image" className="mesImages"/>
          </Col>
        ))
      }
    </Row>
  );
};

export default Images;
