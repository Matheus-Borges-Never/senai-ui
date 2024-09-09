import React from 'react';
import styled from 'styled-components';

interface GridProps {
  rows?: number;
  columns?: number;
  gap?: string;
  children: React.ReactNode;
}

const GridContainer = styled.div<GridProps>`
  display: grid;
  grid-template-rows: repeat(${props => props.rows || 1}, 1fr);
  grid-template-columns: repeat(${props => props.columns || 1}, 1fr);
  gap: ${props => props.gap || '10px'};
  width: 100%;
`;

export const DisplayG: React.FC<GridProps> = ({ rows = 1, columns = 1, gap = '10px', children }) => {
  return (
    <GridContainer rows={rows} columns={columns} gap={gap}>
      {children}
    </GridContainer>
  );
};
