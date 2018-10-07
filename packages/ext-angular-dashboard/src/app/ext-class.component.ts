declare var Ext: any
export class ExtClassComponent {
  public classname: any
  public extend: any
  public defineConfig: any
  public createConfig: any
  public ext: any
  constructor (classname: any, extend: string, defineConfig: any, createConfig: any) {
    if (!Ext.ClassManager.isCreated(classname)) {
      Ext.apply(defineConfig, { extend: extend })
      Ext.define(classname, defineConfig)
    }
    this.classname = classname
    this.extend = extend
    this.defineConfig = defineConfig
    this.createConfig = createConfig
    this.ext = Ext.create(classname, createConfig)
  }
}