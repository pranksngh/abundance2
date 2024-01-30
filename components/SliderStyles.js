// SliderStyles.js
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: -10px; /* Adjust this value to control the gap between cards */
`;

export const Card = styled.div`
  flex: 0 1 calc(33.33% - 20px);
  background-color: #e5e7eb;
  color: #fff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
  margin: 10px; /* Adjust this value to control the gap between cards */

  @media (max-width: 768px) {
    flex: 0 1 calc(100% - 20px);
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Name = styled.h2`
  margin-bottom: 5px;
`;

export const Bio = styled.p`
  margin-bottom: 10px;
  color:#000;
`;

export const Designation = styled.p`
  font-style: bold  ;
  color:#000;   

`;
