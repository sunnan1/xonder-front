import Api from "../api";

export default {
    async getDefaultTemplate(form) {
        return Api.post("/api/get-default-template", form);
    },
    async getBusiness(form) {
        return Api.post("/api/get-business", form);
    },
    async getCategories(form) {
        return Api.post("/api/categories", form);
    },
    async getProducts(form) {
        return Api.post("/api/products", form);
    },
    async getToppings(form) {
        return Api.post("/api/toppings", form);
    },
    async getProperties(form) {
        return Api.post("/api/properties", form);
    },
    async postReservation(form) {
        return Api.post("/api/store-reservations", form);
    },
    async getReservationSettings() {
        return Api.get("/api/get-reservation-settings");
    },
    async getAnnouncements() {
        return Api.get("/api/get-announcement-settings");
    },
    async getTimings() {
        return Api.get("/api/get-opening-timings");
    },
    async getDeliveryCharges() {
        return Api.post("/api/get-delivery-charges");
    },
    async getLatLong(form) {
        return Api.post("/api/get-latitude-longitude" , form);
    },
    async getDeliveryFee(form) {
        return Api.post("/api/get-delivery-fee" , form);
    },
    async getDeliveryOrderDetails(form) {
        return Api.post("/api/get-delivery-order-details" , form);
    },
    async getBusinessDeliveryCollectionTimings(form) {
        return Api.post("/api/get-delivery-collection-time" , form);
    },
    async contactus(form) {
        return Api.post("/api/contact-us" , form);
    },
};
