import {
  ButtonConfig,
  ControlViewModel,
} from "../../store/ControlViewModel-store";
import "../../consts/_colors.css";
import "./text-with-button.css";
import { TextControlWithButtons } from "../../widgetes/input/TextControlsWithButtons";

export const TextWithButton = () => {
  const rightControledViewModelFunction: ButtonConfig[] = [
    {
      text: "Очистить",
      onClick: () => rightControlViewModel.setValue(""),
      position: "right",
    },
    {
      text: "Hello World!",
      onClick: () => rightControlViewModel.setValue("Hello world!"),
      position: "right",
    },
  ];

  const leftControledViewModelFunction: ButtonConfig[] = [
    {
      text: "Проверить число",
      onClick: (value: number | string) => {
        if (!isNaN(Number(value))) {
          alert(`Введено число: ${value}`);
        } else {
          alert("Введите число");
        }
      },
      position: "left",
    },
    {
      text: "Показать текст",
      onClick: (value: number | string | null) => {
        if (!value) {
          alert("Введите текст");
        } else {
          alert(`Введенный текст: ${value}`);
        }
      },
      position: "right",
    },
  ];

  const rightControlViewModel: ControlViewModel = new ControlViewModel(
    rightControledViewModelFunction
  );

  const leftControlViewModel = new ControlViewModel(
    leftControledViewModelFunction
  );

  return (
    <div className="textWithButton wrapper">
      <h2>Контрол с 2 кнопками справа</h2>
      <TextControlWithButtons viewModel={rightControlViewModel} />

      <h2>Контрол с 1 кнопкой справа и 1 кнопкой слева</h2>
      <TextControlWithButtons viewModel={leftControlViewModel} />
    </div>
  );
};
