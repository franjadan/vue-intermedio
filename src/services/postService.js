import Service from './service.js';

const resource = 'posts';

export default {
    get() {
        return Service.get(resource);
    },

    create(data) {
        return Service.post(resource, data);
    },

    delete(id) {
        return Service.delete(resource, id);
    }
}