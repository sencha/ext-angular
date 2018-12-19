describe("CreateChild", function () {
    it("should insert an ExtAngular component at the start", function () {
        ST.navigate('#/InsertStart');
        ST.button('#insert').click();
        ST.component('#inserted').and(function(inserted) {
            expect(inserted.getParent().indexOf(inserted)).toBe(0);
        });
    });

    it("should insert an ExtAngular component in the middle", function () {
        ST.navigate('#/InsertBetween');
        ST.button('#insert').click();
        ST.component('#inserted').and(function(inserted) {
            expect(inserted.getParent().indexOf(inserted)).toBe(1);
        })
        
    });

    it("should insert an ExtAngular component at the end", function () {
        ST.navigate('#/InsertEnd');
        ST.button('#insert').click();
        ST.component('#inserted').and(function(inserted) {
            expect(inserted.getParent().indexOf(inserted)).toBe(2);
        })
    });

    it("should insert an html element at the start", function () {
    ST.navigate('#/ElementInsertStart');
        ST.button('#insert').click();
        ST.element('@inserted').and(function(inserted) {
            expect(Array.from(inserted.dom.parentElement.children)
            .indexOf(inserted.dom)).toBe(0);
        });
    });

    it("should insert an html element in the middle", function () {
        ST.navigate('#/ElementInsertBetween');
        ST.button('#insert').click();
        ST.element('@inserted').and(function(inserted) {
            // expect(Array.from(inserted.dom.parentElement.children)
            // .indexOf(inserted.dom)).toBe(1);
        });
    });

    it("should insert an html element at the end", function () {
        ST.navigate('#/ElementInsertEnd');
        ST.button('#insert').click();
        ST.element('@inserted').and(function(inserted) {
            alert(JSON.stringify(ST.button('#insert').up('panel').indexOf(inserted.dom)));
            // expect(Array.from(inserted.dom.parentElement.children)
            // .indexOf(inserted.dom)).toBe(2);
        });
    });
});
