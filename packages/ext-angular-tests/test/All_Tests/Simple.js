describe("Simple", function () {
    it("should render the button", function () {
        //ST.navigate('/simple')
        console.log("Simple started");
        location.href = "/simple";
        console.log("Simple naviagted");
        ST.component('#button')
            .visible()
            .text('Click Me')
        
    });
});
