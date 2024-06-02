interface Props {
  label: string;
  //   className: string;
}
const PrimaryButton = ({ label }: Props) => {
  return (
    <button
      className={`items-center justify-center bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition`}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
