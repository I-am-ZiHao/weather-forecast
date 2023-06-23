import { memo } from "react";
import { CryFace } from "../../public/icons";

interface ErrorMessageProps {
  message?: string;
}

// display error message
const ErrorMessage = memo<ErrorMessageProps>(({ message }) => {
  return (
    <>
      <CryFace />
      {message || "No matching location found."}
    </>
  );
});

ErrorMessage.displayName = "ErrorMessage";

export default ErrorMessage;
