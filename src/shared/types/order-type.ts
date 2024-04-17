export interface OrderData {
    id: number;
    numberOrder: number;
    date: string;
    time: string;
    nameOfClientsCompany: string;
    nameOfCarrier: string;
    phoneNumberOfCarrier: string;
    comments: CommentDataType[];
    statusOrder: string;
}

type CommentDataType = {
    title: string;
    id: number;
};
