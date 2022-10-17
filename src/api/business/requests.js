import Api from "../api";

export default {
    async saveDetails(form) {
        return Api.post("save-details", form);
    },
};
