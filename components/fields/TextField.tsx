"use client";

import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement } from "../FormElements";

const type: ElementsType = "TextField";

export const TextFieldFormElement: FormElement = {
  type,

  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: "Text Field",
      helperText: "Helper Text",
      required: false,
      placeHolder: "Placeholder",
    },
  }),

  designerBtnElement: {
    icon: MdTextFields,
    label: "Text Field",
  },

  designerComponent: () => <div>Designer Component</div>,
  formComponent: () => <div>form Component</div>,
  propertiesComponent: () => <div>properties Component</div>,
};