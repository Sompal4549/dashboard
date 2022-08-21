import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import React from "react";
import { Header } from "../components";
const change = (args) => {
  document.getElementById("preview").style.backgroundColor =
    args.currentValue.hex;
};
const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Color Picker" category="App" />
      <div className="text-center">
        <div id="preview">
          <div className="flex direction-row items-center gap-10 flex-wrap">
            <div>
              <p className="text-2xl font-semibold mt-20 mb-4">
                Inline Pallets
              </p>
              <ColorPickerComponent
                id="inline-pallete"
                modeSwitcher={false}
                mode="Palette"
                inline
                showButtons={false}
                change={change}
              />
            </div>
            <div>
              <p className="text-2xl font-semibold mt-20 mb-4">
                Inline Pallets
              </p>
              <ColorPickerComponent
                id="inline-picker"
                modeSwitcher={false}
                mode="Picker"
                inline
                showButtons={false}
                change={change}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
