import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const App = () => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://i.pinimg.com/564x/f1/24/64/f124646d85ee99c99f83596db10f080c.jpg" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);
export default Card;