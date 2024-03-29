import React, {
  ChangeEvent,
  InputHTMLAttributes,
  DetailedHTMLProps,
} from "react";
import styles from "./SuperRadio.module.css";

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: Array<string>;
  onChangeOption?: (option: string) => void;
};

const SuperRadio: React.FC<SuperRadioPropsType> = ({
  type,
  name,
  options,
  value,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  const mappedOptions: any[] = options
    ? options.map((o, i) => (
        <label key={name + "-" + i} className={styles.radioBtn}>
          <input
            type={"radio"}
            name={name}
            checked={o === value}
            value={o}
            onChange={onChangeCallback}
            // name, checked, value, onChange
          />
          {o}
        </label>
      ))
    : [];

  return <>{mappedOptions}</>;
};

export default SuperRadio;
