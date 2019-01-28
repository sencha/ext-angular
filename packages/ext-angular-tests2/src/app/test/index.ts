
import {SimpleComponent} from './Simple/Simple';


declare var Ext: any;

const treeRoot = {
    id: '/',
    text: 'All',
    children: [
        { text: 'Simple', navIcon: 'icon-grids', component: SimpleComponent }
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