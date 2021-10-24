export default function Input(props) {
  const { type, placeholder } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      required
      className="bg-gray-200 w-full h-12 p-1 m-1 rounded-md"
    />
  );
}
