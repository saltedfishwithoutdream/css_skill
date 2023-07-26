registerPaint(
    "borderDraw",
    class {
        static get inputProperties() {
            return ["--type", "--clipPath"];
        }

        paint(ctx, size, properties) {
            let type = properties.get("--type");
            let clipPath = properties.get("--clipPath");
            const { width, height } = size;
            const paths = clipPath.toString().split(",");
            const cc = function (obj) {
                const x = obj[0];
                const y = obj[1];
                let fx = 0,
                    fy = 0;
                if (x.indexOf("%") > -1) {
                    fx = (parseFloat(x) / 100) * width;
                } else if (x.indexOf("px") > -1) {
                    fx = parseFloat(x);
                }
                if (y.indexOf("%") > -1) {
                    fy = (parseFloat(y) / 100) * height;
                } else if (y.indexOf("px") > -1) {
                    fy = parseFloat(y);
                }
                return [fx, fy];
            };

            var p = cc(paths[0].trim().split(" "));
            ctx.beginPath();
            ctx.moveTo(p[0], p[1]);
            for (var i = 1; i < paths.length; i++) {
                p = cc(paths[i].trim().split(" "));
                ctx.lineTo(p[0], p[1]);
            }
            ctx.closePath();
            ctx.lineWidth = type * 2;
            ctx.strokeStyle = "#000";
            ctx.stroke();
        }
    }
);
