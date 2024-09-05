import React from "react";
import {
  HeadingXL,
  HeadingLG,
  HeadingMD,
  TitleXL,
  TitleLG,
  BodyXL,
  BodyLG,
  Caption,
  BodySM,
  BodyMD,
} from "senai-design-system";

export default function Typography() {
  return (
    <>
      <div>
        <HeadingXL weight="bold">A design system is essentially a collection of rules, constraints, and principles implemented in design and code.</HeadingXL>
        <HeadingLG weight="medium">Heading LG - Medium</HeadingLG>
        <HeadingMD weight="regular">Heading MD - Regular</HeadingMD>

        <TitleXL weight="bold">Title XL - Bold</TitleXL>
        <TitleLG weight="medium">Title LG - Medium</TitleLG>

        <BodyXL weight="regular">Body XL - Regular</BodyXL>
        <BodyLG weight="medium">Body LG - Medium</BodyLG>
        <BodyMD weight="bold">Body MD - Bold</BodyMD>
        <BodySM weight="regular">Body SM - Regular</BodySM>

        <Caption weight="bold">Caption - Bold</Caption>
      </div>
    </>
  );
}
