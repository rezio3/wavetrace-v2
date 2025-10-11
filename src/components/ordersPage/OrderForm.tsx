import { Button, TextField } from "@mui/material";
import GlassContainer from "../elements/GlassContainer";
import HeaderText from "../elements/HeaderText";
import { Controller, useForm } from "react-hook-form";
import { sendOrderRequest } from "./orderFormCommon";
import type { OrderFormData } from "./orderFormCommon";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Notification from "../elements/Notification";

const OrderForm = () => {
  const { control, handleSubmit, reset } = useForm<OrderFormData>({
    defaultValues: { email: "", message: "" },
  });
  const [isLoading, setIsLoading] = useState(false);
  const mutation = useMutation({
    mutationFn: sendOrderRequest,
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: () => {
      setIsLoading(false);
      setNotification({
        isOpen: true,
        type: "success",
        alert: "Your message has been sent successfully!",
      });
      reset();
    },
    onError: (err: any) => {
      setIsLoading(false);
      setNotification({
        isOpen: true,
        type: "error",
        alert: "Something went wrong with message delivery.",
      });
      console.log(err);
    },
  });

  const onSubmit = (data: OrderFormData) => mutation.mutate(data);

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
    <GlassContainer className="d-flex flex-column align-items-start gap-3">
      <HeaderText fontSize={24} headerType="h4" fontFamily="Roboto, sans-serif">
        Place an order
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
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />
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
            label="Tell us what you need…"
            variant="outlined"
            multiline
            rows={8}
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
        // disabled={false}
        loading={isLoading}
      >
        Send request
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

export default OrderForm;
