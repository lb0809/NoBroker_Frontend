import { FormInputLabel, Input, Group } from './form-input.styles';
import { useState } from "react";
import "./forminput.css";
// const FormInput = ({ label, ...otherProps }) => {
//   return (
//     <Group>
//       <Input {...otherProps} />
//       {label && (
//         <FormInputLabel shrink={otherProps.value.length}>
//           {label}
//         </FormInputLabel>
//       )}
//     </Group>
//   );
// };
const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      {/* <span>{errorMessage}</span> */}
    </div>
  );
};

export default FormInput;
