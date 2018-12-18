describe("Simple", function () {
    it("should render the button", function () {
        ST.navigate('/simple')
        ST.component('#button')
            .visible()
            .text('Click Me')
        
    });
});
