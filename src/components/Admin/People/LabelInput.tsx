import { ChangeEvent } from "react";

type Props = {
  label?: string;
  placeholder: string;
  type?: string;
  value?: string;
  maxLength?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function LabelInput({ label, onChange, ...props }: Props) {
  return (
    <div className="admin-register-inputWrap">
      <label htmlFor={label} className="admin-register-label">
        {label}
      </label>
      <input {...props} onChange={onChange} className="admin-register-input" />
    </div>
  );
}
