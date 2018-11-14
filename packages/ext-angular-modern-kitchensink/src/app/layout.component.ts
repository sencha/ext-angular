import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent {
}

//[bodyStyle]="{'z-index': 100, background: '#025b80'}">

// <Container layout="hbox" cls="main-background">
// <Container layout="fit" flex={4}>
//   <TitleBar docked="top" shadow style={{zIndex: 2}}>
//     <Button 
//       align="left"
//       iconCls="x-fa fa-bars" 
//       handler={actions.toggleTree}
//     />
//     <div className="ext ext-sencha" style={{margin: '0 5px 0 7px', fontSize: '20px', width: '20px'}}/>
//     <a href="#" className="app-title">ExtReact Kitchen Sink - React v{REACT_VERSION}</a>
//   </TitleBar>
//   <Container layout="fit" flex={1}>
//     <NavTree 
//       docked="left"
//       width="300"
//       resizable={{
//         edges: 'east',
//         dynamic: true
//       }}
//       store={navStore} 
//       selection={selectedNavNode}
//       onSelectionChange={(tree, node) => this.onNavChange(node && node.getId())}
//       collapsed={!showTree}
//     /> 
//     <Breadcrumbs docked="top" node={selectedNavNode}/>
//       <Transition type="slide" bindDirectionToLocation padding="30">
//         { component ? (
//           <Container layout={layout} scrollable key={selectedNavNode.id} autoSize={layout !== 'fit'}>
//             { layout === 'fit' ? (
//                 <Container padding="30" layout="fit">{ example }</Container> 
//             ) : (
//                 example 
//             )}
//           </Container>
//         ) : selectedNavNode ? (
//           <NavView key={selectedNavNode.id} node={selectedNavNode}/>
//         ) : null }
//       </Transition>
//     </Container>
// </Container>
// { files && (
//   <Button 
//       align="right" 
//       iconCls={'x-font-icon ' + (showCode ? 'md-icon-close' : 'md-icon-code') }
//       ui="fab" 
//       top={Ext.os.is.Desktop ? 20 : 35}
//       right={21}
//       zIndex={1000}
//       handler={actions.toggleCode} 
//   /> 
// )} 
// { files && (
//   <Panel 
//     resizable={{ edges: 'west', dynamic: true }} 
//     flex={2}
//     layout="fit" 
//     collapsed={!showCode}
//     header={false}
//     collapsible={{ direction: 'right' }}
//     shadow 
//     style={{zIndex: 3}} 
//     hideAnimation={{type: 'slideOut', direction: 'right', duration: 100, easing: 'ease' }}
//     showAnimation={{type: 'slideIn', direction: 'left', duration: 100, easing: 'ease' }}
//   >
//     <Files files={files} /> 
//   </Panel>
// )}
// </Container>