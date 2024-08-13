import React, { useEffect, useRef } from "react";

import Background from '../IMG/background.png';
import Player from '../IMG/player.png';

function MapScreen() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctx.fillStyle = 'red'
        ctx.fillRect(0,0,canvas.width, canvas.height)

        const image = new Image()
        image.src = Background
        
        const playerImage = new Image()
        playerImage.src = Player

        class Sprite {
            constructor({ position, velocity, image }) {
                this.position = position
                this.image = image
            }

            draw() {
                ctx.drawImage(this.image, this.position.x, this.position.y)
            }
        }

        const background = new Sprite ({position: {x:-785,y:-650},image: image})

        image.onload = () => {
            ctx.drawImage(playerImage, canvas.width / 2, canvas.height / 2)
        }

        const keys = {
            w: {
                pressed: false
            },
            a: {
                pressed: false
            },
            s: {
                pressed: false
            },
            d: {
                pressed: false
            }
        }

        function animate() {
            window.requestAnimationFrame(animate)
            background.draw()

            if (keys.w.pressed && lastKey === 'w') { background.position.y += 3 }
            else if (keys.a.pressed && lastKey === 'a') { background.position.x += 3 }
            else if (keys.s.pressed && lastKey === 's') { background.position.y -= 3 }
            else if (keys.d.pressed && lastKey === 'd') { background.position.x -= 3 }
        }

        animate()

        let lastKey = ''
        window.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'w':
                    keys.w.pressed = true
                    lastKey = 'w'
                    break
                case 'a':
                    keys.a.pressed = true
                    lastKey = 'a'
                    break
                case 's':
                    keys.s.pressed = true
                    lastKey = 's'
                    break
                case 'd':
                    keys.d.pressed = true
                    lastKey = 'd'
                    break
            }
        })

        window.addEventListener('keyup', (e) => {
            switch (e.key) {
                case 'w':
                    keys.w.pressed = false
                    break
                case 'a':
                    keys.a.pressed = false
                    break
                case 's':
                    keys.s.pressed = false
                    break
                case 'd':
                    keys.d.pressed = false
                    break
            }
        })

        return () => {
            ctx.clearRect(0,0,canvas.width,canvas.height);
        };
    }, []);

    return (
        <div className="gamescreen">
            <canvas className="gamescreen-canvas" ref={canvasRef}></canvas>
        </div>
    );
}

export default MapScreen;