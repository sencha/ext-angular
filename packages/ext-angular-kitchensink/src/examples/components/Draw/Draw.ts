declare var Ext: any;
import { Component } from '@angular/core'

@Component({
  selector: 'draw-component',
  templateUrl: "./Draw.html",
  styles: [``]
})

export class DrawComponent {

  refs = {
    draw: {}
  };
  isPhone = Ext.os.is.Phone;
  supportsTouch = Ext.supports.Touch;

  drawRef: any;

    onReady = (event) => {
        this.drawRef = event.cmp;
        this.drawRef.on({
            element: 'element',
            mousedown: this.onMouseDown,
            mousemove: this.onMouseMove,
            mouseup: this.onMouseUp,
            mouseleave: this.onMouseUp
        });
    }

  clear = (event) => {
    this.drawRef.getSurface().destroy();
    this.drawRef.getSurface('overlay').destroy();
    this.drawRef.renderFrame();
  }

  onMouseDown = (e) => {
    let surface = this.drawRef.getSurface(), xy, x, y;

      if (!this.drawRef.sprite) {
        xy = surface.getEventXY(e);
        x = xy[0];
        y = xy[1];

        this.drawRef.list = [x, y, x, y];
        this.drawRef.lastEventX = x;
        this.drawRef.lastEventY = y;

        this.drawRef.sprite = surface.add({
          type: 'path',
          path: [
            'M', this.drawRef.list[0], this.drawRef.list[1], 'L', this.drawRef.list[0] + 1e-1, this.drawRef.list[1] + 1e-1
          ],
          lineWidth: 30 * Math.random() + 10,
            lineCap: 'round',
            lineJoin: 'round',
            strokeStyle: new Ext.util.Color(
              Math.random() * 127 + 128, Math.random() * 127 + 128, Math.random() * 127 + 128
            )
        });

        surface.renderFrame();
      }
  }

  onMouseMove = (e) => {
      let surface = this.drawRef.getSurface(), path, xy, x, y, dx, dy, D;

      if (this.drawRef.sprite) {
        xy = surface.getEventXY(e);
        x = xy[0];
        y = xy[1];
        dx = this.drawRef.lastEventX - x;
        dy = this.drawRef.lastEventY - y;
        D = 10;

        if (dx * dx + dy * dy < D * D) {
          this.drawRef.list.length -= 2;
          this.drawRef.list.push(x, y);
        } else {
          this.drawRef.list.length -= 2;
          this.drawRef.list.push(this.drawRef.lastEventX = x, this.drawRef.lastEventY = y);
          this.drawRef.list.push(this.drawRef.lastEventX + 1, this.drawRef.lastEventY + 1);
        }

        path = smoothList(this.drawRef.list);

        this.drawRef.sprite.setAttributes({
          path: path
        });

        if (Ext.os.is.Android) {
          Ext.this.drawRef.Animator.schedule(() => surface.renderFrame(), this.drawRef);
        } else {
          surface.renderFrame();
        }
      }
  }

  onMouseUp = (e) => {
    this.drawRef.sprite = null;
  }

  onResize = () => {
    const size = this.drawRef.element.getSize();
    this.drawRef.getSurface().setRect([0, 0, size.width, size.height]);
    this.drawRef.renderFrame();
  }

}

function smoothList(points) {
  if (points.length < 3) {
      return ['M', points[0], points[1]];
  }

  var dx = [], dy = [], result = ['M'], i, ln = points.length;

  for (i = 0; i < ln; i += 2) {
    dx.push(points[i]);
    dy.push(points[i + 1]);
  }

  dx = Ext.draw.Draw.spline(dx);
  dy = Ext.draw.Draw.spline(dy);
  result.push(dx[0], dy[0], 'C');

  for (i = 1, ln = dx.length; i < ln; i++) {
    result.push(dx[i], dy[i]);
  }

  return result;
}
