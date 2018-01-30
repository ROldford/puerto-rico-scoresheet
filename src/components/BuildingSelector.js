import React from 'react';
import {
  Card, 
  CardSubtitle, 
  CardTitle, 
  CardHeader, 
  Col, 
  Container, 
  Row
} from 'reactstrap';
import Building from "./Building";

/*const BuildingSelector = () => (
  <Card body className="text-center">
    <CardTitle>
      BuildingSelector test card
    </CardTitle>
    <CardSubtitle>
      This is a test card for the BuildingSelector.
    </CardSubtitle>
  </Card>
);*/

const BuildingSelector = () => (
  <Container>
    <Row>
      <Col>
        <Card className="text-center">
          <CardHeader>
            1
          </CardHeader>
        </Card>
        <Building 
          buildingName="Test 1" 
          buildingType="violet" 
          isBuilt={false}
        />
        <Building 
          buildingName="Test 2" 
          buildingType="production-large" 
          isBuilt={true}
        />
        <Building 
          buildingName="Test 3" 
          buildingType="production-small" 
          isBuilt={false}
        />
      </Col>
      <Col>
        <Card className="text-center">
          <CardHeader>
            2
          </CardHeader>
        </Card>
        <Building 
          buildingName="Test 1" 
          buildingType="violet" 
          isBuilt={false}
        />
        <Building 
          buildingName="Test 2" 
          buildingType="production-large" 
          isBuilt={true}
        />
        <Building 
          buildingName="Test 3" 
          buildingType="production-small" 
          isBuilt={false}
        />
      </Col>
      <Col>
        <Card className="text-center">
          <CardHeader>
            3
          </CardHeader>
        </Card>
        <Building 
          buildingName="Test 1" 
          buildingType="violet" 
          isBuilt={false}
        />
        <Building 
          buildingName="Test 2" 
          buildingType="production-large" 
          isBuilt={true}
        />
        <Building 
          buildingName="Test 3" 
          buildingType="production-small" 
          isBuilt={false}
        />
      </Col>
      <Col>
        <Card className="text-center">
          <CardHeader>
            4
          </CardHeader>
        </Card>
        <Building 
          buildingName="Test 1" 
          buildingType="violet" 
          isBuilt={false}
        />
        <Building 
          buildingName="Test 2" 
          buildingType="production-large" 
          isBuilt={true}
        />
        <Building 
          buildingName="Test 3" 
          buildingType="production-small" 
          isBuilt={false}
        />
      </Col>      
    </Row>
  </Container>
);

export default BuildingSelector;