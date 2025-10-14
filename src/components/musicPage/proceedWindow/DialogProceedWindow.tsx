import * as React from "react";
import Dialog from "@mui/material/Dialog";
import ProceedWindow from "./ProceedWindow";

type DialogProceedDialogProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  initialTab: number;
  trackId: string;
};

const DialogProceedWindow = (props: DialogProceedDialogProps) => {
  const handleClose = () => {
    props.setIsOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={props.isOpen}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <ProceedWindow initialTab={props.initialTab} trackId={props.trackId} />
      </Dialog>
    </React.Fragment>
  );
};

export default DialogProceedWindow;
