import { Button, Card, Text, Modal, TextInput } from "@gravity-ui/uikit";
import styles from "../styles/order-controller.module.scss";
import { useState } from "react";
const OrderController = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.root}>
            <Card className={styles.card} theme="info" size="l">
                <Text variant="body-3">100 заявок</Text>
            </Card>
            <Button onClick={() => setOpen(true)} size="xl">
                Создать заявку
            </Button>
            <Modal
                contentClassName={styles.modal}
                open={open}
                onClose={() => setOpen(false)}
            >
                <Text variant="display-1">Заполните заявку</Text>
                <form className={styles.form}>
                    <TextInput
                        size="l"
                        placeholder="111"
                        note="Введите номер заявки"
                        autoFocus={true}
                    />
                    <DatePicker
                        size="l"
                        placeholder="09.10.2024"
                        note="Введите дату получения заявки"
                        autoFocus={true}
                    />
                    <TextInput
                        size="l"
                        placeholder="Время получения заявки"
                        autoFocus={true}
                    />
                    <TextInput
                        size="l"
                        placeholder="Название фирмы клиента"
                        autoFocus={true}
                    />
                    <TextInput
                        size="l"
                        placeholder="ФИО перевозчика"
                        autoFocus={true}
                    />
                    <TextInput
                        size="l"
                        placeholder="Контактный номер перевозчика"
                        autoFocus={true}
                    />
                    <TextInput
                        size="l"
                        placeholder="Комментарии"
                        autoFocus={true}
                    />
                </form>
            </Modal>
        </div>
    );
};

export default OrderController;
