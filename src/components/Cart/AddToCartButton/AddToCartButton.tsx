import { Button, ButtonProps } from "@/ui";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import useAuthContext from "@/context/hooks/useAuthContext";
import { redirect, useRouter } from "next/navigation";

type AddToCartButton = ButtonProps;

function AddToCartButton(props: AddToCartButton): JSX.Element {
  const [open, setOpen] = useState(false);
  const { onClick } = props;
  const { isLoggedIn } = useAuthContext();
  const router = useRouter();

  const addToCartButtonHandler = () => {
    if (!isLoggedIn) {
      router.push("/authentication/?redirectTo=/products");
    } else {
      setOpen(true);
      onClick && onClick();
    }
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Button {...props} onClick={addToCartButtonHandler} />
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Product added to cart
        </Alert>
      </Snackbar>
    </>
  );
}

export default AddToCartButton;
