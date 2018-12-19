describe("ReplaceNodeWithMarkup", () => {
    it('add and remove ExtAngular components when swapping between null and an ExtAngular component in a composite component', () => {
        ST.navigate('#/ReplaceNodeWithMarkup')
        var toggleChild = ST.component('#toggleChild')
        toggleChild.click();
        var child = ST.component('#child');
        child.visible();
        toggleChild.click();
        child.hidden();
        toggleChild.click();

        ST.component('#container').and(container => {
            // check that the middle button is inserted in the correct index in the container
            expect(container.items.items[1].getText()).toBe('Middle');
        })
    })
});