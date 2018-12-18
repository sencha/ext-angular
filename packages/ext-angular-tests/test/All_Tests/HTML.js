describe("HTML", () => {
    it("should be rendered inside ExtReact components", () => {
        ST.navigate('#/HTMLInExtReactComponent')
        ST.component('#container').visible();
        
        // verify that container has a div added as child element
        ST.element('#container').child('div').visible();

        ST.element('@html').innerText == "html";
    });
});