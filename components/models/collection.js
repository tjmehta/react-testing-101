import assert from 'assert';
import { EventEmitter } from 'events';

import { values } from 'lodash';

import Model from './model';

export default class Collection extends EventEmitter {
    static Model = Model;

    _modelsById = {};

    constructor(models) {
        super();
        if (!models) return;
        models.forEach(model => {
            this.add(model);
        });
    }

    _handleModelChange(model) {
        this.emit('change', model);
    }

    add(model) {
        assert(
            model instanceof this.constructor.Model,
            `models must be an instance of ${this.constructor.Model.name}`,
        );
        const modelId = model.id();
        assert(modelId, 'models added to a collection must have an id');
        if (this._modelsById[modelId]) return;

        // add model
        this._modelsById[modelId] = model;
        model.on('change', this._handleModelChange);
        this.emit('add', model);
    }

    length() {
        return Object.keys(this._modelsById).length;
    }

    map(fn) {
        return values(this._modelsById).map(fn);
    }

    removeModelWithId(modelId) {
        const model = this._modelsById[modelId];
        if (!model) return;
        delete this._modelsById[modelId];
        this.emit('remove', model);
    }

    toJSON() {
        return this.map(model => model.toJSON());
    }
}
