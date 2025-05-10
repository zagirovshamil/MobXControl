// components/AutocompleteControl/AutocompleteControl.tsx
import React, { useRef, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { AutocompleteViewModel } from "./autocomplete.model";
import "./autocomplete.css";
import "../../consts/_colors.css";
import { PluralText } from "../pluralize/pluralize";

interface AutocompleteControlProps {
  viewModel: AutocompleteViewModel;
}

export const AutocompleteControl: React.FC<AutocompleteControlProps> = observer(
  ({ viewModel }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(event.target as Node)
        ) {
          viewModel.toggleSuggestions(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [viewModel]);

    return (
      <>
        <h1>
          Максимум{" "}
          <PluralText count={viewModel.maxSuggestions} baseWord="подсказ" />
        </h1>
        <div
          ref={wrapperRef}
          style={{
            position: "relative",
            width: "300px",
            margin: "20px 0",
            display: "flex",
            flexDirection: "row",
            color: "white",
          }}
        >
          <input
            type="text"
            value={viewModel.query}
            onChange={(e) => viewModel.setQuery(e.target.value)}
            onFocus={() => viewModel.toggleSuggestions(true)}
            placeholder="Начните вводить название страны..."
            // style={{
            //   width: "100%",
            //   padding: "10px",
            //   fontSize: "16px",
            //   border: "1px solid #ccc",
            //   borderRadius: "4px",
            // }}
            className={
              viewModel.showSuggestions
                ? "autocompleteInput"
                : "openAutocompleteInput"
            }
          />

          {viewModel.showSuggestions && (
            <div className="openInput">
              {viewModel.isLoading ? (
                <div className="viewModel">Загрузка...</div>
              ) : viewModel.error ? (
                <div className="error">{viewModel.error}</div>
              ) : viewModel.suggestions.length === 0 ? (
                <div className="viewModel">Совпадений не найдено</div>
              ) : (
                viewModel.suggestions.map((suggestion, index) => (
                  <div
                    key={`${suggestion.name}-${index}`}
                    onClick={() => viewModel.selectSuggestion(suggestion)}
                    className="complete"
                  >
                    <img
                      src={suggestion.flag}
                      alt={suggestion.name}
                      style={{
                        width: "30px",
                        height: "20px",
                        marginRight: "10px",
                      }}
                    />
                    <div>
                      <div style={{ fontWeight: "bold", textAlign: "start" }}>
                        {suggestion.name}
                      </div>
                      <div style={{ fontSize: "12px", textAlign: "start" }}>
                        {suggestion.fullName}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </>
    );
  }
);
