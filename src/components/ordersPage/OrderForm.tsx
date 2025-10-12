import { Button, TextField } from "@mui/material";
import GlassContainer from "../elements/GlassContainer";
import HeaderText from "../elements/HeaderText";
import { Controller, useForm } from "react-hook-form";
import { sendOrderRequest } from "./orderFormCommon";
import type { OrderFormData } from "./orderFormCommon";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Notification from "../elements/Notification";
import CheckIcon from "@mui/icons-material/Check";
import CustomText from "../elements/CustomText";

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
            className="w-50"
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
        <div className="w-50 d-flex flex-column gap-2">
          {orderTips.map((e) => (
            <div className="ps-4 d-flex align-items-center">
              <CheckIcon color="primary" />

              <CustomText fontWeight={200} fontSize={14} className="ms-2">
                {e.tip}
              </CustomText>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="contained"
        className="py-2"
        onClick={handleSubmit(onSubmit)}
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

const orderTips = [
  { tip: "Describe the exact type of music you need." },
  { tip: "Specify the theme or purpose of your project that requires music." },
  {
    tip: "You can outline specific time intervals where certain sounds or instruments should play (e.g., in a film or stage performance).",
  },
  {
    tip: "Attach examples or inspirations as links (e.g., YouTube or SoundCloud) if you have any.",
  },
  {
    tip: "The more details you provide, the better we can match your expectations.",
  },
];
