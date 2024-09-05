import React from 'react';

import { 
  primary50, primary100, primary200, primary300, primary400, primary500, primary600, primary700, primary800, primary900,
  secondary50, secondary100, secondary200, secondary300, secondary400, secondary500, secondary600, secondary700, secondary800, secondary900,
  neutrals50, neutrals100, neutrals200, neutrals300, neutrals400, neutrals500, neutrals600, neutrals700, neutrals800, neutrals900,
  dark50, dark100, dark200, dark300, dark400, dark500, dark600, dark700, dark800, dark900,
  danger100, danger200, danger300, danger400, danger500, danger600, danger700,
  success100, success200, success300, success400, success500, success600, success700,
  warning100, warning200, warning300, warning400, warning500, warning600, warning700,
  info100, info200, info300, info400
} from "senai-design-system";

export default function Color() {
  const colorBoxStyle = (color: string) => ({
    backgroundColor: color,
    color: '#fff',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '4px',
  });

  return (
    <div>
      <h2 style={{ color: primary500 }}>Primary Colors</h2>
      <div style={colorBoxStyle(primary50)}>Primary 50 - {primary50}</div>
      <div style={colorBoxStyle(primary100)}>Primary 100 - {primary100}</div>
      <div style={colorBoxStyle(primary200)}>Primary 200 - {primary200}</div>
      <div style={colorBoxStyle(primary300)}>Primary 300 - {primary300}</div>
      <div style={colorBoxStyle(primary400)}>Primary 400 - {primary400}</div>
      <div style={colorBoxStyle(primary500)}>Primary 500 - {primary500}</div>
      <div style={colorBoxStyle(primary600)}>Primary 600 - {primary600}</div>
      <div style={colorBoxStyle(primary700)}>Primary 700 - {primary700}</div>
      <div style={colorBoxStyle(primary800)}>Primary 800 - {primary800}</div>
      <div style={colorBoxStyle(primary900)}>Primary 900 - {primary900}</div>

      <h2 style={{ color: secondary500 }}>Secondary Colors</h2>
      <div style={colorBoxStyle(secondary50)}>Secondary 50 - {secondary50}</div>
      <div style={colorBoxStyle(secondary100)}>Secondary 100 - {secondary100}</div>
      <div style={colorBoxStyle(secondary200)}>Secondary 200 - {secondary200}</div>
      <div style={colorBoxStyle(secondary300)}>Secondary 300 - {secondary300}</div>
      <div style={colorBoxStyle(secondary400)}>Secondary 400 - {secondary400}</div>
      <div style={colorBoxStyle(secondary500)}>Secondary 500 - {secondary500}</div>
      <div style={colorBoxStyle(secondary600)}>Secondary 600 - {secondary600}</div>
      <div style={colorBoxStyle(secondary700)}>Secondary 700 - {secondary700}</div>
      <div style={colorBoxStyle(secondary800)}>Secondary 800 - {secondary800}</div>
      <div style={colorBoxStyle(secondary900)}>Secondary 900 - {secondary900}</div>

      <h2 style={{ color: neutrals500 }}>Neutral Colors</h2>
      <div style={colorBoxStyle(neutrals50)}>Neutrals 50 - {neutrals50}</div>
      <div style={colorBoxStyle(neutrals100)}>Neutrals 100 - {neutrals100}</div>
      <div style={colorBoxStyle(neutrals200)}>Neutrals 200 - {neutrals200}</div>
      <div style={colorBoxStyle(neutrals300)}>Neutrals 300 - {neutrals300}</div>
      <div style={colorBoxStyle(neutrals400)}>Neutrals 400 - {neutrals400}</div>
      <div style={colorBoxStyle(neutrals500)}>Neutrals 500 - {neutrals500}</div>
      <div style={colorBoxStyle(neutrals600)}>Neutrals 600 - {neutrals600}</div>
      <div style={colorBoxStyle(neutrals700)}>Neutrals 700 - {neutrals700}</div>
      <div style={colorBoxStyle(neutrals800)}>Neutrals 800 - {neutrals800}</div>
      <div style={colorBoxStyle(neutrals900)}>Neutrals 900 - {neutrals900}</div>

      <h2 style={{ color: dark500 }}>Dark Mode Colors</h2>
      <div style={colorBoxStyle(dark50)}>Dark 50 - {dark50}</div>
      <div style={colorBoxStyle(dark100)}>Dark 100 - {dark100}</div>
      <div style={colorBoxStyle(dark200)}>Dark 200 - {dark200}</div>
      <div style={colorBoxStyle(dark300)}>Dark 300 - {dark300}</div>
      <div style={colorBoxStyle(dark400)}>Dark 400 - {dark400}</div>
      <div style={colorBoxStyle(dark500)}>Dark 500 - {dark500}</div>
      <div style={colorBoxStyle(dark600)}>Dark 600 - {dark600}</div>
      <div style={colorBoxStyle(dark700)}>Dark 700 - {dark700}</div>
      <div style={colorBoxStyle(dark800)}>Dark 800 - {dark800}</div>
      <div style={colorBoxStyle(dark900)}>Dark 900 - {dark900}</div>

      <h2 style={{ color: danger500 }}>Danger Colors</h2>
      <div style={colorBoxStyle(danger100)}>Danger 100 - {danger100}</div>
      <div style={colorBoxStyle(danger200)}>Danger 200 - {danger200}</div>
      <div style={colorBoxStyle(danger300)}>Danger 300 - {danger300}</div>
      <div style={colorBoxStyle(danger400)}>Danger 400 - {danger400}</div>
      <div style={colorBoxStyle(danger500)}>Danger 500 - {danger500}</div>
      <div style={colorBoxStyle(danger600)}>Danger 600 - {danger600}</div>
      <div style={colorBoxStyle(danger700)}>Danger 700 - {danger700}</div>

      <h2 style={{ color: success500 }}>Success Colors</h2>
      <div style={colorBoxStyle(success100)}>Success 100 - {success100}</div>
      <div style={colorBoxStyle(success200)}>Success 200 - {success200}</div>
      <div style={colorBoxStyle(success300)}>Success 300 - {success300}</div>
      <div style={colorBoxStyle(success400)}>Success 400 - {success400}</div>
      <div style={colorBoxStyle(success500)}>Success 500 - {success500}</div>
      <div style={colorBoxStyle(success600)}>Success 600 - {success600}</div>
      <div style={colorBoxStyle(success700)}>Success 700 - {success700}</div>

      <h2 style={{ color: warning500 }}>Warning Colors</h2>
      <div style={colorBoxStyle(warning100)}>Warning 100 - {warning100}</div>
      <div style={colorBoxStyle(warning200)}>Warning 200 - {warning200}</div>
      <div style={colorBoxStyle(warning300)}>Warning 300 - {warning300}</div>
      <div style={colorBoxStyle(warning400)}>Warning 400 - {warning400}</div>
      <div style={colorBoxStyle(warning500)}>Warning 500 - {warning500}</div>
      <div style={colorBoxStyle(warning600)}>Warning 600 - {warning600}</div>
      <div style={colorBoxStyle(warning700)}>Warning 700 - {warning700}</div>

      <h2 style={{ color: info400 }}>Info Colors</h2>
      <div style={colorBoxStyle(info100)}>Info 100 - {info100}</div>
      <div style={colorBoxStyle(info200)}>Info 200 - {info200}</div>
      <div style={colorBoxStyle(info300)}>Info 300 - {info300}</div>
      <div style={colorBoxStyle(info400)}>Info 400 - {info400}</div>
    </div>
  );
};
