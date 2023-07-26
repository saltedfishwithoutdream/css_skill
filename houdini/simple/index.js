// 对应上面 HTML 代码中的 CSS.paintWorklet.addModule('/index.js')
registerPaint('drawBg', class {
  
    static get inputProperties() {return ['--color']}
    
    paint(ctx, size, properties) {
        const c = properties.get('--color');
       
        ctx.fillStyle = c;
        ctx.fillRect(0, 0, size.width, size.height);
    }
 });