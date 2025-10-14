import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import GlassContainer from "../elements/GlassContainer";
import HeaderText from "../elements/HeaderText";
import { useState } from "react";
import {
  sendCollaborationRequest,
  type CollaborationFormData,
} from "./collaborationFormCommon";
import Notification from "../elements/Notification";
import { useMutation } from "@tanstack/react-query";

const CollaborationForm = () => {
  const { control, handleSubmit, reset } = useForm<CollaborationFormData>({
    defaultValues: { name: "", email: "", message: "", portfolioLink: "" },
  });

  const mutation = useMutation({
    mutationFn: sendCollaborationRequest,
    onSuccess: () => {
      setNotification({
        isOpen: true,
        type: "success",
        alert: "Your message has been sent successfully!",
      });
      reset();
    },
    onError: (err: any) => {
      setNotification({
        isOpen: true,
        type: "error",
        alert: "Something went wrong with message delivery.",
      });
      console.log(err);
    },
  });

  const onSubmit = (data: CollaborationFormData) => mutation.mutate(data);

  const [notification, setNotification] = useState<{
    isOpen: boolean;
    type: "error" | "success";
    alert: string;
  }>({
    isOpen: false,
    type: "success",
    alert: "",
  });

  return (
    <GlassContainer className="d-flex flex-column align-items-start gap-3 mt-5">
      <HeaderText fontSize={24} headerType="h4" fontFamily="Roboto, sans-serif">
        Let’s get to know each other
      </HeaderText>
      <Controller
        name="name"
        control={control}
        rules={{ required: "Name is required" }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            id="outlined-basic"
            label="Full name"
            variant="outlined"
            className="w-50"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        rules={{ required: "Email is required" }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            id="outlined-basic"
            label="Your email"
            variant="outlined"
            className="w-50"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />

      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-basic"
            label="Tell us something about yourself (optional)"
            variant="outlined"
            multiline
            rows={5}
            className="w-50"
          />
        )}
      />
      <Controller
        name="portfolioLink"
        control={control}
        rules={{ required: "Portfolio link is required" }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            id="outlined-basic"
            label="Portfolio (e.g. Soundcloud, YouTube)"
            variant="outlined"
            className="w-50"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Button
        variant="contained"
        className="py-2"
        onClick={handleSubmit(onSubmit)}
        loading={mutation.isPending}
      >
        Start Collaborating
      </Button>
      <Notification
        type={notification.type}
        alert={notification.alert}
        open={notification.isOpen}
        setOpen={() => setNotification({ ...notification, isOpen: false })}
      />
    </GlassContainer>
  );
};

export default CollaborationForm;
