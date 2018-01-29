import React from 'react';
import {
  Badge,
  Card, 
  CardGroup, 
  CardTitle, 
  CardText, 
  Col, 
  Container, 
  Input, 
  InputGroup, 
  Row
} from 'reactstrap';

function ScorePanelBottom(props) {
  const isScoreLarge = props.isScoreLarge;
  const scoreValue = props.scoreValue;
  if (isScoreLarge) {
    return(
      <h2>{scoreValue}</h2>
    );
  } else {
    return(
      <h4>{scoreValue}</h4>
    );
  }
}

// const ScorePanelBottom = (props) => (
//   {
//     props.isScoreLarge ?
//     <h2>{props.scoreValue}</h2> :
//     <h4>{props.scoreValue}</h4>
//   }
//     props.canChangeScore ? 
//     <Row>
//       <Col className="text-right"><Badge href="#">+</Badge></Col>
//       <Col xs="auto">
//         <ScorePanelValue 
//           isScoreLarge={props.isScoreLarge} 
//           scoreValue={props.scoreValue} 
//         />
//       </Col>
//       <Col className="text-left"><Badge href="#">-</Badge></Col>
//     </Row> :
//     <ScorePanelValue 
//       isScoreLarge={props.isScoreLarge} 
//       scoreValue={props.scoreValue} 
//     />
//   }
// );

export default ScorePanelBottom;