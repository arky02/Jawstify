import styled from 'styled-components';
import greenCircle from '@/public/assets/icons/greenCircle.svg';
import crown from '@/public/assets/icons/crown.svg';
import rightPage from '@/public/assets/icons/rightPage.svg';
import Image from 'next/image';
import { onTablet, onMobile } from '@/styles/mediaQuery';
import { fontStyle } from '@/styles/fontStyle';
import { COLORS } from '@/styles/palettes';

interface DashBoardButtonProps {
  text: string;
  color: string;
  king: boolean;
}

/**
 * @param text 대시보드 제목
 * @param color 대시보드 ellipse color -> 입맛대로 바꾸시면 될 듯 합니다!
 * @param king 대시보드 생성자 여부 boolean
 */
function DashBoardButton({ text, color, king }: DashBoardButtonProps) {
  return (
    <>
      <StyledButton>
        <StyledWrapper>
          <StyledDiv>
            <StyledCircleImage src={greenCircle} alt="초록원" />
            <StyledInDiv>
              {text}
              {king && <CrownImage src={crown} alt="왕관" />}
            </StyledInDiv>
          </StyledDiv>
          <StyledPageImage src={rightPage} alt="화살표" />
        </StyledWrapper>
      </StyledButton>
    </>
  );
}

export default DashBoardButton;

const StyledButton = styled.button`
  width: 332px;
  height: 70px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${COLORS.GRAY_D9};
  background: ${COLORS.WHITE_FF};
  color: ${COLORS.BLACK_33};
  ${fontStyle(16, 600)};

  ${onTablet} {
    width: 247px;
    height: 68px;
  }
  ${onMobile} {
    width: 260px;
    height: 58px;
    font-size: 1.4rem;
  }
`;
const StyledWrapper = styled.div`
  width: 292px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${onTablet} {
    width: 206px;
  }
  ${onMobile} {
    width: 220px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const StyledInDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const CrownImage = styled(Image)`
  width: 20px;
  height: 16px;
  ${onTablet} {
    width: 17.5px;
    height: 14px;
  }
  ${onMobile} {
    width: 15px;
    height: 12px;
  }
`;
const StyledCircleImage = styled(Image)`
  width: 8px;
  height: 8px;
`;
const StyledPageImage = styled(Image)`
  width: 18px;
  height: 18px;
`;