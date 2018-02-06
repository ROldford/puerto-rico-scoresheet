import React from 'react';
import {
  Badge, 
  Col, 
  Row
} from 'reactstrap';
import PropTypes from 'prop-types';

function ScorePanelDisplayMutable(props) {
  return(
    <Row>
      <Col className="px-1 text-right">
        <Badge onClick={props.handleVpChipChange} href="#" id="increment">
          +
        </Badge>
      </Col>
      <Col xs="auto" className="px-1">
        {
          props.isScoreLarge ?
          <h2>{props.scoreValue}</h2> :
          <h4>{props.scoreValue}</h4>
        }
      </Col>
      <Col className="px-1 text-left">
        <Badge onClick={props.handleVpChipChange} href="#" id="decrement">
          -
        </Badge>
      </Col>
    </Row>
  );
}

ScorePanelDisplayMutable.propTypes = {
  handleVpChipChange: PropTypes.func.isRequired, 
  isScoreLarge: PropTypes.bool.isRequired, 
  scoreValue: PropTypes.number.isRequired, 
}

export default ScorePanelDisplayMutable;