type Props = {
  label?: string;
  placeholder: string;
};

export default function LabelInput({ label, placeholder }: Props) {
  return (
    <div className="admin-register-inputWrap">
      <label htmlFor={label} className="admin-register-label">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        id="nameK"
        className="admin-register-input"
      />
    </div>
  );
}
