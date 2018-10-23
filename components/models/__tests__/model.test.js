jest.unmock('events');

describe('model', () => {
    const ctx = {};

    beforeEach(async () => {
        ctx.Model = require('../model').default;
    });

    describe('constructor', () => {
        beforeEach(() => {
            ctx.Model.prototype.set = jest.fn();
        });

        it('should create a model', () => {
            expect(new ctx.Model()).toBeInstanceOf(ctx.Model);
        });

        it('should create a model w/ props', () => {
            const props = { id: 1 };
            const model = new ctx.Model(props);
            expect(model.set).toHaveBeenCalledWith(props);
        });
    });

    describe('instance methods', () => {
        beforeEach(() => {
            ctx.model = new ctx.Model();
        });

        describe('toJSON', () => {
            it('should return props', () => {
                expect(ctx.model.toJSON()).toEqual({});
            });
        });

        describe('set', () => {
            it('should set props', () => {
                const props = { id: 100 };
                ctx.model.set(props);
                expect(ctx.model.toJSON()).toEqual(props);
            });
        });
    });
});
