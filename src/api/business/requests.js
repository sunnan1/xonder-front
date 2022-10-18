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
};
