import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  margin-bottom: ${(props) => (props.spacer ? '50px' : 'none')};
`;

export const H1 = styled.h1`
  color: #ffffff;
`;

export const WrapperLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #252525;
    transition: 0.2s ease-in-out;
  }
`;

export const Text = styled.p`
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
`;

export const WrapperRegister = styled.div`
  border: 1px solid #7e52de;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #7e52de;
    transition: 0.2s ease-in-out;
  }
`;

export const ContainerItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;