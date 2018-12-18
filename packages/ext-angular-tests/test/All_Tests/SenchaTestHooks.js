describe('Sencha Test Hooks', () => {
    beforeEach(() => ST.navigate('#/'))
    
    it('should include $ExtReactComponentName on each rendered component', () => {
        ST.navigate('#/SenchaTestHooks');
        ST.component('#target').and(component => {
            expect(component.isButton).toBe(true);
        })
    });

    it('should support selector by component name', () => {
        ST.navigate('#/SenchaTestHooks');
        ST.component('button').visible();
    });
});