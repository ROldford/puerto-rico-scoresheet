import React from 'react';
import {
  Badge, 
  Col, 
  Row
} from 'reactstrap';
import PropTypes from 'prop-types';

function ScorePanelDisplayMutable(props) {
  return(
    <Row NoGutters>
      <Col className="small-padding text-right">
        <Badge onClick={props.handleScoreChange} href="#" id="increment">
          +
        </Badge>
      </Col>
      <Col xs="auto" className="small-padding">
        {
          props.isScoreLarge ?
          <h2>{props.scoreValue}</h2> :
          <h4>{props.scoreValue}</h4>
        }
      </Col>
      <Col className="small-padding text-left">
        <Badge onClick={props.handleScoreChange} href="#" id="decrement">
          -
        </Badge>
      </Col>
    </Row>
  );
}

ScorePanelDisplayMutable.propTypes = {
  handleScoreChange: PropTypes.func.isRequired, 
  isScoreLarge: PropTypes.bool.isRequired, 
  scoreValue: PropTypes.number.isRequired, 
}

export default ScorePanelDisplayMutable;