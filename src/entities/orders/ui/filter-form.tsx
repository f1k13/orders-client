import { Button, Select, TextInput } from "@gravity-ui/uikit";
import styles from "./styles/order.module.scss";
import { useForm } from "effector-forms";
import { filterOrderForm } from "../lib/filter-order-form-state";
import { DatePicker } from "@gravity-ui/date-components";
import { DateTime } from "@gravity-ui/date-utils";
import { timeFormat } from "@/shared/lib/help/time-format";
import { formatPhoneNumber } from "@/shared/lib/help/telephone-mask";
import { FormEvent } from "react";
const FilterForm = ({ setOpen }: { setOpen: (value: boolean) => void }) => {
  const handleSelectChange = (value: string[]) => {
    fields.statusOrder?.onChange(value[0]);
    console.log(value[0]);
  };

  const { fields, submit } = useForm(filterOrderForm);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
    setOpen(false);
  };
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <TextInput
        value={fields.numberOrder.value}
        type="number"
        placeholder="150"
        onChange={(e) => fields.numberOrder.onChange(e.target.value)}
        size="l"
      />
      <DatePicker
        value={fields.date.value}
        onUpdate={(value: DateTime | null) => fields.date.onChange(value)}
        size="l"
        placeholder="09.10.2024"
        format="YYYY-MM-DD"
      />
      <TextInput
        size="l"
        value={fields.time.value}
        onChange={(e) => fields.time.onChange(timeFormat(e.target.value))}
        placeholder="Время получения заявки"
        autoFocus={true}
      />
      <TextInput
        size="l"
        value={fields.nameOfClientsCompany.value}
        onChange={(e) => fields.nameOfClientsCompany.onChange(e.target.value)}
        placeholder="Название фирмы клиента"
        autoFocus={true}
      />
      <TextInput
        value={fields.nameOfCarrier.value}
        onChange={(e) => fields.nameOfCarrier.onChange(e.target.value)}
        size="l"
        placeholder="ФИО перевозчика"
        autoFocus={true}
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
      />
      <TextInput
        value={fields.ati.value}
        onChange={(e) => fields.ati.onChange(e.target.value)}
        size="l"
        placeholder="ATI код сети перевозчика"
        autoFocus={true}
        type="number"
      />
      <Select
        value={fields.statusOrder?.value ? [fields.statusOrder.value] : []}
        onUpdate={handleSelectChange}
      >
        <Select.Option value="Новая">Новая</Select.Option>

        <Select.Option value="В прогрессе">В прогрессе</Select.Option>
        <Select.Option value="Завершена">Завершена</Select.Option>
      </Select>
      <Button type="submit" view="normal" size="xl">
        Применить фильтры
      </Button>
    </form>
  );
};

export default FilterForm;
