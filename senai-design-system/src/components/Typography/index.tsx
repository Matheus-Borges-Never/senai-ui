
import styled from 'styled-components';

interface TypographyProps {
  weight?: 'regular' | 'medium' | 'bold';
}

const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export const HeadingXL = styled.h1<TypographyProps>`
  font-family: 'NeoSansPro', sans-serif;
  font-size: 60px;
  line-height: 78px;
  font-weight: ${({ weight }) => fontWeights[weight || 'regular']};
`;

export const HeadingLG = styled.h2<TypographyProps>`
  font-family: 'NeoSansPro', sans-serif;
  font-size: 48px;
  line-height: 64px;
  font-weight: ${({ weight }) => fontWeights[weight || 'regular']};
`;

export const HeadingMD = styled.h3<TypographyProps>`
  font-family: 'NeoSansPro', sans-serif;
  font-size: 34px;
  line-height: 48px;
  font-weight: ${({ weight }) => fontWeights[weight || 'regular']};
`;

export const TitleXL = styled.h4<TypographyProps>`
  font-family: 'NeoSansPro', sans-serif;
  font-size: 24px;
  line-height: 34px;
  font-weight: ${({ weight }) => fontWeights[weight || 'regular']};230,,
`;

export const TitleLG = styled.h5<TypographyProps>`
  font-family: 'NeoSansPro', sans-serif;
  font-size: 20px;
  line-height: 30px;
  font-weight: ${({ weight }) => fontWeights[weight || 'regular']};
`;

export const BodyXL = styled.p<TypographyProps>`
  font-family: 'NeoSansPro', sans-serif;
  font-size: 18px;
  line-height: 28px;
  font-weight: ${({ weight }) => fontWeights[weight || 'regular']};
`;

export const BodyLG = styled.p<TypographyProps>`
  font-family: 'NeoSansPro', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: ${({ weight }) => fontWeights[weight || 'regular']};
`;

export const BodyMD = styled.p<TypographyProps>`
  font-family: 'NeoSansPro', sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: ${({ weight }) => fontWeights[weight || 'regular']};
`;

export const BodySM = styled.p<TypographyProps>`
  font-family: 'NeoSansPro', sans-serif;
  font-size: 12px;
  line-height: 18px;
  font-weight: ${({ weight }) => fontWeights[weight || 'regular']};
`;

export const Caption = styled.span<TypographyProps>`
  font-family: 'NeoSansPro', sans-serif;
  font-size: 10px;
  line-height: 14px;
  font-weight: ${({ weight }) => fontWeights[weight || 'regular']};
`;
