import "./Clients.css";
import React from "react";
import { Col, Row} from 'react-bootstrap'
import profil1 from "../../Assets/profil1.jpg"
import profil2 from "../../Assets/profil2.jpg"
import profil3 from "../../Assets/profil3.jpg"

function Clients() {

  const profils = [
    {
      name : "Emily R.",
      fonction : "Marketing Director",
      img : profil1,
      para : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      name : "Thomas s.",
      fonction : "Chief Operating Officer",
      img : profil2,
      para : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      name : "Jennie F.",
      fonction : "Business Owner",
      img : profil3,
      para : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ]
  return (
    <div className="card">
      <h2 className="text-center client_title text-muted">CLIENTS TESTIMONIALS</h2>
      <Row className="px-5 align-items-center row_profil">
        {
          profils.map(({name, fonction , img , para} ) => (
            <Col md={4} className="col_profil">
              <div className="card_profil">
                <div className="conteneur_img_profil">
                    <img src={img} alt="profil" className="profil"/>
                </div>
                <div className="card_text fw-200 text-muted text-center">{para}</div>
                <h3 className="tilte_profil">{name}</h3>
                <div className="text-muted mb-5">{fonction}</div>
              </div>
            </Col> 
          ))
        }
      </Row>
    </div>
  );
};

export default Clients;
