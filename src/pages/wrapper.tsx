import React from "react";
import { observer } from "mobx-react-lite";
import { TextWithButton, Autocomplete } from "../components";

export const Wrapper: React.FC = observer(() => {
  return (
    <>
      <TextWithButton />
      <Autocomplete />
    </>
  );
});
