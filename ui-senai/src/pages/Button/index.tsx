import React from 'react';
import { BodyLG, BodyMD, BodySM, Button, DisplayG, neutrals500, primary500, primary700 } from 'senai-design-system';

const ButtonLayount = () => {
  return (
    <DisplayG rows={3} columns={4} gap="9px">
        <Button
            backgroundColor={primary500}
            color="#ffffff"
            border={primary500}
            hoverColor={primary700}
            size="large" 
        >
            <BodyLG weight="medium">Large</BodyLG>
        </Button>

        <Button
            backgroundColor={primary500}
            color="#ffffff"
            border={neutrals500}
            hoverColor={primary700}
            size="medium" 
        >
            <BodyMD weight="medium">Medium</BodyMD>
        </Button>

        <Button
            backgroundColor={primary500}
            color="#ffffff"
            border={neutrals500}
            hoverColor={primary700}
            size="small" 
        >
            <BodySM weight="medium">Small</BodySM>
        </Button>

        <Button
            color="#ffffff"
            size="small" 
            disabled
        >
            <BodySM weight="medium">Disabled</BodySM>
        </Button>
    </DisplayG>
  );
};

export default ButtonLayount;