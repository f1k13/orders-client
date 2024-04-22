import { useUnit } from "effector-react";
import { $order } from "../model/orders";
import { FormEvent, useEffect, useState } from "react";
import { useForm } from "effector-forms";
import { editOrderForm } from "../lib/edit-order-form-state";
import { Button, Select, TextInput } from "@gravity-ui/uikit";
import { useError } from "@/shared/hooks/use-error";
import { formatPhoneNumber } from "@/shared/lib/help/telephone-mask";
import { DatePicker } from "@gravity-ui/date-components";
import { DateTime } from "@gravity-ui/date-utils";
import styles from "./styles/order.module.scss";
import { timeFormat } from "@/shared/lib/help/time-format";
const EditForm = () => {
  const order = useUnit($order);
  const { fields, submit } = useForm(editOrderForm);
  const [error, setError] = useState("");
  const handleSelectChange = (value: string[]) => {
    fields.statusOrder?.onChange(value[0]);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (fields.statusOrder?.value === "Новая") {
      setError("Статус заявки не может быть новая");
      return;
    } else {
      setError("");
    }

    submit();
  };
  useEffect(() => {
    fields.id.onChange(order.id);
    fields.numberOrder.onChange(order.numberOrder);
    fields.statusOrder?.onChange(order.statusOrder);
  }, [order]);

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <TextInput
        value={fields.numberOrder.value}
        type="number"
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
        onChange={(e) => fields.time.onChange(timeFormat(e.target.value))}
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
        type="number"
        errorMessage={useError(fields.ati.firstError?.rule)}
        errorPlacement="inside"
        validationState={
          useError(fields.ati.firstError?.rule) ? "invalid" : undefined
        }
      />
      <Select
        errorPlacement="inside"
        errorMessage={error}
        validationState={error ? "invalid" : undefined}
        value={fields.statusOrder?.value ? [fields.statusOrder.value] : []}
        onUpdate={handleSelectChange}
      >
        <Select.Option value="В прогрессе">В прогрессе</Select.Option>
        <Select.Option value="Завершена">Завершена</Select.Option>
      </Select>
      <Button type="submit" view="normal" size="xl">
        Изменить данные
      </Button>
    </form>
  );
};

export default EditForm;
