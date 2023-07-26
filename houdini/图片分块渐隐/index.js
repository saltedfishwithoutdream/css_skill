registerPaint(
    "maskSet",class {
        static get inputProperties() {
            return ["--size-n", "--size-m", "--transition-time"];
        }

        paint(ctx, size, properties) {
            const n = properties.get("--size-n");
            const m = properties.get("--size-m");
            const t = properties.get("--transition-time");
            const width = size.width / n;
            const height = size.height / m;

            for (var i = 0; i < n; i++) {
                for (var j = 0; j < m; j++) {
                    ctx.fillStyle = "rgba(0,0,0," + (t * (Math.random() + 1)) + ")";
                    ctx.fillRect(i * width, j * height, width, height);
                }
            }
        }
    }
);