import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

type NotificationProps = {
  type: "success" | "error" | "warning" | "info";
  alert: string;
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function Notification({
  type = "success",
  alert,
  open,
  setOpen,
}: NotificationProps) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {alert}
        </Alert>
      </Snackbar>
    </div>
  );
}
