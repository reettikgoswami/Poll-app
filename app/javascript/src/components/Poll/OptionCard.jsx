import React from "react";

function OptionCard(props) {
  return (
    <div className="w-4/5 pb-2">
      <div className="ui  segment flex items-center">
        <div className="ui fitted toggle checkbox">
          <input
            type="radio"
            className="hidden"
            readOnly=""
            tabIndex="0"
            // checked="true"
          />
          <label></label>
        </div>
        <div className="pl-4 text-2xl font-bold text-gray-700">Afternoon</div>
      </div>
    </div>
  );
}

export default OptionCard;
