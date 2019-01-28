describe("Lifecycle", () => {
    describe('componentWillUnmount', () => {
        it('should be called when a parent ExtAngular component is removed', () => {
            ST.navigate('#/LifecycleUnmount');
            ST.button('#button').click();
            ST.element('@message').innerText == 'unmounted';
        })
    })
});