declare var Ext: any;
import { SimpleComponent } from './Simple/Simple';
import { BasicEventComponent } from './Events/BasicEvent/BasicEvent';
import { SingleEventComponent } from './Events/SingleEvent/SingleEvent';
import { ElementInsertBetweenComponent } from './CreateChild/ElementInsertBetween/ElementInsertBetween';
import { ElementInsertEndComponent } from './CreateChild/ElementInsertEnd/ElementInsertEnd';
import { ElementInsertStartComponent } from './CreateChild/ElementInsertStart/ElementInsertStart';
import { InsertBetweenComponent } from './CreateChild/InsertBetween/InsertBetween';
import { InsertEndComponent } from './CreateChild/InsertEnd/InsertEnd';
import { InsertStartComponent } from './CreateChild/InsertStart/InsertStart';
import { DefaultComponent } from './Default/Default';
import { HTMLInExtAngularComponent } from './HTMLInExtAngular/HTMLInExtAngular';
import { LifecycleUnmountComponent } from './Lifecycle/LifecycleUnmount';
import { MyComponent } from './Lifecycle/MyComponent/MyComponent';
import { SimplePropUpdateComponent } from './Props/SimplePropUpdate/SimplePropUpdate';
import { UpdateClassNameComponent } from './Props/UpdateClassName/UpdateClassName';
import { RendererCellTestComponent } from './Renderer/RendererCellTest/RendererCellTest';
import { CellComponent } from './Renderer/Cell/Cell';
import { TemplateGridComponent } from './Template/TemplateGrid/TemplateGrid';
import { TemplateListComponent } from './Template/TemplateList/TemplateList';
import { TemplateUnmountComponent } from './Template/TemplateUnmount/TemplateUnmount'
import { ListItemComponent } from './Template/TemplateUnmount/ListItem/ListItem';
import { RenderWhenReadyComponent } from './RenderWhenReady/RenderWhenReady'
import { ReplaceNodeWithMarkupComponent } from './ReplaceNodeWithMarkup/ReplaceNodeWithMarkup';
import { ResponsiveComponent } from './Responsive/Responsive';
import { SenchaTestHooksComponent } from './SenchaTestHooks/SenchaTestHooks';
import { UpdateFunctionsComponent } from './UpdateFunctions/UpdateFunctions';
import { RelComponent } from './Rel/RelComponent/RelComponent';
import { RelArrayDeleteComponent } from './Rel/RelArrayDelete/RelArrayDelete';
import { RelDialogComponent } from './Rel/RelDialog/RelDialog';
import { RelEditorComponent } from './Rel/RelEditor/RelEditor';
import { RelGridColumnComponent } from './Rel/RelGridColumn/RelGridColumn';
import { RelMenuComponent } from './Rel/RelMenu/RelMenu';
import { RelTooltipComponent } from './Rel/RelTooltip/RelTooltip';
import { RelUpdateComponent } from './Rel/RelUpdate/RelUpdate';
const treeRoot = {
    id: '/',
    text: 'All',
    children: [
        { text: 'Simple', navIcon: 'icon-grids', component: SimpleComponent },
        { component: BasicEventComponent, text: 'Basic Event', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'single-event', component: SingleEventComponent, text: 'Single Event', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'element-insert-between', component: ElementInsertBetweenComponent, text: 'Element Insert Between', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'element-insert-end', component: ElementInsertEndComponent, text: 'Element Insert End', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'element-insert-start', component: ElementInsertStartComponent, text: 'Element Insert Start', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'insert-between', component: InsertBetweenComponent, text: 'Insert Between', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'insert-start', component: InsertStartComponent, text: 'Insert Start', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'insert-end', component: InsertEndComponent, text: 'Insert End', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'default', component: DefaultComponent, text: 'Default', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'html', component: HTMLInExtAngularComponent, text: 'HTML', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'lifecycle-unmount', component: LifecycleUnmountComponent, text: 'Lifecycle Unmount', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'simple-prop-update', component: SimplePropUpdateComponent, text: 'Simple Prop Update', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'update-class-name', component: UpdateClassNameComponent, text: 'Update Class Name', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'renderer-cell', component: RendererCellTestComponent, text: 'Renderer Cell', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'template-grid', component: TemplateGridComponent, text: 'Template Grid', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'template-list', component: TemplateListComponent, text: 'Template List', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'template-unmount', component: TemplateUnmountComponent, text: 'Template Unmount', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'render-when-ready', component: RenderWhenReadyComponent, text: 'Render When Ready', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'replace-with-markup', component: ReplaceNodeWithMarkupComponent, text: 'Replace Node with Markup', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'responsive', component: ResponsiveComponent, text: 'Responsive', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'sencha-test-hook', component: SenchaTestHooksComponent, text: 'Sencha Test Hooks', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'update-functions', component: UpdateFunctionsComponent, text: 'Update Functions', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'rel', component: RelComponent, text: 'Rel Component', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'rel-array-delete', component: RelArrayDeleteComponent, text: 'Rel Array Delete', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'rel-dialog', component: RelDialogComponent, text: 'Rel Dialog', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'rel-editor', component: RelEditorComponent, text: 'Rel Editor', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'rel-grid-column', component: RelGridColumnComponent, text: 'Rel Grid Column', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'rel-menu', component: RelMenuComponent, text: 'Rel Menu', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'rel-tooltip', component: RelTooltipComponent, text: 'Rel Tooltip', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' },
        { path: 'rel-update', component: RelUpdateComponent, text: 'Rel Update', iconCls: 'x-fa fa-dashboard', navIcon: 'icon-grids' }
    ]
};

function transform(node, parentUrl) {
    node.leaf = !node.hasOwnProperty('children');
    node.iconCls = node.navIcon;
    if (node.text && !node.id) {
        node.id = (parentUrl === '/' ? '' : parentUrl) + '/' + node.text.toLowerCase().replace(/\s/g, '_').replace(/[^\w]/g, '');
    }
    node.name = node.text;
    if (node.children) {
        node.children = node.children.filter(node => !node.hidden);
        node.children.forEach(child => transform(child, node.id))
    }
}

transform(treeRoot, null); 

export const navTreeRoot = treeRoot;