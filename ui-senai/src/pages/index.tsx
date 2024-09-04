import React from "react";
import {
  primary50, primary100, primary200, primary300, primary400, primary500, primary600, primary700, primary800, primary900, primary950,
  secondary50, secondary100, secondary200, secondary300, secondary400, secondary500, secondary600, secondary700, secondary800, secondary900, secondary950,
  neutrals50, neutrals100, neutrals150, neutrals200, neutrals300, neutrals400, neutrals500, neutrals600, neutrals700, neutrals800, neutrals900, neutrals950,
  dark50, dark100, dark150, dark200, dark300, dark400, dark500, dark600, dark700, dark800, dark900, dark950,
  danger100, danger200, danger300, danger400, danger500, danger600, danger700,
  success100, success200, success300, success400, success500, success600, success700,
  warning100, warning200, warning300, warning400, warning500, warning600, warning700,
  info100, info200, info300, info400,
} from "senai-design-system";

const colors = {
  primary: [
    { name: "primary50", value: primary50 },
    { name: "primary100", value: primary100 },
    { name: "primary200", value: primary200 },
    { name: "primary300", value: primary300 },
    { name: "primary400", value: primary400 },
    { name: "primary500", value: primary500 },
    { name: "primary600", value: primary600 },
    { name: "primary700", value: primary700 },
    { name: "primary800", value: primary800 },
    { name: "primary900", value: primary900 },
    { name: "primary950", value: primary950 },
  ],
  secondary: [
    { name: "secondary50", value: secondary50 },
    { name: "secondary100", value: secondary100 },
    { name: "secondary200", value: secondary200 },
    { name: "secondary300", value: secondary300 },
    { name: "secondary400", value: secondary400 },
    { name: "secondary500", value: secondary500 },
    { name: "secondary600", value: secondary600 },
    { name: "secondary700", value: secondary700 },
    { name: "secondary800", value: secondary800 },
    { name: "secondary900", value: secondary900 },
    { name: "secondary950", value: secondary950 },
  ],
  neutrals: [
    { name: "neutrals50", value: neutrals50 },
    { name: "neutrals100", value: neutrals100 },
    { name: "neutrals150", value: neutrals150 },
    { name: "neutrals200", value: neutrals200 },
    { name: "neutrals300", value: neutrals300 },
    { name: "neutrals400", value: neutrals400 },
    { name: "neutrals500", value: neutrals500 },
    { name: "neutrals600", value: neutrals600 },
    { name: "neutrals700", value: neutrals700 },
    { name: "neutrals800", value: neutrals800 },
    { name: "neutrals900", value: neutrals900 },
    { name: "neutrals950", value: neutrals950 },
  ],
  dark: [
    { name: "dark50", value: dark50 },
    { name: "dark100", value: dark100 },
    { name: "dark150", value: dark150 },
    { name: "dark200", value: dark200 },
    { name: "dark300", value: dark300 },
    { name: "dark400", value: dark400 },
    { name: "dark500", value: dark500 },
    { name: "dark600", value: dark600 },
    { name: "dark700", value: dark700 },
    { name: "dark800", value: dark800 },
    { name: "dark900", value: dark900 },
    { name: "dark950", value: dark950 },
  ],
  danger: [
    { name: "danger100", value: danger100 },
    { name: "danger200", value: danger200 },
    { name: "danger300", value: danger300 },
    { name: "danger400", value: danger400 },
    { name: "danger500", value: danger500 },
    { name: "danger600", value: danger600 },
    { name: "danger700", value: danger700 },
  ],
  success: [
    { name: "success100", value: success100 },
    { name: "success200", value: success200 },
    { name: "success300", value: success300 },
    { name: "success400", value: success400 },
    { name: "success500", value: success500 },
    { name: "success600", value: success600 },
    { name: "success700", value: success700 },
  ],
  warning: [
    { name: "warning100", value: warning100 },
    { name: "warning200", value: warning200 },
    { name: "warning300", value: warning300 },
    { name: "warning400", value: warning400 },
    { name: "warning500", value: warning500 },
    { name: "warning600", value: warning600 },
    { name: "warning700", value: warning700 },
  ],
  info: [
    { name: "info100", value: info100 },
    { name: "info200", value: info200 },
    { name: "info300", value: info300 },
    { name: "info400", value: info400 },
  ],
};

export default function Home() {
  return (
    <div style={{ backgroundColor: '#000', padding: '20px', minHeight: '100vh' }}>
      {Object.entries(colors).map(([category, shades]) => (
        <div key={category} style={{ marginBottom: '20px' }}>
          <h2 style={{ color: '#fff' }}>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {shades.map((shade) => (
              <div key={shade.name} style={{ margin: '5px' }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: shade.value,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    border: '1px solid #fff',
                    borderRadius: '4px',
                    fontSize: '10px',
                    textAlign: 'center',
                  }}
                >
                  {shade.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
