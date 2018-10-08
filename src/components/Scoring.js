import React from 'react';
import {
  Col, 
  Container, 
  Row
} from 'reactstrap';
import PropTypes from 'prop-types';
import ScorePanel from "./ScorePanel"

const Scoring = (props) => (
  <Container>
    <Row>
      <Col>
        <ScorePanel 
          titleText="Total Points" 
          scoreValue={props.totalVpScore} 
          isScoreLarge={true} 
          canChangeScore={false}
        />
      </Col>
    </Row>
    <Row>
      <Col className="px-1">
        <ScorePanel 
          titleText="Chips" 
          scoreValue={props.vpScore.vpChips} 
          isScoreLarge={false} 
          canChangeScore={true}
          changeVpChipCount={changeType => props.changeVpChipCount(changeType)}
        />
      </Col>
      <Col className="px-1">
        <ScorePanel 
          titleText="Buildings" 
          scoreValue={props.vpScore.vpBuildings} 
          isScoreLarge={false} 
          canChangeScore={false}
        />
      </Col>
      <Col className="px-1">
        <ScorePanel 
          titleText="Bonuses" 
          scoreValue={props.vpScore.vpBonuses} 
          isScoreLarge={false} 
          canChangeScore={false}
        />
      </Col>
    </Row>
  </Container>
);

Scoring.propTypes = {
  vpScore: PropTypes.shape({
      vpChips: PropTypes.number, 
      vpBuildings: PropTypes.number, 
      vpBonuses: PropTypes.number
    }).isRequired,
  totalVpScore: PropTypes.number.isRequired
}

export default Scoring;