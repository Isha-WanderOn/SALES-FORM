export const Checkbox = ({ label, value, onChange }) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
      <input type="checkbox" checked={value} onChange={onChange} />
      <label style={{fontSize: '1.6rem'}}>{label}</label>
    </div>
  );
};
