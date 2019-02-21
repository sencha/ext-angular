(function () {
class ExtAxis3d extends ExtBase {
	get adjustByMajorUnit(){return this.getAttribute('adjustByMajorUnit')};set adjustByMajorUnit(adjustByMajorUnit){this.setAttribute('adjustByMajorUnit',adjustByMajorUnit)}
	get background(){return this.getAttribute('background')};set background(background){this.setAttribute('background',background)}
	get center(){return this.getAttribute('center')};set center(center){this.setAttribute('center',center)}
	get chart(){return this.getAttribute('chart')};set chart(chart){this.setAttribute('chart',chart)}
	get depth(){return this.getAttribute('depth')};set depth(depth){this.setAttribute('depth',depth)}
	get expandRangeBy(){return this.getAttribute('expandRangeBy')};set expandRangeBy(expandRangeBy){this.setAttribute('expandRangeBy',expandRangeBy)}
	get fields(){return this.getAttribute('fields')};set fields(fields){this.setAttribute('fields',fields)}
	get floating(){return this.getAttribute('floating')};set floating(floating){this.setAttribute('floating',floating)}
	get grid(){return this.getAttribute('grid')};set grid(grid){this.setAttribute('grid',grid)}
	get hidden(){return this.getAttribute('hidden')};set hidden(hidden){this.setAttribute('hidden',hidden)}
	get id(){return this.getAttribute('id')};set id(id){this.setAttribute('id',id)}
	get label(){return this.getAttribute('label')};set label(label){this.setAttribute('label',label)}
	get layout(){return this.getAttribute('layout')};set layout(layout){this.setAttribute('layout',layout)}
	get length(){return this.getAttribute('length')};set length(length){this.setAttribute('length',length)}
	get limits(){return this.getAttribute('limits')};set limits(limits){this.setAttribute('limits',limits)}
	get linkedTo(){return this.getAttribute('linkedTo')};set linkedTo(linkedTo){this.setAttribute('linkedTo',linkedTo)}
	get majorTickSteps(){return this.getAttribute('majorTickSteps')};set majorTickSteps(majorTickSteps){this.setAttribute('majorTickSteps',majorTickSteps)}
	get margin(){return this.getAttribute('margin')};set margin(margin){this.setAttribute('margin',margin)}
	get maximum(){return this.getAttribute('maximum')};set maximum(maximum){this.setAttribute('maximum',maximum)}
	get maxZoom(){return this.getAttribute('maxZoom')};set maxZoom(maxZoom){this.setAttribute('maxZoom',maxZoom)}
	get minimum(){return this.getAttribute('minimum')};set minimum(minimum){this.setAttribute('minimum',minimum)}
	get minorTickSteps(){return this.getAttribute('minorTickSteps')};set minorTickSteps(minorTickSteps){this.setAttribute('minorTickSteps',minorTickSteps)}
	get minZoom(){return this.getAttribute('minZoom')};set minZoom(minZoom){this.setAttribute('minZoom',minZoom)}
	get needHighPrecision(){return this.getAttribute('needHighPrecision')};set needHighPrecision(needHighPrecision){this.setAttribute('needHighPrecision',needHighPrecision)}
	get position(){return this.getAttribute('position')};set position(position){this.setAttribute('position',position)}
	get radius(){return this.getAttribute('radius')};set radius(radius){this.setAttribute('radius',radius)}
	get reconcileRange(){return this.getAttribute('reconcileRange')};set reconcileRange(reconcileRange){this.setAttribute('reconcileRange',reconcileRange)}
	get renderer(){return this.getAttribute('renderer')};set renderer(renderer){this.setAttribute('renderer',renderer)}
	get rotation(){return this.getAttribute('rotation')};set rotation(rotation){this.setAttribute('rotation',rotation)}
	get segmenter(){return this.getAttribute('segmenter')};set segmenter(segmenter){this.setAttribute('segmenter',segmenter)}
	get style(){return this.getAttribute('style')};set style(style){this.setAttribute('style',style)}
	get title(){return this.getAttribute('title')};set title(title){this.setAttribute('title',title)}
	get titleMargin(){return this.getAttribute('titleMargin')};set titleMargin(titleMargin){this.setAttribute('titleMargin',titleMargin)}
	get totalAngle(){return this.getAttribute('totalAngle')};set totalAngle(totalAngle){this.setAttribute('totalAngle',totalAngle)}
	get visibleRange(){return this.getAttribute('visibleRange')};set visibleRange(visibleRange){this.setAttribute('visibleRange',visibleRange)}
	get onrangechange(){return this.getAttribute('onrangechange')};set onrangechange(onrangechange){this.setAttribute('onrangechange',onrangechange)}
	get onvisiblerangechange(){return this.getAttribute('onvisiblerangechange')};set onvisiblerangechange(onvisiblerangechange){this.setAttribute('onvisiblerangechange',onvisiblerangechange)}

	static XTYPE() {return 'axis3d'}
  static PROPERTIESOBJECT() { return {
    "adjustByMajorUnit": "Boolean",
    "background": "Object",
    "center": "Array",
    "chart": "Ext.chart.AbstractChart",
    "depth": "any",
    "expandRangeBy": "Number",
    "fields": "Array",
    "floating": "Number/Object",
    "grid": "Object",
    "hidden": "Boolean",
    "id": "String",
    "label": "Object",
    "layout": "Object/Ext.chart.axis.layout.Layout",
    "length": "Number",
    "limits": "Array/Object",
    "linkedTo": "Ext.chart.axis.Axis/String/Number",
    "majorTickSteps": "Number",
    "margin": "Number",
    "maximum": "Number",
    "maxZoom": "Number",
    "minimum": "Number",
    "minorTickSteps": "Number",
    "minZoom": "Number",
    "needHighPrecision": "Boolean",
    "position": "String",
    "radius": "Number",
    "reconcileRange": "Boolean",
    "renderer": "Function",
    "rotation": "Number",
    "segmenter": "Object/Ext.chart.axis.segmenter.Segmenter",
    "style": "Object",
    "title": "String/Object",
    "titleMargin": "Number",
    "totalAngle": "any",
    "visibleRange": "Array",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",

  }}
  static EVENTS() { return [
		{name:'rangechange',parameters:'axis,range,oldRange'},
		{name:'visiblerangechange',parameters:'axis,visibleRange'},
		{name:'ready',parameters:''}

  ]}
  static METHODS() { return [
		{ name:'clearRange',function: function() { return this.ext.clearRange() } },
		{ name:'getAlignment',function: function() { return this.ext.getAlignment() } },
		{ name:'getCoordFor',function: function(value,field,idx,items) { return this.ext.getCoordFor(value,field,idx,items) } },
		{ name:'getGridAlignment',function: function() { return this.ext.getGridAlignment() } },
		{ name:'getRange',function: function(recalculate) { return this.ext.getRange(recalculate) } },
		{ name:'getSurface',function: function() { return this.ext.getSurface() } },
		{ name:'performLayout',function: function() { return this.ext.performLayout() } },
		{ name:'processData',function: function() { return this.ext.processData() } },
		{ name:'reconcileRange',function: function() { return this.ext.reconcileRange() } },
		{ name:'renderFrame',function: function() { return this.ext.renderFrame() } },
		{ name:'setBoundSeriesRange',function: function(range) { return this.ext.setBoundSeriesRange(range) } },

  ]}

  constructor() {
    super()
    this.METHODS = ExtAxis3d.METHODS()
    this.XTYPE = ExtAxis3d.XTYPE()
    //this.PROPERTIES = ExtAxis3d.PROPERTIES()
    this.PROPERTIESOBJECT = ExtAxis3d.PROPERTIESOBJECT()
    this.EVENTS = ExtAxis3d.EVENTS()
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }
}
window.customElements.define('ext-axis3d', ExtAxis3d);
})();