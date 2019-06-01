import React from 'react';
import {
  Col,
  Container,
  Row
} from 'reactstrap';
import PropTypes from 'prop-types';
import ScoreDisplayLayout from './ScoreDisplayLayout';
import ChipChangeButtonContainer from './ChipChangeButtonContainer';
import * as directions from "../actions/changeDirections";

const ScoringLayout = ({ vpChips, buildingsScore }) => (
  <Container>
    <Row>
      <Col>
        <div className="text-center bordered-round">
          <ScoreDisplayLayout
            titleText="Total Points"
            scoreValue={0}
            isScoreLarge={true}
          />
        </div>
      </Col>
    </Row>
    <Row>
      <Col className="px-1">
        <div className="text-center bordered-round">
          <Row>
            <Col className="px-1 text-right">
              <ChipChangeButtonContainer
                buttonText="+"
                idValue="increment"
                direction={directions.ADD}
                amount={1} />
            </Col>
            <Col xs="auto" className="px-1">
              <ScoreDisplayLayout
                titleText="Chips"
                scoreValue={vpChips}
                isScoreLarge={false} />
            </Col>
            <Col className="px-1 text-left">
              <ChipChangeButtonContainer
                buttonText="-"
                idValue="decrement"
                direction={directions.SUBTRACT}
                amount={1} />
            </Col>
          </Row>
        </div>
      </Col>
      <Col className="px-1">
        <div className="text-center bordered-round">
          <ScoreDisplayLayout
            titleText="Buildings"
            scoreValue={buildingsScore}
            isScoreLarge={false} />
        </div>
      </Col>
      <Col className="px-1">
        <div className="text-center bordered-round">
          <ScoreDisplayLayout
            titleText="Bonuses"
            scoreValue={0}
            isScoreLarge={false} />
        </div>
      </Col>
    </Row>
  </Container>
);

ScoringLayout.propTypes = {
  vpChips: PropTypes.number.isRequired,
  buildingsScore: PropTypes.number.isRequired
}

export default ScoringLayout;


// vpScore: PropTypes.shape({
//     vpChips: PropTypes.number,
//     vpBuildings: PropTypes.number,
//     vpBonuses: PropTypes.number
//   }).isRequired,
// totalVpScore: PropTypes.number.isRequired
