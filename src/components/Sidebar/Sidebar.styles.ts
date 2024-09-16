import styled from 'styled-components';

export const sidebarContainer = styled.div`
  width: 200px;
  background-color: #f8f8f8;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const generationButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #ef5350;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #d32f2f;
  }
`;
