type Props = {
  label: string;
  handleSingleCheck: () => void;
};

export default function CheckBox({ label, handleSingleCheck }: Props) {
  return (
    <label className="custom-checkbox">
      <input type="checkbox" onClick={handleSingleCheck} />
      <span className="checkmark"></span>
      {label}
    </label>
  );
}
