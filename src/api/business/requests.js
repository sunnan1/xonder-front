import Api from "../api";

export default {
    async saveDetails(form) {
        return Api.post("/save-details", form);
    },
    async savePhoto(form) {
        return Api.post("/save-photo", form);
    },
    async saveLicense(form) {
        return Api.post("/save-license", form);
    },
    async savePermit(form) {
        return Api.post("/save-permit", form);
    },
    async savePassport(form) {
        return Api.post("/save-passport", form);
    },
    async getDetails(form) {
        return Api.post("/get-details", form);
    },
    async getPhoto(form) {
        return Api.post("/get-photo", form);
    },
    async getPassport(form) {
        return Api.post("/get-passport", form);
    },
    async getLicense(form) {
        return Api.post("/get-license", form);
    },
    async getPermit(form) {
        return Api.post("/get-permit", form);
    },
    async complete(form) {
        return Api.post("/complete", form);
    },
};
