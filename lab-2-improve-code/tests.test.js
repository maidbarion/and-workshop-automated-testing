const greeting = require('./src/index');

describe('Greeting Test', () => {
    describe('Requirement 1', () => {
        it("shows correct output when input is 'test'", () => {
            expect(greeting('test')).toEqual('Hello, test.');
        });
    });

    describe('Requirement 2', () => {
        it('shows correct output when input is null', () => {
            expect(greeting()).toEqual('Hello, my friend.');
        });
    });

    describe('Requirement 3', () => {
        it('shows correct output when input is JERRY', () => {
            expect(greeting('JERRY')).toEqual('HELLO JERRY!');
        });
    });

    describe('Requirement 4', () => {
        it("shows correct output when input is ['Jack', 'Jill']", () => {
            expect(greeting(['Jack', 'Jill'])).toEqual(
                'Hello, Jack, and Jill.'
            );
        });
    });

    describe('Requirement 5', () => {
        it("shows correct output when input is ['Jack', 'Jill', 'Jane']", () => {
            expect(greeting(['Jack', 'Jill', 'Jane'])).toEqual(
                'Hello, Jack, Jill, and Jane.'
            );
        });
    });
});
