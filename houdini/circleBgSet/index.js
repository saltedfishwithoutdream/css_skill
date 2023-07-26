// 这个文件的名字为 index.js
registerPaint(
    "circleBgSet",
    class {
        static get inputProperties() {
            return [
                "--gap", 
                "--color",
                "--size"
            ];
        }

        paint(ctx, size, properties) {
            const gap = properties.get("--gap");
            const color = properties.get("--color");
            const eachSize = properties.get("--size");
            const halfSize = eachSize / 2;
            
            const n = size.width / eachSize;
            const m = size.height / eachSize;
            
            ctx.fillStyle = color;
           
            for (var i = 0; i < n + 1; i++) {
                for (var j = 0; j < m + 1; j++) {
                    
                    let x = i * eachSize + ( j % 2 === 0 ? halfSize : 0);
                    let y = j * eachSize / gap;
                    let radius = i * 0.85;
                    
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, 2 * Math.PI);
                    ctx.fill();
                }
            }
        }
    }
);
