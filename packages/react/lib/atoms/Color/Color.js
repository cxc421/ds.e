import React from 'react';

const Color = ({ hexCode, height, width }) => {
    return React.createElement("div", { style: { backgroundColor: hexCode, height, width } });
};

export { Color as default };
//# sourceMappingURL=Color.js.map
