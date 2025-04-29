const LoadingSpinner = ({ size = "md" }) => {
  const sizeClass = `loading-${size}`;

  return <span className={`loading loading-ring ${sizeClass}`} />;
};
export default LoadingSpinner;
