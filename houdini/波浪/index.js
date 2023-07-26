registerPaint(
    "waveDraw",
    class {
        static get inputProperties() {
            return ["--animation-tick"];
        }
        paint(ctx, size, properties) {
            let tick = Number(properties.get("--animation-tick"));
            const { width, height } = size;
            const initY = height * 0.5;
            ctx.beginPath();
            for (let i = 0; i <= width; i++) {
                ctx.lineTo(i, initY + Math.sin((i + tick) / 20) * 10);
            }
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.lineTo(0, initY);
            ctx.closePath();

            ctx.fillStyle = 'rgba(255, 0, 0, 0.9)';
            ctx.fill();
        }
    }
);
