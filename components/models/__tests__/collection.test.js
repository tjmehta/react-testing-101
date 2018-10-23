describe('Collection', () => {
    const ctx = {};

    beforeEach(() => {
        ctx.Collection = require('../collection').default;
        ctx.Model = require('../model').default;
    });

    describe('constructor', () => {
        beforeEach(() => {
            ctx.Collection.prototype.add = jest.fn();
        });

        it('should create a collection', () => {
            expect(new ctx.Collection()).toBeInstanceOf(ctx.Collection);
        });

        it('should create a collection w/ models', () => {
            const models = [
                new ctx.Model({ id: 1 }),
                new ctx.Model({ id: 2 }),
                new ctx.Model({ id: 3 }),
            ];
            const collection = new ctx.Collection(models);
            expect(collection).toBeInstanceOf(ctx.Collection);
            models.forEach(model => {
                expect(collection.add).toHaveBeenCalledWith(model);
            });
        });
    });

    describe('methods', () => {
        beforeEach(() => {
            ctx.collection = new ctx.Collection();
        });

        describe('add', () => {
            describe('model w/out id', () => {
                it('should error', () => {
                    expect(() => ctx.collection.add(new ctx.Model())).toThrow(
                        /must have an id/,
                    );
                });
            });

            describe('non-model', () => {
                it('should error', () => {
                    expect(() => ctx.collection.add({})).toThrow(/instance/);
                });
            });
        });
    });
});
