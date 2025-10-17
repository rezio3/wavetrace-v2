import { Button, TextField } from "@mui/material";
import GlassContainer from "../elements/GlassContainer";
import HeaderText from "../elements/HeaderText";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import Notification from "../elements/Notification";
import CheckIcon from "@mui/icons-material/Check";
import CustomText from "../elements/CustomText";
import { useWindowSize } from "react-use";
import {
  orderTips,
  sendMessage,
  type ContactFormData,
} from "./contactFormCommon";

type ContactFormProps = {
  formHeader: string;
  messageLabel?: string;
  buttonLabel: string;
  isOrderFormTips?: boolean;
};

const ContactForm: React.FC<ContactFormProps> = ({
  formHeader,
  messageLabel = "Message...",
  buttonLabel,
  isOrderFormTips,
}) => {
  const { control, handleSubmit, reset } = useForm<ContactFormData>({
    defaultValues: { email: "", message: "" },
  });

  const mutation = useMutation({
    mutationFn: sendMessage,
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

  const onSubmit = (data: ContactFormData) => mutation.mutate(data);

  const [notification, setNotification] = useState<{
    isOpen: boolean;
    type: "error" | "success";
    alert: string;
  }>({
    isOpen: false,
    type: "success",
    alert: "",
  });

  const { width } = useWindowSize();
  const isMobile = width < 992;

  const orderTipsComponent = (
    <div
      className="d-flex flex-column gap-2"
      style={{ width: isMobile ? "100%" : "50%" }}
    >
      {orderTips.map((e, index) => (
        <div
          className="ps-0 ps-lg-4 d-flex align-items-start align-items-lg-center"
          key={e.tip + index}
        >
          <CheckIcon color="primary" />

          <CustomText fontWeight={200} fontSize={14} className="ms-2">
            {e.tip}
          </CustomText>
        </div>
      ))}
    </div>
  );

  return (
    <GlassContainer className="d-flex flex-column align-items-start gap-3">
      <HeaderText fontSize={24} headerType="h4" fontFamily="Roboto, sans-serif">
        {formHeader}
      </HeaderText>
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
            style={{ width: isMobile ? "100%" : "50%" }}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <div className="w-100 d-flex">
        <Controller
          name="message"
          control={control}
          rules={{
            required: "Please tell us what you need",
            minLength: {
              value: 10,
              message: "Message should be at least 10 characters",
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              id="outlined-basic"
              label={messageLabel}
              variant="outlined"
              multiline
              rows={8}
              style={{ width: isMobile ? "100%" : "50%" }}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
        {!isMobile && isOrderFormTips && orderTipsComponent}
      </div>
      {isMobile && isOrderFormTips && orderTipsComponent}
      <Button
        variant="contained"
        className="py-2"
        onClick={handleSubmit(onSubmit)}
        loading={mutation.isPending}
      >
        {buttonLabel}
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

export default ContactForm;
