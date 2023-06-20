import { memo } from "react";
import { CryFace } from "../../public/icons";

interface ErrorMessageProps {
  message: string;
}

// TODO: display error message from response
const ErrorMessage = memo<ErrorMessageProps>(({ message }) => {
  return (
    <>
      <CryFace />
      {message}
    </>
  );
});

ErrorMessage.displayName = "ErrorMessage";

export default ErrorMessage;
