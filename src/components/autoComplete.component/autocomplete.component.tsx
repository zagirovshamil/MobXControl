import {
  AutocompleteViewModel,
  AutocompleteControl,
} from "../../widgetes/autocomplete";
import "./autocomplete.css";
import "../../consts/_colors.css";

export const Autocomplete = () => {
  const autocomplete3ViewModel = new AutocompleteViewModel(3);
  const autocomplete10ViewModel = new AutocompleteViewModel(10);

  return (
    <div className="autocomplete wrapper">
      <AutocompleteControl viewModel={autocomplete3ViewModel} />
      <AutocompleteControl viewModel={autocomplete10ViewModel} />
    </div>
  );
};
