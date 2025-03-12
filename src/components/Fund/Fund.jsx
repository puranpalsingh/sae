import styled from 'styled-components';
import vector2523 from '../../assets/Vector2523.png';

const FundContainer = styled.div`
  width: 100%;
  padding: 8rem 4rem;
  background: white;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100vw;
    height: 287px;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    background: url(${vector2523}) no-repeat center center;
    background-size: cover;
    border-width: 7px;
    z-index: 0;
    
  }
`;

const FundTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const StepCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  background: white;
  padding: 2rem;
  padding-top: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  background: #000;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #000;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  max-width: 300px;
`;

const DottedLine = styled.div`
  position: absolute;
  top: 40px;
  right: -1rem;
  width: 3rem;
  height: 1px;
  border-top: 3px dotted #ccc;

  &:last-child {
    display: none;
  }
`;

export function Fund() {
  return (
    <FundContainer>
      <FundTitle>HOW TO FUND</FundTitle>
      <StepsContainer>
        <StepCard>
          <StepNumber>1</StepNumber>
          <StepTitle>Choose Your Contribution</StepTitle>
          <StepDescription>
            Select a sponsorship level that fits your generosity—Gold, Silver, or Bronze Sponsor—or donate any amount of your choice.
          </StepDescription>
          <DottedLine />
        </StepCard>
        <StepCard>
          <StepNumber>2</StepNumber>
          <StepTitle>Choose Your Contribution</StepTitle>
          <StepDescription>
            Select a sponsorship level that fits your generosity—Gold, Silver, or Bronze Sponsor—or donate any amount of your choice.
          </StepDescription>
          <DottedLine />
        </StepCard>
        <StepCard>
          <StepNumber>3</StepNumber>
          <StepTitle>Choose Your Contribution</StepTitle>
          <StepDescription>
            Select a sponsorship level that fits your generosity—Gold, Silver, or Bronze Sponsor—or donate any amount of your choice.
          </StepDescription>
        </StepCard>
      </StepsContainer>
    </FundContainer>
  );
} 