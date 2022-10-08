export default interface Order {
    productId: string; // keep a map of ids to product names?
    includeAdditions: boolean;
    clientName: string;
    clientPhoneNumber: string;
}