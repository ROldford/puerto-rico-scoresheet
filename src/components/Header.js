import React from 'react';
import {Jumbotron, Card, CardSubtitle, CardTitle} from 'reactstrap';

// const Header = () => (
//   <Jumbotron>
//     <h4 className="display-4">Puerto Rico Scoresheet</h4>
//     <p className="lead">
//       Helping you figure out how badly you lost since 2018
//     </p>
//   </Jumbotron>
// );

const Header = () => (
  <Card body className="text-center">
    <CardTitle>
      <h4 className="display-4">Puerto Rico Scoresheet</h4>
    </CardTitle>
    <CardSubtitle>
      <p className="lead">
        Helping you figure out how badly you lost since 2018
      </p>
    </CardSubtitle>
  </Card>
);

export default Header;