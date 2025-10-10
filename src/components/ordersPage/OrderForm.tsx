import { Button, TextField } from "@mui/material";
import GlassContainer from "../elements/GlassContainer";
import HeaderText from "../HeaderText";
import { Controller, useForm } from "react-hook-form";
import { sendOrderRequest } from "./orderFormCommon";
import type { OrderFormData } from "./orderFormCommon";
import { useMutation } from "@tanstack/react-query";

const OrderForm = () => {
  const { control, handleSubmit, reset } = useForm<OrderFormData>({
    defaultValues: { email: "", message: "" },
  });

  const mutation = useMutation({
    mutationFn: sendOrderRequest,
    onSuccess: () => {
      alert("Request sent successfully!");
      reset();
    },
    onError: (err: any) => {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    },
  });

  // 🧠 handleSubmit przekazujemy do przycisku onClick
  const onSubmit = (data: OrderFormData) => mutation.mutate(data);

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
        disabled={false}
      >
        Send request
      </Button>
    </GlassContainer>
  );
};

export default OrderForm;
