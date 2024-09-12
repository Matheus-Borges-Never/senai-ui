import React from 'react';
import { DisplayG, SenaiLarge, SenaiMedium, SenaiSmall } from 'senai-design-system';

const Logo = () => {
  return (
    <DisplayG rows={1} columns={3} gap="9px">
        <SenaiLarge />

        <SenaiMedium />

        <SenaiSmall />
    </DisplayG>
  );
};

export default Logo;