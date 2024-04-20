import { useError } from "@/shared/hooks/use-error";
import { formatPhoneNumber } from "@/shared/lib/help/telephone-mask";
import { orderForm } from "@/entities/orders/lib/order-form-state";
import { DatePicker } from "@gravity-ui/date-components";
import { DateTime } from "@gravity-ui/date-utils";
import { Button, TextInput } from "@gravity-ui/uikit";
import { useForm } from "effector-forms";
import { FormEvent, useState } from "react";
import styles from "./styles/order.module.scss";
import { useUnit } from "effector-react";
import { $orders } from "../model/orders";
import { createCommentFx } from "@/entities/comments/lib/create-comment";
const CreateForm = ({ setOpen }: { setOpen: (value: boolean) => void }) => {
  const { fields, submit } = useForm(orderForm);
  const [commentValue, setCommentValue] = useState("");
  const orders = useUnit($orders);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
    setTimeout(() => {
      if (commentValue) {
        createCommentFx({
          title: commentValue,
          orderId: orders[orders.length - 1].id + 1,
        });
        console.log(orders);
      }
      setOpen(false);
    }, 3000);
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <TextInput
        value={fields.numberOrder.value}
        errorMessage={useError(fields.numberOrder.firstError?.rule)}
        onChange={(e) => fields.numberOrder.onChange(e.target.value)}
        size="l"
        errorPlacement="inside"
        placeholder="Введите номер заявки"
        autoFocus={true}
        validationState={
          useError(fields.numberOrder.firstError?.rule) ? "invalid" : undefined
        }
      />
      <DatePicker
        value={fields.date.value}
        onUpdate={(value: DateTime | null) => fields.date.onChange(value)}
        size="l"
        placeholder="09.10.2024"
        errorMessage={useError(fields.date.firstError?.rule)}
        errorPlacement="inside"
        validationState={
          useError(fields.date.firstError?.rule) ? "invalid" : undefined
        }
        format="YYYY-MM-DD"
      />
      <TextInput
        size="l"
        value={fields.time.value}
        onChange={(e) => fields.time.onChange(e.target.value)}
        placeholder="Время получения заявки"
        autoFocus={true}
        errorMessage={useError(fields.time.firstError?.rule)}
        errorPlacement="inside"
        validationState={
          useError(fields.time.firstError?.rule) ? "invalid" : undefined
        }
      />
      <TextInput
        size="l"
        value={fields.nameOfClientsCompany.value}
        onChange={(e) => fields.nameOfClientsCompany.onChange(e.target.value)}
        placeholder="Название фирмы клиента"
        autoFocus={true}
        errorMessage={useError(fields.nameOfClientsCompany.firstError?.rule)}
        errorPlacement="inside"
        validationState={
          useError(fields.nameOfClientsCompany.firstError?.rule)
            ? "invalid"
            : undefined
        }
      />
      <TextInput
        value={fields.nameOfCarrier.value}
        onChange={(e) => fields.nameOfCarrier.onChange(e.target.value)}
        size="l"
        placeholder="ФИО перевозчика"
        autoFocus={true}
        errorMessage={useError(fields.nameOfCarrier.firstError?.rule)}
        errorPlacement="inside"
        validationState={
          useError(fields.nameOfCarrier.firstError?.rule)
            ? "invalid"
            : undefined
        }
      />
      <TextInput
        value={fields.phoneNumberOfCarrier.value}
        onChange={(e) =>
          fields.phoneNumberOfCarrier.onChange(
            formatPhoneNumber(e.target.value)
          )
        }
        size="l"
        placeholder="Контактный номер перевозчика"
        autoFocus={true}
        errorMessage={useError(fields.phoneNumberOfCarrier.firstError?.rule)}
        errorPlacement="inside"
        validationState={
          useError(fields.phoneNumberOfCarrier.firstError?.rule)
            ? "invalid"
            : undefined
        }
      />
      <TextInput
        value={fields.ati.value}
        onChange={(e) => fields.ati.onChange(e.target.value)}
        size="l"
        placeholder="ATI код сети перевозчика"
        autoFocus={true}
        errorMessage={useError(fields.ati.firstError?.rule)}
        errorPlacement="inside"
        validationState={
          useError(fields.ati.firstError?.rule) ? "invalid" : undefined
        }
      />
      <TextInput
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
        size="l"
        placeholder="Комментарий"
        autoFocus={true}
      />
      <Button type="submit" view="normal" size="xl">
        Отправить данные
      </Button>
    </form>
  );
};

export default CreateForm;
