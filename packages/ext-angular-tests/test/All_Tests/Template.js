describe('Template', () => {
    describe("Column.tpl", () => {
        it('should render React elements returned by cell tpl', () => {
            ST.navigate('#/TemplateGrid')
            ST.element('>> #container-div')
                .visible()
                .text('Mark Brocato');
        })
    });

    describe("List.itemTpl", () => {
        it('should render React elements returned by itemTpl', () => {
            ST.navigate('#/TemplateList')
            ST.element('@container-div')
            .child('span')
            .visible()
            .text('Mark Brocato');
            
            ST.element('@container-div')
            .child('button')
            .visible();
            
        })
    });

    describe("unmount", () => {
        it('should unmount components when the parent ExtReact component is destroyed', () => {
            ST.navigate('#/TemplateUnmount')
            ST.button('#button').click();
            ST.element('>> #message').innerText == 'unmounted';
        });
    });
})

