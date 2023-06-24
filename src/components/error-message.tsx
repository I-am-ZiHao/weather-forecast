import { memo } from "react";
import { CryFaceIcon } from "../../public/icons";

interface ErrorMessageProps {
  message?: string;
}

// display error message
const ErrorMessage = memo<ErrorMessageProps>(({ message }) => {
  return (
    <>
      <CryFaceIcon />
      {message || "No matching location found."}
    </>
  );
});

ErrorMessage.displayName = "ErrorMessage";

export default ErrorMessage;
