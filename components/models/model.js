import assert from 'assert';
import { EventEmitter } from 'events';

export default class Model extends EventEmitter {
    _props = {};
    constructor(props) {
        super();
        if (!props) return;
        this.set(props);
    }
    destroy() {
        this.removeAllListeners();
    }
    get(prop) {
        return this._props[prop];
    }
    id() {
        return this.get('id');
    }
    set(props) {
        assert(props, 'props are required');
        Object.assign(this._props, props);
        this.emit('change', this);
    }
    toJSON() {
        const json = {};
        Object.assign(json, this._props);
        return json;
    }
}
