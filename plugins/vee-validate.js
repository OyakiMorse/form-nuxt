import Vue from "vue";
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import {
  required,
  email,
  dimensions,
  min,
  confirmed,
  length,
} from "vee-validate/dist/rules";

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

extend("required", {
  ...required,
  message: "Field is required",
});

extend("email", (value) => {
  const regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (value.match(regEmail)) {
    return true;
  }

  return "Incorrect email";
});

extend("min", {
  ...required,
  validate(value, args) {
    return value.length >= args.length;
  },
  params: ["length"],
  message: "Min {length} symbols",
});

extend("confirmed", {
  ...required,
  message: "The field confirmation does not match",
});

extend("exact_length", {
  params: ["length", "message"],
  validate(val, { length, message }) {
    if (val.length !== Number(length))
      return message ?? "Must have " + length + " items";

    return true;
  }
});

// extend("dimensions", {
//   validate: (file, [width, height]) => {
//     const URL = window.URL || window.webkitURL;

//     return new Promise((resolve) => {
//       const image = new Image();
//       image.onerror = () => resolve({ valid: false });
//       image.onload = () =>
//         resolve({
//           valid: image.width >= Number(width) && image.height >= Number(height),
//         });

//       image.src = URL.createObjectURL(file);
//     });
//   },
//   ...required,
//   message: "Photo is required",
// });

