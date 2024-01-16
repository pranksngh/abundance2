// SliderCard.js
import React from 'react';
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: -10px
`;

export const Card = styled.div`
  flex: 0 1 calc(50% - 20px);
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex: 0 1 calc(100% - 20px);
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Name = styled.h2`
  margin-bottom: 5px;
`;

export const Bio = styled.p`
  margin-bottom: 10px;
`;

export const Designation = styled.p`
  font-style: italic;
`;

const SliderCard = ({ photo, name, bio, designation }) => {
  return (
    <Card>
      <Image src={photo} alt={name} />
      <Name>{name}</Name>
      <Bio>{bio}</Bio>
      <Designation>{designation}</Designation>
    </Card>
  );
};

export default SliderCard;
