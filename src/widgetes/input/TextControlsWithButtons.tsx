// TextControlWithButtons.tsx
import { observer } from "mobx-react-lite";
import React from "react";
import { ControlViewModel } from "../../store";
import "./control-input.css";
import "../../consts/_colors.css";

interface TextControlWithButtonsProps {
  viewModel: ControlViewModel;
}

export const TextControlWithButtons: React.FC<TextControlWithButtonsProps> =
  observer(({ viewModel }) => {
    const leftButtons = viewModel.buttons.filter(
      (btn) => btn.position === "left"
    );
    const rightButtons = viewModel.buttons.filter(
      (btn) => btn.position === "right"
    );

    return (
      <div className="container">
        <div className="containerWrapper">
          {leftButtons.map((button, index) => (
            <button
              className="InputButton"
              key={`left-${index}`}
              onClick={() => button.onClick(viewModel.value)}
            >
              {button.text}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={viewModel.value}
          onChange={(e) => viewModel.setValue(e.target.value)}
          className="containerInput"
        />

        <div style={{ display: "flex", marginLeft: "5px" }}>
          {rightButtons.map((button, index) => (
            <button
              key={`right-${index}`}
              onClick={() => button.onClick(viewModel.value)}
              className="InputButton"
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    );
  });
